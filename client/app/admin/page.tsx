"use client";

import { useState, useEffect } from "react";
import LoadingSpinner from "@/components/LoadingSpinner";
import Toast from "@/components/Toast";

const API = process.env.NEXT_PUBLIC_API_URL || "";

type RoundMap = Record<string, number>;
type KeralaEntry = { specialty: string; category: string; rounds: RoundMap };
type AllIndiaEntry = { collegeName: string; specialty: string; category: string; rounds: RoundMap };
type CutoffData = {
  kerala: Record<string, KeralaEntry[]>;
  keralaRounds: string[];
  allIndia: AllIndiaEntry[];
  allIndiaRounds: string[];
};

const KERALA_CAMPUSES = ["Calicut", "Kottayam", "TVM"] as const;

const roundLabel = (r: string) => (isNaN(Number(r)) ? r : `Round ${r}`);

function CutoffTable({ rows, rounds, showCollege }: { rows: (KeralaEntry | AllIndiaEntry)[]; rounds: string[]; showCollege?: boolean }) {
  if (rows.length === 0) {
    return <p className="text-center text-slate-400 italic py-8 text-sm">No data available</p>;
  }
  return (
    <div className="overflow-x-auto max-h-[500px] overflow-y-auto">
      <table className="w-full text-left border-collapse text-sm">
        <thead className="sticky top-0 z-10">
          <tr className="bg-slate-50 border-b border-slate-200">
            {showCollege && <th className="px-4 py-3 text-xs font-bold text-slate-400 uppercase tracking-widest">College</th>}
            <th className="px-4 py-3 text-xs font-bold text-slate-400 uppercase tracking-widest">Specialty</th>
            <th className="px-4 py-3 text-xs font-bold text-slate-400 uppercase tracking-widest">Category</th>
            {rounds.map(r => (
              <th key={r} className="px-4 py-3 text-xs font-bold text-slate-400 uppercase tracking-widest text-right">
                {roundLabel(r)}
              </th>
            ))}
          </tr>
        </thead>
        <tbody className="divide-y divide-slate-100">
          {rows.map((row, i) => (
            <tr key={i} className="hover:bg-slate-50/50 transition-colors">
              {showCollege && (
                <td className="px-4 py-3 font-medium text-slate-700 max-w-[200px]">
                  {"collegeName" in row ? row.collegeName : ""}
                </td>
              )}
              <td className="px-4 py-3 text-slate-800 font-medium">{row.specialty}</td>
              <td className="px-4 py-3">
                <span className="inline-block px-2 py-0.5 bg-slate-100 text-slate-600 rounded-md text-xs font-semibold">
                  {row.category || "—"}
                </span>
              </td>
              {rounds.map(r => (
                <td key={r} className="px-4 py-3 text-right font-black text-[#1E6FC2]">
                  {row.rounds[r] ? row.rounds[r].toLocaleString() : <span className="text-slate-300 font-normal">—</span>}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default function AdminPage() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [users, setUsers] = useState<{ id: string; name: string; mobile: string; rank: number | null; createdAt: string }[]>([]);
  const [loading, setLoading] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [toast, setToast] = useState<{ message: string; type: "success" | "error" } | null>(null);
  const [cutoffs, setCutoffs] = useState<CutoffData | null>(null);
  const [cutoffLoading, setCutoffLoading] = useState(false);
  const [cutoffTab, setCutoffTab] = useState<"allIndia" | "kerala">("allIndia");
  const [keralaTab, setKeralaTab] = useState<typeof KERALA_CAMPUSES[number]>("Calicut");

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    try {
      const res = await fetch(`${API}/api/admin/login`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ username, password }),
      });
      const data = await res.json();
      if (data.success && data.token) {
        setIsLoggedIn(true);
        localStorage.setItem("admin_token", data.token);
        fetchUsers();
        fetchCutoffs();
      } else {
        setToast({ message: "Invalid credentials", type: "error" });
      }
    } catch {
      setToast({ message: "Connection failed", type: "error" });
    } finally {
      setSubmitting(false);
    }
  };

  const fetchUsers = async () => {
    setLoading(true);
    const token = localStorage.getItem("admin_token");
    try {
      const res = await fetch(`${API}/api/admin/users`, {
        headers: {
          'Authorization': `Bearer ${token}`
        }
      });
      const data = await res.json();
      if (data.success) {
        setUsers(data.users);
      } else if (res.status === 401) {
        handleLogout();
        setToast({ message: "Session expired", type: "error" });
      }
    } catch {
      setToast({ message: "Failed to fetch users", type: "error" });
    } finally {
      setLoading(false);
    }
  };

  const fetchCutoffs = async () => {
    setCutoffLoading(true);
    try {
      const res = await fetch(`${API}/api/admin/cutoffs`);
      const data = await res.json();
      if (!data.error) setCutoffs(data as CutoffData);
    } catch {
      // non-fatal
    } finally {
      setCutoffLoading(false);
    }
  };

  const handleExport = async () => {
    const token = localStorage.getItem("admin_token");
    try {
      const res = await fetch(`${API}/api/admin/export`, {
        headers: {
          'Authorization': `Bearer ${token}`
        }
      });
      
      if (!res.ok) throw new Error("Export failed");
      
      const blob = await res.blob();
      const url = window.URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = `Registered_Users_${new Date().toISOString().split('T')[0]}.xlsx`;
      document.body.appendChild(a);
      a.click();
      window.URL.revokeObjectURL(url);
      document.body.removeChild(a);
    } catch (error) {
      setToast({ message: "Failed to export data", type: "error" });
    }
  };

  const handleLogout = () => {
    localStorage.removeItem("admin_token");
    setIsLoggedIn(false);
    setUsers([]);
    setCutoffs(null);
  };

  useEffect(() => {
    if (localStorage.getItem("admin_token")) {
      // eslint-disable-next-line react-hooks/set-state-in-effect
      setIsLoggedIn(true);
      fetchUsers();
      fetchCutoffs();
    }
  }, []);

  if (!isLoggedIn) {
    return (
      <main className="min-h-screen flex items-center justify-center bg-slate-900 p-4">
        {toast && <Toast message={toast.message} type={toast.type} onClose={() => setToast(null)} />}
        <div className="w-full max-w-md bg-white rounded-3xl shadow-2xl p-10">
          <div className="text-center mb-8">
            <div className="w-16 h-16 bg-slate-900 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg shadow-slate-200">
              <span className="text-2xl text-white font-bold">A</span>
            </div>
            <h1 className="text-2xl font-black text-slate-900">Admin Login</h1>
            <p className="text-slate-500 text-sm mt-2 font-medium">Restricted Access</p>
          </div>
          <form onSubmit={handleLogin} className="space-y-6">
            <div>
              <label className="text-xs font-bold text-slate-400 uppercase tracking-widest px-1">Username</label>
              <input
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                className="w-full h-12 px-4 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-slate-900 transition-all mt-1"
                required
              />
            </div>
            <div>
              <label className="text-xs font-bold text-slate-400 uppercase tracking-widest px-1">Password</label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full h-12 px-4 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-slate-900 transition-all mt-1"
                required
              />
            </div>
            <button
              disabled={submitting}
              className="w-full h-14 bg-slate-900 text-white font-bold rounded-2xl shadow-xl shadow-slate-200 hover:bg-slate-800 transition-all flex items-center justify-center gap-3"
            >
              {submitting ? <LoadingSpinner size="sm" /> : "Sign In"}
            </button>
          </form>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-slate-50">
      <div className="bg-white border-b border-slate-200 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 h-20 flex items-center justify-between">
          <div className="flex items-center gap-3">
             <div className="w-10 h-10 bg-slate-900 rounded-xl flex items-center justify-center text-white font-bold">A</div>
             <h1 className="font-bold text-slate-900">Admin Dashboard</h1>
          </div>
          <div className="flex items-center gap-4">
            <button
              onClick={handleExport}
              className="px-6 h-10 bg-[#1E6FC2] text-white text-sm font-bold rounded-xl shadow-lg shadow-blue-200 hover:bg-blue-700 transition-all flex items-center gap-2"
            >
              <span>Download Excel</span>
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
              </svg>
            </button>
            <button
              onClick={handleLogout}
              className="px-4 h-10 text-slate-500 text-sm font-bold hover:text-rose-500 transition-colors"
            >
              Logout
            </button>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-10">
        <div className="flex flex-col gap-8">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
            <div>
              <h2 className="text-2xl font-bold text-slate-900">Registered Candidates</h2>
              <p className="text-slate-500 font-medium">Total: {users.length} unique candidates</p>
            </div>
            <button onClick={fetchUsers} className="text-sm font-bold text-[#1E6FC2] hover:underline">Refresh List</button>
          </div>

          <div className="bg-white rounded-3xl border border-slate-200 shadow-sm overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="bg-slate-50 border-b border-slate-200">
                    <th className="px-6 py-4 text-xs font-bold text-slate-400 uppercase tracking-widest">Date</th>
                    <th className="px-6 py-4 text-xs font-bold text-slate-400 uppercase tracking-widest">Candidate Name</th>
                    <th className="px-6 py-4 text-xs font-bold text-slate-400 uppercase tracking-widest">Mobile</th>
                    <th className="px-6 py-4 text-xs font-bold text-slate-400 uppercase tracking-widest text-right">Rank</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100">
                  {loading ? (
                    <tr>
                      <td colSpan={4} className="px-6 py-12 text-center">
                        <LoadingSpinner />
                      </td>
                    </tr>
                  ) : users.length === 0 ? (
                    <tr>
                      <td colSpan={4} className="px-6 py-12 text-center text-slate-400 font-medium italic">
                        No registrations yet
                      </td>
                    </tr>
                  ) : (
                    users.map((u) => (
                      <tr key={u.id} className="hover:bg-slate-50/50 transition-colors">
                        <td className="px-6 py-4 text-sm text-slate-500">
                          {new Date(u.createdAt).toLocaleDateString()}
                        </td>
                        <td className="px-6 py-4 font-bold text-slate-900">{u.name}</td>
                        <td className="px-6 py-4 text-sm font-medium text-slate-600">{u.mobile}</td>
                        <td className="px-6 py-4 text-sm font-black text-[#1E6FC2] text-right">
                          {u.rank ? u.rank.toLocaleString() : "N/A"}
                        </td>
                      </tr>
                    ))
                  )}
                </tbody>
              </table>
            </div>
          </div>
          {/* Allotment Cutoff Reference */}
          <div className="flex flex-col gap-4">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
              <div>
                <h2 className="text-2xl font-bold text-slate-900">Allotment Cutoffs</h2>
                <p className="text-slate-500 font-medium">Last rank allotted per round (Rounds 1–3)</p>
              </div>
              <button onClick={fetchCutoffs} className="text-sm font-bold text-[#1E6FC2] hover:underline">Refresh</button>
            </div>

            {/* Main tabs */}
            <div className="flex gap-2">
              {(["allIndia", "kerala"] as const).map((tab) => (
                <button
                  key={tab}
                  onClick={() => setCutoffTab(tab)}
                  className={`px-5 h-10 rounded-xl text-sm font-bold transition-all ${
                    cutoffTab === tab
                      ? "bg-slate-900 text-white shadow-md"
                      : "bg-white border border-slate-200 text-slate-500 hover:text-slate-800"
                  }`}
                >
                  {tab === "allIndia" ? "All India (MCC)" : "Kerala CEE"}
                </button>
              ))}
            </div>

            <div className="bg-white rounded-3xl border border-slate-200 shadow-sm overflow-hidden">
              {cutoffLoading ? (
                <div className="py-16 flex justify-center"><LoadingSpinner /></div>
              ) : !cutoffs ? (
                <p className="text-center text-slate-400 italic py-10 text-sm">Could not load cutoff data</p>
              ) : cutoffTab === "allIndia" ? (
                <CutoffTable rows={cutoffs.allIndia} rounds={cutoffs.allIndiaRounds} showCollege />
              ) : (
                <div>
                  {/* Kerala campus sub-tabs */}
                  <div className="flex gap-2 p-4 border-b border-slate-100">
                    {KERALA_CAMPUSES.map((campus) => (
                      <button
                        key={campus}
                        onClick={() => setKeralaTab(campus)}
                        className={`px-4 h-9 rounded-lg text-sm font-bold transition-all ${
                          keralaTab === campus
                            ? "bg-[#1E6FC2] text-white shadow"
                            : "bg-slate-100 text-slate-500 hover:text-slate-800"
                        }`}
                      >
                        {campus}
                      </button>
                    ))}
                  </div>
                  <CutoffTable rows={cutoffs.kerala[keralaTab] ?? []} rounds={cutoffs.keralaRounds} />
                </div>
              )}
            </div>
          </div>

        </div>
      </div>
    </main>
  );
}
