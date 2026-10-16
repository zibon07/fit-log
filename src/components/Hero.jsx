import Image from "next/image";
import Link from "next/link";

const Hero = () => {
    return (
        <section className="mx-auto w-full max-w-300 px-3 py-4 sm:px-5">
            <div className="relative flex  min-h-55 items-center overflow-hidden rounded-lg border border-white/5 bg-[#15161b] px-6 py-12 sm:px-7 md:min-h-55">

                {/* Left: Hero content */}
                <div className="relative z-10 max-w-105">
                    <p className="mb-3 text-[7px] font-bold uppercase tracking-[0.15em] text-[#ccff00]">
                        Workout Library
                    </p>

                    <h1 className="text-3xl font-extrabold uppercase leading-[0.98] tracking-tight text-white sm:text-4xl">
                        Train with intent. Log
                        <br />
                        every set.
                    </h1>

                    <p className="mt-3 max-w-87.5 text-[9px] leading-relaxed text-gray-400">
                        FitLog is a dark, no-nonsense gym companion: pick a lift, lock it
                        into today&apos;s plan, and watch the week&apos;s work add up.
                    </p>

                    <Link
                        href="/"
                        className="mt-4 inline-flex items-center rounded bg-[#ccff00] px-3 py-2 text-[8px] font-bold uppercase text-black transition-colors hover:bg-[#b8e600]"
                    >
                        Browse Workouts
                    </Link>
                </div>

                {/* Right: Hero image */}
                <div className="absolute inset-y-0 right-2 w-[42%] sm:right-5 sm:w-[36%]">
                    <Image
                        src="/banner.png"
                        alt="Athlete training on a stationary bike"
                        fill
                        priority
                        sizes="(max-width: 640px) 42vw, 36vw"
                        className="object-contain object-center"
                    />
                </div>

            </div>
        </section>
    );
};

export default Hero;