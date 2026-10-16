import Link from "next/link";

const Footer = () => (
    <footer className="w-full border-t border-white/10 bg-[#0c0d0f] text-white">
        <div className="mx-auto flex max-w-300 flex-col items-center justify-between gap-3 px-5 py-6 sm:flex-row">

            <Link href="/" className="flex items-center gap-2">
                <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="#ccff00"
                    strokeWidth="2.5"
                    className="h-5 w-5"
                    aria-hidden="true"
                >
                    <path d="M4 4l16 16M8 3l-5 5m18 8l-5 5M9 2l-7 7m20 6l-7 7" />
                </svg>
                <span className="text-sm font-extrabold tracking-wider">FITLOG</span>
            </Link>

            <p className="text-xs text-gray-400">
                © 2026 FitLog — Workout Library. Train hard, log honest.
            </p>
        </div>
    </footer>
);

export default Footer;