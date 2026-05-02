"use client";

import { useEffect } from "react";

interface ToastProps {
  message: string;
  type?: "error" | "success" | "info";
  onClose: () => void;
  duration?: number;
}

export default function Toast({
  message,
  type = "error",
  onClose,
  duration = 4000,
}: ToastProps) {
  useEffect(() => {
    const timer = setTimeout(onClose, duration);
    return () => clearTimeout(timer);
  }, [onClose, duration]);

  const colors = {
    error: "bg-red-600",
    success: "bg-[#1A7A4A]",
    info: "bg-[#1E6FC2]",
  };

  return (
    <div
      className={`fixed top-4 right-4 z-50 max-w-sm px-4 py-3 rounded-lg shadow-lg text-white text-sm flex items-start gap-3 ${colors[type]}`}
    >
      <span className="flex-1">{message}</span>
      <button
        onClick={onClose}
        className="shrink-0 font-bold text-white/80 hover:text-white"
        aria-label="Close"
      >
        ×
      </button>
    </div>
  );
}
