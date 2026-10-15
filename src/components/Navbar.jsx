"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const Navbar = () => {
    const pathname = usePathname();


    return (
        <nav className="w-full border-b border-white/5 bg-[#0c0d0f] text-white">
            <div className="relative mx-auto flex h-14 max-w-[1200px] items-center justify-between px-5">

                {/* Left: Logo */}
                <Link href="/" className="flex items-center gap-2">
                    <svg
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="#ccff00"
                        strokeWidth="2.5"
                        className="h-6 w-6"
                        aria-hidden="true"
                    >
                        <path d="M4 4l16 16M8 3l-5 5m18 8l-5 5M9 2l-7 7m20 6l-7 7" />
                    </svg>

                    <span className="text-sm font-extrabold tracking-wide">
                        FITLOG
                    </span>
                </Link>

                {/* Middle: Navigation */}
                <div className="absolute left-1/2 flex -translate-x-1/2 items-center gap-1">
                    <Link
                        href="/workouts"
                        className={`rounded-full px-3 py-1.5 text-[10px] transition-colors ${pathname === "/workouts"
                                ? "bg-[#ccff00]/10 font-semibold text-[#ccff00]"
                                : "text-gray-400 hover:text-white"
                            }`}
                    >
                        Workouts
                    </Link>

                    <Link
                        href="/my-plan"
                        className={`rounded-full px-3 py-1.5 text-[10px] transition-colors ${pathname === "/my-plan"
                                ? "bg-[#ccff00]/10 font-semibold text-[#ccff00]"
                                : "text-gray-400 hover:text-white"
                            }`}
                    >
                        My Plan
                    </Link>
                </div>

                {/* Right: Status counters */}
                <div className="flex items-center gap-5 text-[10px]">
                    <div className="flex items-center gap-2">
                        <span className="text-gray-300">Plan</span>
                        <span className="flex h-4 min-w-4 items-center justify-center rounded-full bg-[#ccff00] px-1 font-bold text-black">
                            0
                        </span>
                    </div>

                    <div className="flex items-center gap-2">
                        <span className="text-gray-300">Saved</span>
                        <span className="flex h-4 min-w-4 items-center justify-center rounded-full border border-white/20 px-1 text-gray-400">
                            0
                        </span>
                    </div>
                </div>

            </div>
        </nav>
    );
};

export default Navbar;