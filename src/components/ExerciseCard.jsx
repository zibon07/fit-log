import { Clock, Flame, Star } from "lucide-react";
import Link from "next/link";

export default function ExerciseCard({ item }) {
  return (
    <Link href={`/exercise-details/${item.id}`} className="block">
      
    <div className="bg-[#14161b] rounded-xl overflow-hidden">
      <img src={item.image} alt={item.name} className="w-full h-36 object-cover" />

      <div className="p-3">
        <div className="flex flex-wrap gap-1 mb-2">
          {item.muscleGroups.map((tag) => (
            <span
              key={tag}
              className="bg-lime-400 text-black text-[10px] font-bold uppercase px-2 py-0.5 rounded"
            >
              {tag}
            </span>
          ))}
        </div>

        <h3 className="text-sm font-bold uppercase">{item.name}</h3>
        <p className="text-xs text-gray-400 mb-3">{item.equipment}</p>

        <div className="flex items-center justify-between text-[11px] text-gray-400 border-t border-white/10 pt-2">
          <span className="flex items-center gap-1">
            <Clock size={12} /> {item.duration} min
          </span>
          <span className="flex items-center gap-1">
            <Flame size={12} /> {item.caloriesBurned} kcal
          </span>
          <span className="flex items-center gap-1">
            <Star size={12} className="text-lime-400" /> {item.rating}
          </span>
        </div>
      </div>
    </div>
    </Link>
  );
}