"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { registerSchema, type RegisterInput } from "@/lib/validation";
import Toast from "@/components/Toast";
import LoadingSpinner from "@/components/LoadingSpinner";
import Image from "next/image";
import { useDispatch, useSelector } from "react-redux";
import { setUser } from "@/store/slices/userSlice";
import { RootState } from "@/store";

const API = process.env.NEXT_PUBLIC_API_URL || "";

export default function RegisterPage() {
  const router = useRouter();
  const dispatch = useDispatch();
  const [toast, setToast] = useState<{ message: string; type: "error" | "success" } | null>(null);
  const [submitting, setSubmitting] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<RegisterInput>({
    resolver: zodResolver(registerSchema),
    mode: "onBlur",
    defaultValues: { consent: false },
  });

  const user = useSelector((state: RootState) => state.user);

  useEffect(() => {
    if (user.isRegistered) {
      reset({
        name: user.name ?? "",
        mobile: user.mobile ?? "",
        rank: user.rank ?? 0,
        consent: true,
      });
    }
  }, [user, reset]);

  const onSubmit = async (data: RegisterInput) => {
    if (data.rank > 100000) {
      setToast({
        message: "Please enter a valid All India Rank (AIR).",
        type: "error",
      });
      return;
    }

    setSubmitting(true);
    try {
      const res = await fetch(`${API}/api/register`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      const json = await res.json();

      if (!res.ok || !json.success) {
        const msg = json.message ?? json.error ?? "Registration failed. Please try again.";
        setToast({ message: msg, type: "error" });
        return;
      }

      dispatch(
        setUser({
          id: json.userId,
          name: data.name,
          mobile: data.mobile,
          rank: data.rank,
        })
      );

      router.push("/predict");
    } catch {
      setToast({ message: "Network error. Please check your connection.", type: "error" });
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <main className="min-h-screen flex-1 flex items-center justify-center px-4 py-12 relative overflow-hidden bg-slate-50">
      {toast && (
        <Toast message={toast.message} type={toast.type} onClose={() => setToast(null)} />
      )}

      <div className="w-full max-w-md glass rounded-[2.5rem] shadow-2xl shadow-blue-900/5 border border-white/50 p-8 sm:p-10 z-10 animate-in">
        {/* Logo + Title */}
        <div className="text-center mb-8">
          <div className="relative inline-flex items-center justify-center w-20 h-20 rounded-[1.5rem] bg-white shadow-xl shadow-blue-900/10 mb-6 overflow-hidden border border-slate-100">
            <Image
              src="/logo.png"
              alt="Dr Bhatia Logo"
              width={64}
              height={64}
              className="object-contain"
              priority
            />
          </div>
          <h1 className="text-3xl font-extrabold text-slate-900 tracking-tight mb-2">
            NEET MDS <span className="gradient-text">2026</span>
          </h1>
          <p className="text-sm font-medium text-slate-500 max-w-[240px] mx-auto">
            Get personalized allotment predictions in seconds.
          </p>
        </div>

        <form onSubmit={handleSubmit(onSubmit)} noValidate className="flex flex-col gap-5">
          {/* Candidate Name */}
          <div className="flex flex-col gap-1.5">
            <label className="text-xs font-bold text-slate-400 uppercase tracking-widest px-1">
              Candidate Name
            </label>
            <input
              {...register("name")}
              type="text"
              placeholder="e.g. Dr. Arjun Kumar"
              className="h-12 px-4 text-base bg-white/80 border border-slate-200 rounded-2xl focus:outline-none focus:ring-2 focus:ring-[#1E6FC2] focus:border-transparent transition-all"
            />
            {errors.name && (
              <p className="text-[11px] font-semibold text-rose-500 px-1">{errors.name.message}</p>
            )}
          </div>

          {/* Mobile Number */}
          <div className="flex flex-col gap-1.5">
            <label className="text-xs font-bold text-slate-400 uppercase tracking-widest px-1">
              Mobile Number
            </label>
            <input
              {...register("mobile")}
              type="tel"
              placeholder="10-digit number"
              maxLength={10}
              className="h-12 px-4 text-base bg-white/80 border border-slate-200 rounded-2xl focus:outline-none focus:ring-2 focus:ring-[#1E6FC2] focus:border-transparent transition-all"
            />
            {errors.mobile && (
              <p className="text-[11px] font-semibold text-rose-500 px-1">{errors.mobile.message}</p>
            )}
          </div>

          {/* Rank */}
          <div className="flex flex-col gap-1.5">
            <label className="text-xs font-bold text-slate-400 uppercase tracking-widest px-1">
              NEET MDS Rank (AIR)
            </label>
            <input
              {...register("rank", { valueAsNumber: true })}
              type="number"
              placeholder="Enter your All India Rank"
              className="h-12 px-4 text-base bg-white/80 border border-slate-200 rounded-2xl focus:outline-none focus:ring-2 focus:ring-[#1E6FC2] focus:border-transparent transition-all font-bold text-[#1E6FC2]"
            />
            {errors.rank && (
              <p className="text-[11px] font-semibold text-rose-500 px-1">{errors.rank.message}</p>
            )}
          </div>

          {/* Consent */}
          <label className="flex items-start gap-3 cursor-pointer group px-1 pt-1">
            <div className="mt-0.5 relative shrink-0 flex items-center justify-center">
              <input
                {...register("consent")}
                type="checkbox"
                className="peer appearance-none w-5 h-5 border-2 border-slate-200 rounded-md checked:bg-[#1E6FC2] checked:border-[#1E6FC2] transition-all cursor-pointer"
              />
              <svg
                className="absolute w-3 h-3 text-white pointer-events-none hidden peer-checked:block"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="4"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <span className="text-xs text-slate-500 leading-relaxed font-medium group-hover:text-slate-700 transition-colors">
              I agree to receive counselling updates and guidance from Dr Bhatia experts.
            </span>
          </label>
          {errors.consent && (
            <p className="text-[11px] font-semibold text-rose-500 px-1 -mt-2">
              {errors.consent.message}
            </p>
          )}

          <button
            type="submit"
            disabled={submitting}
            className="h-14 w-full bg-gradient-to-r from-[#1E6FC2] to-[#3498DB] text-white font-bold text-base rounded-[1.25rem] shadow-xl shadow-blue-200 hover:shadow-blue-300 hover:scale-[1.02] active:scale-[0.98] transition-all disabled:opacity-60 disabled:cursor-not-allowed flex items-center justify-center gap-3 mt-1"
          >
            {submitting ? (
              <>
                <LoadingSpinner size="sm" />
                <span>Processing...</span>
              </>
            ) : (
              <>
                <span>Predict My Allotment</span>
                <svg
                  className="w-5 h-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2.5"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </>
            )}
          </button>
        </form>
      </div>
    </main>
  );
}
