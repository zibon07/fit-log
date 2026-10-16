"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useContext } from "react";
import { PlanContext } from "@/context/PlanContext";

const links = [
    { href: "/", label: "Workouts", match: (p) => p === "/" || p.startsWith("/exercises") },
    { href: "/my-plan", label: "My Plan", match: (p) => p.startsWith("/my-plan") },
];

const Navbar = () => {
    const pathname = usePathname();
    const { plan, savedForLater } = useContext(PlanContext);

    return (
        <nav className="sticky top-0 z-50 w-full border-b border-white/10 bg-[#0c0d0f]/80 text-white backdrop-blur-md">
            <div className="relative mx-auto flex h-16 max-w-[1200px] items-center justify-between px-5">

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
                    <span className="text-sm font-extrabold tracking-wider">FITLOG</span>
                </Link>

                {/* Middle: Navigation */}
                <div className="absolute left-1/2 flex -translate-x-1/2 items-center gap-1">
                    {links.map(({ href, label, match }) => (
                        <Link
                            key={href}
                            href={href}
                            className={`rounded-full px-4 py-1.5 text-xs transition-colors ${
                                match(pathname)
                                    ? "bg-[#ccff00]/10 font-semibold text-[#ccff00]"
                                    : "text-gray-400 hover:bg-white/5 hover:text-white"
                            }`}
                        >
                            {label}
                        </Link>
                    ))}
                </div>

                {/* Right: Status counters */}
                <div className="flex items-center gap-5 text-xs">
                    <div className="flex items-center gap-2">
                        <span className="text-gray-300">Plan</span>
                        <span className="flex h-5 min-w-5 items-center justify-center rounded-full bg-[#ccff00] px-1 font-bold text-black">
                            {plan.length}
                        </span>
                    </div>

                    <div className="flex items-center gap-2">
                        <span className="text-gray-300">Saved</span>
                        <span className="flex h-5 min-w-5 items-center justify-center rounded-full border border-white/20 px-1 text-gray-400">
                            {savedForLater.length}
                        </span>
                    </div>
                </div>

            </div>
        </nav>
    );
};

export default Navbar;