"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import RegistrationGate from "@/components/RegistrationGate";
import CollegeCard from "@/components/CollegeCard";
import EmptyState from "@/components/EmptyState";
import Disclaimer from "@/components/Disclaimer";
import LoadingSpinner from "@/components/LoadingSpinner";
import { useSelector } from "react-redux";
import { RootState } from "@/store";
import type { AllotmentResult } from "@/types";

export default function ResultsPage() {
  const router = useRouter();
  const { results, resultCount, filters } = useSelector((state: RootState) => state.predict);
  const { rank: userRank } = useSelector((state: RootState) => state.user);
  
  // Default false: show High/Good chance first; toggle to reveal all
  const [showAll, setShowAll] = useState(false);

  useEffect(() => {
    if (!results) {
      router.replace("/predict");
    }
  }, [results, router]);

  if (!results || userRank === null) {
    return (
      <div className="flex-1 flex items-center justify-center">
        <LoadingSpinner label="Loading results…" />
      </div>
    );
  }

  const highChanceResults = results.filter((r) => r.highChance);
  const lowChanceResults = results.filter((r) => !r.highChance);
  const displayedResults: AllotmentResult[] = showAll
    ? [...highChanceResults, ...lowChanceResults]
    : highChanceResults;

  return (
    <RegistrationGate>
      <main className="min-h-screen flex-1 flex flex-col items-center px-4 py-12 relative overflow-hidden bg-slate-50">
        {/* Decorative Background Elements */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0 pointer-events-none">
          <div className="absolute top-[5%] -left-[10%] w-[40%] h-[40%] rounded-full bg-blue-100/40 blur-[120px]" />
          <div className="absolute bottom-[10%] -right-[10%] w-[35%] h-[35%] rounded-full bg-emerald-100/30 blur-[100px]" />
        </div>

        <div className="w-full max-w-5xl z-10 animate-in">
          {/* Header Section */}
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10 px-2">
            <div className="space-y-2">
              <h1 className="text-4xl font-extrabold text-slate-900 tracking-tight">
                Allotment <span className="gradient-text">Report</span>
              </h1>
              <p className="text-slate-500 font-medium">
                Results for AIR <span className="text-[#1E6FC2] font-bold">#{userRank.toLocaleString()}</span>
                {filters.counsellingBody && filters.counsellingBody !== "All" && (
                  <> under <span className="text-slate-900 font-bold">{filters.counsellingBody}</span></>
                )}
                {filters.specialty && filters.specialty !== "All Fields" && (
                  <> in <span className="text-slate-900 font-bold">{filters.specialty}</span></>
                )}
              </p>
            </div>

            <div className="flex items-center gap-3">
              <div className="glass px-5 py-3 rounded-2xl flex flex-col items-center border-white/60 shadow-sm">
                <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Matches</span>
                <span className="text-xl font-bold text-slate-900">{resultCount}</span>
              </div>
              <div className="bg-emerald-500 px-5 py-3 rounded-2xl flex flex-col items-center shadow-lg shadow-emerald-100">
                <span className="text-[10px] font-bold text-white/80 uppercase tracking-widest">High Probability</span>
                <span className="text-xl font-bold text-white">{highChanceResults.length}</span>
              </div>
            </div>
          </div>

          {/* Empty state */}
          {resultCount === 0 && <EmptyState />}

          {/* Results Grid */}
          {resultCount > 0 && (
            <div className="space-y-8">
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {displayedResults.map((r, i) => (
                  <CollegeCard
                    key={`${r.collegeName}-${r.specialty}-${i}`}
                    collegeName={r.collegeName}
                    state={r.state}
                    specialty={r.specialty}
                    degree={r.degree}
                    category={r.category}
                    quota={r.quota}
                    round={r.round}
                    cutoffRank={r.cutoffRank}
                    userRank={userRank}
                    year={r.year}
                    probability={r.probability}
                  />
                ))}
              </div>

              {lowChanceResults.length > 0 && (
                <div className="flex justify-center pt-4">
                  <button
                    onClick={() => setShowAll((prev) => !prev)}
                    className="group h-14 px-10 glass text-slate-600 font-bold text-sm rounded-2xl border-white hover:bg-white transition-all flex items-center gap-3 shadow-sm"
                  >
                    {showAll ? (
                      <>
                        <span>Hide Low Probability</span>
                        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="3">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M5 15l7-7 7 7" />
                        </svg>
                      </>
                    ) : (
                      <>
                        <span>View All Matches ({resultCount})</span>
                        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="3">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                        </svg>
                      </>
                    )}
                  </button>
                </div>
              )}
            </div>
          )}

          {/* Bottom Actions */}
          <div className="mt-16 flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              onClick={() => router.push("/predict")}
              className="w-full sm:w-auto h-14 px-12 bg-[#1E6FC2] text-white font-bold text-base rounded-2xl shadow-xl shadow-blue-200 hover:shadow-blue-300 hover:scale-[1.02] active:scale-[0.98] transition-all flex items-center justify-center gap-3"
            >
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
              <span>Refine Search</span>
            </button>
            <button
              onClick={() => {
                // Keep the state for persistence as requested
                router.push("/predict");
              }}
              className="w-full sm:w-auto h-14 px-10 text-slate-400 font-bold text-sm rounded-2xl hover:text-slate-600 transition-all flex items-center justify-center gap-2"
            >
              Start Over
            </button>
          </div>

          <div className="mt-12 opacity-60">
            <Disclaimer />
          </div>
        </div>
      </main>
    </RegistrationGate>
  );
}
