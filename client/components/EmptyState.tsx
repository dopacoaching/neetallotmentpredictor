"use client";

import { useRouter } from "next/navigation";

export default function EmptyState() {
  const router = useRouter();

  return (
    <div className="glass rounded-[2.5rem] p-12 flex flex-col items-center justify-center text-center border-white/60 animate-in">
      <div className="w-20 h-20 bg-slate-100 rounded-3xl flex items-center justify-center text-4xl mb-6 shadow-inner">
        🔍
      </div>
      <h3 className="text-2xl font-bold text-slate-900 mb-3 tracking-tight">
        No Matching Allotments
      </h3>
      <p className="text-slate-500 font-medium max-w-sm mb-8 leading-relaxed">
        We couldn&apos;t find any historical records matching your specific combination of rank, category, and specialty.
      </p>
      <button
        onClick={() => router.push("/predict")}
        className="h-14 px-10 bg-slate-900 text-white rounded-2xl font-bold hover:bg-slate-800 transition-all shadow-lg shadow-slate-200"
      >
        Adjust Search Filters
      </button>
    </div>
  );
}
