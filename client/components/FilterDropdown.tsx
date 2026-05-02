"use client";

interface FilterDropdownProps {
  label: string;
  options: string[];
  value: string;
  onChange: (value: string) => void;
  loading?: boolean;
  disabled?: boolean;
}

export default function FilterDropdown({
  label,
  options,
  value,
  onChange,
  loading = false,
  disabled = false,
}: FilterDropdownProps) {
  return (
    <div className="flex flex-col gap-1.5">
      <label className="text-sm font-medium text-gray-700">{label}</label>
      <div className="relative">
        <select
          value={value}
          onChange={(e) => onChange(e.target.value)}
          disabled={disabled || loading}
          className="w-full h-11 px-3 pr-8 text-base border border-gray-300 rounded-lg bg-white focus:outline-none focus:ring-2 focus:ring-[#1E6FC2] focus:border-transparent disabled:bg-gray-100 disabled:text-gray-400 appearance-none cursor-pointer"
        >
          {loading ? (
            <option>Loading...</option>
          ) : (
            options.map((opt) => (
              <option key={opt} value={opt}>
                {opt}
              </option>
            ))
          )}
        </select>
        <div className="pointer-events-none absolute inset-y-0 right-3 flex items-center text-gray-500">
          <svg
            className="w-4 h-4"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 9l-7 7-7-7"
            />
          </svg>
        </div>
      </div>
    </div>
  );
}
