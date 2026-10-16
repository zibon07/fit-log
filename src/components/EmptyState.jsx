import Link from 'next/link';

const EmptyState = () => (
  <div className="border border-dashed border-white/10 rounded-xl py-24 text-center">
    <h3 className="font-bold uppercase tracking-wide">Nothing here yet</h3>
    <p className="text-xs text-gray-400 mt-1 mb-4">
      Browse the library and add a lift to get today moving.
    </p>
    <Link href="/" className="bg-lime-400 text-black text-xs font-bold px-5 py-2 rounded-full">
      Go to workouts
    </Link>
  </div>
);

export default EmptyState;