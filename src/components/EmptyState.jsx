import Link from 'next/link';

const EmptyState = () => (
  <div className="rounded-3xl border border-dashed border-white/15 bg-white/[0.02] py-28 text-center">
    <h3 className="text-2xl font-extrabold uppercase tracking-wide">Nothing here yet</h3>
    <p className="text-sm text-gray-400 mt-2 mb-6">
      Browse the library and add a lift to get today moving.
    </p>
    <Link
      href="/"
      className="inline-block bg-lime-400 text-black text-sm font-bold px-7 py-3 rounded-full hover:brightness-110 transition"
    >
      Go to workouts
    </Link>
  </div>
);

export default EmptyState;