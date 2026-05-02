"use client";

import { useState, useEffect } from "react";
import LoadingSpinner from "@/components/LoadingSpinner";
import Toast from "@/components/Toast";

const API = process.env.NEXT_PUBLIC_API_URL || "";

export default function AdminPage() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [users, setUsers] = useState<{ id: string; name: string; mobile: string; rank: number | null; createdAt: string }[]>([]);
  const [loading, setLoading] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [toast, setToast] = useState<{ message: string; type: "success" | "error" } | null>(null);

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
      if (data.success) {
        setIsLoggedIn(true);
        localStorage.setItem("admin_session", "active");
        fetchUsers();
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
    try {
      const res = await fetch(`${API}/api/admin/users`);
      const data = await res.json();
      if (data.success) {
        setUsers(data.users);
      }
    } catch {
      setToast({ message: "Failed to fetch users", type: "error" });
    } finally {
      setLoading(false);
    }
  };

  const handleExport = () => {
    window.open(`${API}/api/admin/export`, "_blank");
  };

  const handleLogout = () => {
    localStorage.removeItem("admin_session");
    setIsLoggedIn(false);
    setUsers([]);
  };

  useEffect(() => {
    if (localStorage.getItem("admin_session") === "active") {
      // eslint-disable-next-line react-hooks/set-state-in-effect
      setIsLoggedIn(true);
      fetchUsers();
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
        </div>
      </div>
    </main>
  );
}
