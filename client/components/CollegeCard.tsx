interface CollegeCardProps {
  collegeName: string;
  state: string;
  specialty: string;
  degree: string;
  category: string;
  quota: string;
  round: string;
  cutoffRank: number;
  counsellingBody: string;
  userRank: number;
  year: number;
  probability: 'High' | 'Good' | 'Difficult';
}

export default function CollegeCard({
  collegeName,
  state,
  specialty,
  degree,
  category,
  quota,
  round,
  cutoffRank,
  counsellingBody,
  userRank,
  year,
  probability,
}: CollegeCardProps) {
  const isHigh = probability === 'High';
  const isGood = probability === 'Good';
  const isDifficult = probability === 'Difficult';

  const cardStyles = isHigh 
    ? "border-emerald-100 bg-white" 
    : isGood 
    ? "border-blue-100 bg-white" 
    : "border-rose-100 bg-rose-50/30";

  const bannerColor = isHigh ? "bg-emerald-500" : isGood ? "bg-blue-500" : "bg-rose-400";
  
  const badgeStyles = isHigh 
    ? "bg-emerald-100 text-emerald-700" 
    : isGood 
    ? "bg-blue-100 text-blue-700" 
    : "bg-rose-100 text-rose-700";

  const probabilityLabel = isHigh ? "High Chance" : isGood ? "Good Chance" : "Difficult";

  return (
    <div
      className={`relative overflow-hidden rounded-2xl border transition-all duration-300 hover:shadow-lg ${cardStyles}`}
    >
      {/* Top Banner */}
      <div className={`absolute top-0 left-0 right-0 h-1 ${bannerColor}`} />

      <div className="p-5 flex flex-col gap-3">
        <div className="flex items-start justify-between gap-3">
          <div className="flex flex-col gap-1">
            <h3 className="font-bold text-slate-900 text-lg leading-tight">
              {collegeName}
            </h3>
            <div className="flex items-center gap-2 text-xs font-semibold text-slate-500 uppercase tracking-wider">
              {state && <><span>{state}</span><span className="w-1 h-1 rounded-full bg-slate-300" /></>}
              <span>{year} Allotment</span>
            </div>
          </div>
          <span
            className={`shrink-0 text-[10px] font-bold px-2.5 py-1 rounded-full uppercase tracking-widest ${badgeStyles}`}
          >
            {probabilityLabel}
          </span>
        </div>

        <div className="space-y-1">
          <div className="text-sm font-medium text-slate-700 flex items-center gap-2">
            <span className={`w-2 h-2 rounded-full ${isDifficult ? 'bg-rose-400' : 'bg-[#1E6FC2]'}`} />
            {specialty}
          </div>
          {degree && <div className="text-xs text-slate-500 pl-4">{degree}</div>}
        </div>

        <div className="grid grid-cols-2 gap-3 py-3 border-y border-slate-100 my-1">
          <div className="flex flex-col gap-0.5">
            <span className="text-[10px] text-slate-400 uppercase font-bold">Cutoff Rank</span>
            <span className="text-sm font-bold text-slate-800">{cutoffRank.toLocaleString()}</span>
          </div>
          <div className="flex flex-col gap-0.5 text-right">
            <span className="text-[10px] text-slate-400 uppercase font-bold">Your Rank</span>
            <span className="text-sm font-bold text-[#1E6FC2]">{userRank.toLocaleString()}</span>
          </div>
        </div>

        <div className="flex flex-wrap gap-2 text-[11px]">
          {round && (
            <span className="px-2 py-0.5 bg-slate-100 text-slate-600 rounded-md font-medium">
              {round}
            </span>
          )}
          {category && (
            <span className="px-2 py-0.5 bg-slate-100 text-slate-600 rounded-md font-medium">
              {category}
            </span>
          )}
        </div>

         <div className="mt-1 pt-2 border-t border-slate-50 flex items-center justify-between">
            <span className="text-[10px] text-slate-400">{quota ? `Allotted via: ${quota}` : ''}</span>
            {!isDifficult ? (
               <span className="text-[10px] font-bold text-emerald-600">+{cutoffRank - userRank} Rank Margin</span>
            ) : (
               <span className="text-[10px] font-bold text-rose-500">-{userRank - cutoffRank} Rank Deficit</span>
            )}
         </div>
      </div>
    </div>
  );
}
