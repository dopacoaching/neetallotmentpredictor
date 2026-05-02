"use client";

import { useEffect, useState, useCallback } from "react";
import { useRouter } from "next/navigation";
import RegistrationGate from "@/components/RegistrationGate";
import FilterDropdown from "@/components/FilterDropdown";
import LoadingSpinner from "@/components/LoadingSpinner";
import Toast from "@/components/Toast";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/store";
import { setFilters as setReduxFilters, setResults } from "@/store/slices/predictSlice";

const API = process.env.NEXT_PUBLIC_API_URL || "";
const COUNSELLING_BODY_OPTIONS = ["All", "MCC", "Kerala CEE"];
const COLLEGE_TYPE_OPTIONS = ["All Colleges", "Government", "Self-Financing"];

export default function PredictPage() {
  const router = useRouter();
  const dispatch = useDispatch();
  const filters = useSelector((state: RootState) => state.predict.filters);
  const user = useSelector((state: RootState) => state.user);

  const [specialties, setSpecialties] = useState<string[]>(["All Fields"]);
  const [categories, setCategories] = useState<string[]>(["All"]);
  const [rounds, setRounds] = useState<string[]>(["All Rounds"]);
  const [loadingFilters, setLoadingFilters] = useState(true);
  const [submitting, setSubmitting] = useState(false);
  const [toast, setToast] = useState<string | null>(null);

  const fetchFiltersData = useCallback(async (counsellingBody: string) => {
    setLoadingFilters(true);
    try {
      const qs = counsellingBody !== "All"
        ? `?counselling_body=${encodeURIComponent(counsellingBody)}`
        : "";

      const [specRes, filterRes] = await Promise.all([
        fetch(`${API}/api/specialties${qs}`),
        fetch(`${API}/api/filters${qs}`),
      ]);
      const specData = await specRes.json();
      const filterData = await filterRes.json();

      const fetchedSpecialties: string[] = specData.specialties ?? [];
      const fetchedCategories: string[] = filterData.categories ?? [];
      const fetchedRounds: string[] = filterData.rounds ?? [];

      setSpecialties(["All Fields", ...fetchedSpecialties]);
      setCategories(["All", ...fetchedCategories]);
      setRounds(["All Rounds", ...fetchedRounds]);

      dispatch(setReduxFilters({
        specialty: "All Fields",
        category: fetchedCategories.includes("Open General")
          ? "Open General"
          : "All",
        round: "All Rounds",
      }));
    } catch {
      setToast("Failed to load search filters. Please refresh.");
    } finally {
      setLoadingFilters(false);
    }
  }, [dispatch]);

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    fetchFiltersData("All");
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);


  const handleSubmit = async () => {
    const userId = user.id;
    const rank = user.rank;

    if (!userId || !rank) {
      router.replace("/register");
      return;
    }

    setSubmitting(true);
    try {
      const res = await fetch(`${API}/api/predict`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          userId,
          rank,
          counsellingBody: filters.counsellingBody,
          specialty: filters.specialty,
          category: filters.category,
          collegeType: filters.collegeType,
          round: filters.round,
        }),
      });

      const data = await res.json();

      if (!res.ok) {
        setToast(data.message ?? data.error ?? "Something went wrong. Please try again.");
        return;
      }

      dispatch(setResults({
        results: data.results,
        resultCount: data.resultCount,
      }));
      router.push("/results");
    } catch {
      setToast("Network error. Please check your connection.");
    } finally {
      setSubmitting(false);
    }
  };

  // Reset only the filters — keep the user logged in
  const handleReset = () => {
    dispatch(setReduxFilters({
      counsellingBody: "All",
      collegeType: "All Colleges",
      category: "All",
      specialty: "All Fields",
      round: "All Rounds",
    }));
    fetchFiltersData("All");
  };

  return (
    <RegistrationGate>
      <main className="min-h-screen flex-1 flex flex-col items-center px-4 py-12 relative overflow-hidden bg-slate-50">


        {toast && (
          <Toast message={toast} type="error" onClose={() => setToast(null)} />
        )}

        <div className="w-full max-w-4xl z-10 animate-in">
          {/* Header Section */}
          <div className="text-center mb-10">
            <h1 className="text-4xl font-extrabold text-slate-900 tracking-tight mb-3">
              Configure Your <span className="gradient-text">Search</span>
            </h1>
            <p className="text-slate-500 font-medium max-w-lg mx-auto">
              Select your preferences to find the best matching dental colleges for your rank.
            </p>
          </div>

          <div className="glass rounded-[2.5rem] shadow-2xl shadow-blue-900/5 border border-white/50 p-8 sm:p-12 mb-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-8">

              {/* Counselling Type */}
              <div className="flex flex-col gap-2">
                <FilterDropdown
                  label="Counselling Type"
                  options={COUNSELLING_BODY_OPTIONS}
                  value={filters.counsellingBody}
                  onChange={(v) => {
                    dispatch(setReduxFilters({ counsellingBody: v }));
                    fetchFiltersData(v);
                  }}
                  disabled={submitting}
                />
                <p className="text-[10px] text-slate-400 px-1">Select MCC or State level counselling</p>
              </div>

              {/* College Type */}
              <div className="flex flex-col gap-2">
                <FilterDropdown
                  label="College Type"
                  options={COLLEGE_TYPE_OPTIONS}
                  value={filters.collegeType}
                  onChange={(v) => dispatch(setReduxFilters({ collegeType: v }))}
                  disabled={submitting}
                />
                <p className="text-[10px] text-slate-400 px-1">Choose between Govt or Private institutions</p>
              </div>

              {/* Category */}
              <div className="flex flex-col gap-2">
                <FilterDropdown
                  label="Category"
                  options={categories}
                  value={filters.category}
                  onChange={(v) => dispatch(setReduxFilters({ category: v }))}
                  loading={loadingFilters}
                  disabled={submitting}
                />
                <p className="text-[10px] text-slate-400 px-1">Select your reservation category</p>
              </div>

              {/* Specialty */}
              <div className="flex flex-col gap-2">
                <FilterDropdown
                  label="Specialty / Field"
                  options={specialties}
                  value={filters.specialty}
                  onChange={(v) => dispatch(setReduxFilters({ specialty: v }))}
                  loading={loadingFilters}
                  disabled={submitting}
                />
                <p className="text-[10px] text-slate-400 px-1">Preferred branch of MDS</p>
              </div>

              {/* Round */}
              <div className="flex flex-col gap-2">
                <FilterDropdown
                  label="Counselling Round"
                  options={rounds}
                  value={filters.round}
                  onChange={(v) => dispatch(setReduxFilters({ round: v }))}
                  loading={loadingFilters}
                  disabled={submitting}
                />
                <p className="text-[10px] text-slate-400 px-1">Search across all rounds or a specific one</p>
              </div>

            </div>

            <div className="mt-12 flex flex-col sm:flex-row justify-center items-center gap-4">
              <button
                onClick={handleReset}
                disabled={submitting}
                className="w-full sm:w-auto h-14 px-10 text-slate-500 font-bold text-sm rounded-2xl hover:bg-slate-100 hover:text-slate-700 transition-all disabled:opacity-50"
              >
                Reset Filters
              </button>
              <button
                onClick={handleSubmit}
                disabled={submitting || loadingFilters}
                className="w-full sm:w-auto h-14 px-12 bg-gradient-to-r from-[#1E6FC2] to-[#3498DB] text-white font-bold text-base rounded-2xl shadow-xl shadow-blue-200 hover:shadow-blue-300 hover:scale-[1.02] active:scale-[0.98] transition-all disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-3"
              >
                {submitting ? (
                  <>
                    <LoadingSpinner size="sm" />
                    <span>Analyzing...</span>
                  </>
                ) : (
                  <>
                    <span>Generate Report</span>
                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                    </svg>
                  </>
                )}
              </button>
            </div>
          </div>

          <div className="flex items-center justify-center gap-8 text-slate-400">
            <div className="flex items-center gap-2">
              <div className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
              <span className="text-xs font-semibold uppercase tracking-widest">3,200+ Records</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-1.5 h-1.5 rounded-full bg-blue-400" />
              <span className="text-xs font-semibold uppercase tracking-widest">2024-25 Data</span>
            </div>
          </div>
        </div>
      </main>
    </RegistrationGate>
  );
}
