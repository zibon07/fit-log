import Link from "next/link";

export default function NotFound() {
  return (
    <section className="w-full max-w-6xl mx-auto px-6 py-32 text-center text-white">
      <p className="text-lime-400 text-7xl font-extrabold">404</p>
      <h1 className="text-2xl font-bold uppercase mt-4">Page not found</h1>
      <p className="text-gray-400 mt-2 mb-6">This page doesnt exist or was moved.</p>
      <Link href="/" className="inline-block bg-lime-400 text-black text-sm font-bold px-7 py-3 rounded-full">
        Back to workouts
      </Link>
    </section>
  );
}