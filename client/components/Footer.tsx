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
        <p className="text-xs mt-1">
          <a
            href="tel:+919645302200"
            className="hover:text-white transition-colors"
          >
            +91 9645302200
          </a>
        </p>
        <p className="text-xs mt-2 text-blue-300">
          &copy; {new Date().getFullYear()} Dr Bhatia MDS Kerala. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
}
