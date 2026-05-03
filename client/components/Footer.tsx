export default function Footer() {
  return (
    <footer className="bg-[#0D3B6E] text-blue-200 mt-auto">
      <div className="max-w-6xl mx-auto px-4 py-6 text-center text-sm">
        <p className="font-medium text-white mb-1 uppercase tracking-wide">
          Dr Bhatia MDS Kerala
        </p>
        <p className="text-xs">
          Comprehensive Coaching for NEET MDS & Dental Careers
        </p>
        <div className="text-xs mt-1">
          <a 
            href="tel:+918943733033"
            className="flex items-center justify-center gap-2 text-slate-400 hover:text-blue-500 transition-colors font-medium"
          >
            <span className="w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center">
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
            </span>
            +91 89437 33033
          </a>
        </div>
        <p className="text-xs mt-2 text-blue-300">
          &copy; {new Date().getFullYear()} Dr Bhatia MDS Kerala. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
}
