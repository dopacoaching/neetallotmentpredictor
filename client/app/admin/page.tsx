"use client";

import { useState, useEffect, useMemo } from "react";
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

type SortConfig = { col: string; dir: "asc" | "desc" };

function SortIcon({ col, config }: { col: string; config: SortConfig | null }) {
  if (!config || config.col !== col) {
    return <span className="ml-1 text-slate-300">↕</span>;
  }
  return <span className="ml-1 text-[#1E6FC2]">{config.dir === "asc" ? "↑" : "↓"}</span>;
}

function CutoffTable({
  rows,
  rounds,
  showCollege,
  pdfTitle,
}: {
  rows: (KeralaEntry | AllIndiaEntry)[];
  rounds: string[];
  showCollege?: boolean;
  pdfTitle: string;
}) {
  const [search, setSearch] = useState("");
  const [categoryFilter, setCategoryFilter] = useState("All");
  const [sortConfig, setSortConfig] = useState<SortConfig | null>(null);
  const [pdfLoading, setPdfLoading] = useState(false);

  const categories = useMemo(() => {
    const set = new Set(rows.map(r => r.category).filter(Boolean));
    return ["All", ...[...set].sort()];
  }, [rows]);

  const displayRows = useMemo(() => {
    const q = search.toLowerCase();
    let filtered = rows.filter(row => {
      const matchSearch = !q ||
        row.specialty.toLowerCase().includes(q) ||
        row.category.toLowerCase().includes(q) ||
        ("collegeName" in row && row.collegeName.toLowerCase().includes(q));
      const matchCat = categoryFilter === "All" || row.category === categoryFilter;
      return matchSearch && matchCat;
    });

    if (sortConfig) {
      filtered = [...filtered].sort((a, b) => {
        let cmp = 0;
        if (sortConfig.col === "college") {
          cmp = ("collegeName" in a ? a.collegeName : "").localeCompare("collegeName" in b ? b.collegeName : "");
        } else if (sortConfig.col === "specialty") {
          cmp = a.specialty.localeCompare(b.specialty);
        } else if (sortConfig.col === "category") {
          cmp = a.category.localeCompare(b.category);
        } else {
          cmp = (a.rounds[sortConfig.col] ?? 0) - (b.rounds[sortConfig.col] ?? 0);
        }
        return sortConfig.dir === "asc" ? cmp : -cmp;
      });
    }
    return filtered;
  }, [rows, search, categoryFilter, sortConfig]);

  const toggleSort = (col: string) => {
    setSortConfig(prev => {
      if (!prev || prev.col !== col) return { col, dir: "asc" };
      if (prev.dir === "asc") return { col, dir: "desc" };
      return null;
    });
  };

  const handlePdfDownload = async () => {
    if (!displayRows.length) return;
    setPdfLoading(true);
    try {
      const [{ default: jsPDF }, { default: autoTable }] = await Promise.all([
        import("jspdf"),
        import("jspdf-autotable"),
      ]);

      const isLandscape = showCollege || rounds.length > 3;
      const doc = new jsPDF({ orientation: isLandscape ? "landscape" : "portrait", unit: "mm", format: "a4" });
      const pageW = isLandscape ? 297 : 210;
      const pageH = isLandscape ? 210 : 297;

      // ── Header band ──────────────────────────────────────
      doc.setFillColor(30, 111, 194);
      doc.rect(0, 0, pageW, 26, "F");
      doc.setTextColor(255, 255, 255);
      doc.setFontSize(15);
      doc.setFont("helvetica", "bold");
      doc.text("NEET MDS Allotment Cutoffs", 14, 11);
      doc.setFontSize(9);
      doc.setFont("helvetica", "normal");
      doc.text(pdfTitle, 14, 19);
      doc.text(
        `Generated: ${new Date().toLocaleDateString("en-IN", { day: "2-digit", month: "long", year: "numeric" })}`,
        pageW - 14, 19, { align: "right" }
      );

      // ── Filter summary strip ─────────────────────────────
      const filterParts = [
        search ? `Search: "${search}"` : "",
        categoryFilter !== "All" ? `Category: ${categoryFilter}` : "",
        sortConfig ? `Sorted by ${sortConfig.col} (${sortConfig.dir})` : "",
      ].filter(Boolean);
      const hasFilter = filterParts.length > 0;

      if (hasFilter) {
        doc.setFillColor(241, 245, 249);
        doc.rect(0, 26, pageW, 9, "F");
        doc.setFontSize(7.5);
        doc.setTextColor(100, 116, 139);
        doc.text(filterParts.join("  ·  "), 14, 32);
        doc.text(`${displayRows.length} record${displayRows.length !== 1 ? "s" : ""}`, pageW - 14, 32, { align: "right" });
      }

      const startY = hasFilter ? 38 : 30;
      const colOffset = showCollege ? 3 : 2;

      const head = [[
        ...(showCollege ? ["College"] : []),
        "Specialty", "Category",
        ...rounds.map(roundLabel),
      ]];

      const body = displayRows.map(row => [
        ...(showCollege ? [("collegeName" in row ? row.collegeName : "")] : []),
        row.specialty,
        row.category || "—",
        ...rounds.map(r => (row.rounds[r] ? row.rounds[r].toLocaleString() : "—")),
      ]);

      const roundColStyles = rounds.reduce<Record<number, object>>((acc, _, i) => {
        acc[i + colOffset] = { halign: "right", fontStyle: "bold", textColor: [30, 111, 194] };
        return acc;
      }, {});

      autoTable(doc, {
        head,
        body,
        startY,
        theme: "grid",
        styles: { fontSize: 8, cellPadding: { top: 3, bottom: 3, left: 4, right: 4 }, lineColor: [226, 232, 240] },
        headStyles: { fillColor: [15, 23, 42], textColor: [255, 255, 255], fontStyle: "bold" },
        alternateRowStyles: { fillColor: [248, 250, 252] },
        columnStyles: {
          ...(showCollege ? { 0: { cellWidth: 58, fontStyle: "bold" as const } } : {}),
          [showCollege ? 1 : 0]: { cellWidth: 52 },
          [showCollege ? 2 : 1]: { cellWidth: 24, halign: "center" as const },
          ...roundColStyles,
        },
        margin: { left: 14, right: 14 },
      } as object);

      // ── Footer on every page ─────────────────────────────
      const pageCount = doc.getNumberOfPages();
      for (let i = 1; i <= pageCount; i++) {
        doc.setPage(i);
        doc.setFontSize(7.5);
        doc.setTextColor(148, 163, 184);
        const fy = pageH - 6;
        doc.text("DOPA Coaching · NEET MDS Allotment Predictor", 14, fy);
        doc.text(`Page ${i} of ${pageCount}`, pageW - 14, fy, { align: "right" });
      }

      doc.save(`${pdfTitle.replace(/\s+/g, "_")}_${new Date().toISOString().split("T")[0]}.pdf`);
    } finally {
      setPdfLoading(false);
    }
  };

  if (rows.length === 0) {
    return <p className="text-center text-slate-400 italic py-8 text-sm">No data available</p>;
  }

  const thClass = "px-4 py-3 text-xs font-bold text-slate-400 uppercase tracking-widest cursor-pointer hover:text-slate-700 select-none";

  return (
    <div>
      {/* ── Filter bar ───────────────────────────────────── */}
      <div className="flex flex-wrap items-center gap-3 px-4 py-3 border-b border-slate-100 bg-slate-50/60">
        <div className="relative flex-1 min-w-[180px]">
          <svg className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400 pointer-events-none" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
            <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
          </svg>
          <input
            type="text"
            placeholder={showCollege ? "Search college or specialty…" : "Search specialty…"}
            value={search}
            onChange={e => setSearch(e.target.value)}
            className="w-full h-9 pl-9 pr-3 text-sm bg-white border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
          />
        </div>

        <select
          value={categoryFilter}
          onChange={e => setCategoryFilter(e.target.value)}
          className="h-9 px-3 text-sm bg-white border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-slate-700 font-medium"
        >
          {categories.map(cat => (
            <option key={cat} value={cat}>{cat === "All" ? "All Categories" : cat}</option>
          ))}
        </select>

        <span className="text-xs font-semibold text-slate-400 whitespace-nowrap">
          {displayRows.length} record{displayRows.length !== 1 ? "s" : ""}
        </span>

        {(search || categoryFilter !== "All" || sortConfig) && (
          <button
            onClick={() => { setSearch(""); setCategoryFilter("All"); setSortConfig(null); }}
            className="h-9 px-3 text-xs font-bold text-slate-500 hover:text-rose-500 border border-slate-200 bg-white rounded-lg transition-colors"
          >
            Clear
          </button>
        )}

        <button
          onClick={handlePdfDownload}
          disabled={pdfLoading || displayRows.length === 0}
          className="h-9 px-4 flex items-center gap-2 bg-[#1E6FC2] text-white text-sm font-bold rounded-lg shadow shadow-blue-200 hover:bg-blue-700 transition-all disabled:opacity-50 ml-auto"
        >
          {pdfLoading ? (
            <svg className="w-4 h-4 animate-spin" fill="none" viewBox="0 0 24 24">
              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
            </svg>
          ) : (
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
            </svg>
          )}
          <span>{pdfLoading ? "Generating…" : "Download PDF"}</span>
        </button>
      </div>

      {/* ── Table ────────────────────────────────────────── */}
      <div className="overflow-x-auto max-h-[520px] overflow-y-auto">
        {displayRows.length === 0 ? (
          <p className="text-center text-slate-400 italic py-8 text-sm">No results match your filters</p>
        ) : (
          <table className="w-full text-left border-collapse text-sm">
            <thead className="sticky top-0 z-10">
              <tr className="bg-slate-50 border-b border-slate-200">
                {showCollege && (
                  <th className={thClass} onClick={() => toggleSort("college")}>
                    College <SortIcon col="college" config={sortConfig} />
                  </th>
                )}
                <th className={thClass} onClick={() => toggleSort("specialty")}>
                  Specialty <SortIcon col="specialty" config={sortConfig} />
                </th>
                <th className={thClass} onClick={() => toggleSort("category")}>
                  Category <SortIcon col="category" config={sortConfig} />
                </th>
                {rounds.map(r => (
                  <th key={r} className={`${thClass} text-right`} onClick={() => toggleSort(r)}>
                    {roundLabel(r)} <SortIcon col={r} config={sortConfig} />
                  </th>
                ))}
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {displayRows.map((row, i) => (
                <tr key={i} className="hover:bg-slate-50/50 transition-colors">
                  {showCollege && (
                    <td className="px-4 py-3 font-medium text-slate-700 max-w-[200px] text-sm">
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
        )}
      </div>
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
                <CutoffTable key="allIndia" rows={cutoffs.allIndia} rounds={cutoffs.allIndiaRounds} showCollege pdfTitle="All India (MCC) Cutoffs" />
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
                  <CutoffTable key={`kerala-${keralaTab}`} rows={cutoffs.kerala[keralaTab] ?? []} rounds={cutoffs.keralaRounds} pdfTitle={`Kerala CEE — ${keralaTab} Campus`} />
                </div>
              )}
            </div>
          </div>

        </div>
      </div>
    </main>
  );
}
