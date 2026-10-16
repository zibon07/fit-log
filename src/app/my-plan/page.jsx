'use client';

import { useContext, useState } from 'react';
import { PlanContext } from '@/context/PlanContext';
import PlanItem from '@/components/PlanItem';
import EmptyState from '@/components/EmptyState';

const sorters = {
  duration: (a, b) => a.duration - b.duration,
  calories: (a, b) => a.caloriesBurned - b.caloriesBurned,
  rating: (a, b) => b.rating - a.rating,
};

export default function MyPlanPage() {
  const { plan, savedForLater, removeFromPlan, removeFromSaved, isDone, markDone } =
    useContext(PlanContext);

  const [tab, setTab] = useState('plan');
  const [sortBy, setSortBy] = useState('duration');

  const list = [...(tab === 'plan' ? plan : savedForLater)].sort(sorters[sortBy]);

  const minutes = plan.reduce((sum, e) => sum + e.duration, 0);
  const calories = plan.reduce((sum, e) => sum + e.caloriesBurned, 0);

  const stats = [
    ['Exercises', plan.length],
    ['Minutes', minutes],
    ['Calories', calories],
  ];

  return (
    <section className="max-w-6xl mx-auto px-6 py-10 text-white">
      <h1 className="text-4xl font-bold uppercase">My Plan</h1>
      <p className="text-sm text-gray-400 mb-6">
        Cap of five lifts for today. Finish them, then load more.
      </p>

      {/* Stats */}
      <div className="grid grid-cols-3 bg-[#14161b] border border-white/10 rounded-2xl p-6 mb-6 divide-x divide-white/10">
        {stats.map(([label, value], i) => (
          <div key={label} className={i > 0 ? 'pl-6' : ''}>
            <p className="text-xs text-gray-400">{label}</p>
            <p className={`text-4xl font-bold ${i === 0 ? 'text-lime-400' : ''}`}>{value}</p>
          </div>
        ))}
      </div>

      {/* Tabs + sort */}
      <div className="flex items-center justify-between mb-4">
        <div className="flex bg-[#14161b] border border-white/10 rounded-xl p-1 text-xs">
          {[['plan', "Today's Plan"], ['saved', 'Saved']].map(([key, label]) => (
            <button
              key={key}
              onClick={() => setTab(key)}
              className={`px-4 py-2 rounded-lg ${tab === key ? 'bg-white/10 font-bold' : 'text-gray-400'}`}
            >
              {label}
            </button>
          ))}
        </div>

        <label className="flex items-center gap-2 text-xs text-gray-400">
          Sort By
          <select
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value)}
            className="bg-[#14161b] border border-white/10 rounded-lg px-3 py-2 text-white"
          >
            <option value="duration">Duration</option>
            <option value="calories">Calories</option>
            <option value="rating">Rating</option>
          </select>
        </label>
      </div>

      {/* List */}
      {list.length === 0 ? (
        <EmptyState />
      ) : (
        <div className="space-y-3">
          {list.map((item) => (
            <PlanItem
              key={item.id}
              item={item}
              showDone={tab === 'plan'}
              done={isDone(item.id)}
              onDone={() => markDone(item.id)}
              onRemove={() => (tab === 'plan' ? removeFromPlan(item.id) : removeFromSaved(item.id))}
            />
          ))}
        </div>
      )}
    </section>
  );
}