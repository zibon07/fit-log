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

  const stats = [
    ['Exercises', plan.length],
    ['Minutes', plan.reduce((s, e) => s + e.duration, 0)],
    ['Calories', plan.reduce((s, e) => s + e.caloriesBurned, 0)],
  ];

  return (
    <section className="w-full max-w-6xl mx-auto px-6 py-12 text-white">
      {/* Header */}
      <div className="mb-10">
        <h1 className="text-5xl md:text-6xl font-extrabold uppercase tracking-tight">
          My <span className="text-lime-400">Plan</span>
        </h1>
        <p className="text-gray-400 mt-3 text-base">
          Cap of five lifts for today. Finish them, then load more.
        </p>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-10">
        {stats.map(([label, value], i) => (
          <div
            key={label}
            className="relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-[#171a21] to-[#101216] p-6"
          >
            <p className="text-xs uppercase tracking-widest text-gray-400">{label}</p>
            <p className={`text-5xl font-extrabold mt-2 ${i === 0 ? 'text-lime-400' : ''}`}>
              {value}
            </p>
            {i === 0 && (
              <div className="absolute -right-6 -top-6 h-24 w-24 rounded-full bg-lime-400/10 blur-2xl" />
            )}
          </div>
        ))}
      </div>

      {/* Tabs + sort */}
      <div className="flex flex-wrap items-center justify-between gap-4 mb-6">
        <div className="flex bg-[#14161b] border border-white/10 rounded-full p-1 text-sm">
          {[['plan', "Today's Plan"], ['saved', 'Saved']].map(([key, label]) => (
            <button
              key={key}
              onClick={() => setTab(key)}
              className={`px-6 py-2 rounded-full transition-colors ${
                tab === key
                  ? 'bg-lime-400 text-black font-bold'
                  : 'text-gray-400 hover:text-white'
              }`}
            >
              {label}
            </button>
          ))}
        </div>

        <label className="flex items-center gap-3 text-sm text-gray-400">
          Sort By
          <select
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value)}
            className="bg-[#14161b] border border-white/10 rounded-full px-4 py-2 text-white outline-none focus:border-lime-400"
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
        <div className="space-y-4">
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