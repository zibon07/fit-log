import React from 'react';
import ExerciseCard from './ExerciseCard';

const getExercises = async () => {
    const res = await fetch('https://api.abcz.workers.dev/api/fitlog');
    const data = await res.json();
    return data;
}

const Library = async () => {
    const exercises = await getExercises();
    console.log(exercises);
    return (
        <section className="bg-[#0b0c0f] container mx-auto max-w-[1200px] text-white px-6 py-10 rounded-2xl">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-xl font-bold uppercase tracking-wide">The Library</h2>
        <p className="text-xs text-gray-400 mb-6">Twelve lifts covering every major muscle group.</p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {exercises.map((item) => (
            <ExerciseCard key={item.id} item={item} />
          ))}
        </div>
      </div>
    </section>
    );
};

export default Library;