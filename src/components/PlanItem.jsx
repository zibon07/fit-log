import Link from 'next/link';
import { Clock, Flame, Star, Check, X } from 'lucide-react';

const PlanItem = ({ item, showDone, done, onDone, onRemove }) => (
  <div className="flex items-center gap-4 bg-[#14161b] border border-white/10 rounded-xl p-3">
    <img src={item.image} alt={item.name} className="w-28 h-16 object-cover rounded-lg" />

    <div className="flex-1">
      <h3 className="text-sm font-bold uppercase">{item.name}</h3>
      <p className="text-xs text-gray-400 mb-1">{item.equipment}</p>
      <div className="flex gap-3 text-[11px] text-gray-400">
        <span className="flex items-center gap-1"><Clock size={12} className="text-lime-400" /> {item.duration} min</span>
        <span className="flex items-center gap-1"><Flame size={12} className="text-lime-400" /> {item.caloriesBurned} kcal</span>
        <span className="flex items-center gap-1"><Star size={12} className="text-lime-400" /> {item.rating}</span>
      </div>
    </div>

    <Link
      href={`/exercise-details/${item.id}`}
      className="border border-white/20 text-xs px-4 py-2 rounded-full"
    >
      View Details
    </Link>

    {showDone && (
      <button
        onClick={onDone}
        disabled={done}
        className="flex items-center gap-1 bg-lime-400 text-black text-xs font-bold px-4 py-2 rounded-full disabled:opacity-50"
      >
        <Check size={14} /> {done ? 'Done' : 'Mark as Done'}
      </button>
    )}

    <button onClick={onRemove} className="text-gray-400 hover:text-white">
      <X size={16} />
    </button>
  </div>
);

export default PlanItem;