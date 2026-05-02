"use client";

import Link from "next/link";
import Image from "next/image";

export default function Navbar() {
  return (
    <nav className="bg-[#0D3B6E] text-white shadow-md">
      <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-4 group">
          <div className="w-12 h-12 relative bg-white rounded-xl p-1.5 shadow-lg shadow-black/10 transition-transform group-hover:scale-105">
            <Image
              src="/logo.png"
              alt="Dr Bhatia Logo"
              fill
              sizes="48px"
              className="object-contain"
              priority
            />
          </div>
          <div className="flex flex-col justify-center">
            <p className="font-bold text-lg leading-none uppercase tracking-wider text-white">Dr Bhatia</p>
            <p className="text-[11px] text-blue-200 font-medium leading-none mt-1 hidden sm:block">
              MDS Kerala
            </p>
          </div>
        </Link>
        <div className="text-xs text-blue-200 text-right">
          <p className="font-medium text-white text-sm">NEET MDS Predictor</p>
          <p className="hidden sm:block">Predictor Tool</p>
        </div>
      </div>
    </nav>
  );
}
