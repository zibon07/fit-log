import { notFound } from "next/navigation";



const getExercise = async (exerciseId) => {
    const res = await fetch(`https://api.abcz.workers.dev/api/fitlog/${exerciseId}`);
    if (!res.ok) return null;
    const data = await res.json();
    return data.result ?? data.data ?? data; // adjust to the real response shape
};

const ExerciseDetailsPage = async ({ params }) => {
    const { exerciseId } = await params;
    const item = await getExercise(exerciseId);
    if (!item) notFound();

    const stats = [
        ["Equipment", item.equipment],
        ["Difficulty", item.difficulty],
        ["Sets", item.sets],
        ["Reps", item.reps],
        ["Duration", `${item.duration} min`],
        ["Calories", `${item.caloriesBurned} kcal`],
        ["Rating", item.rating],
    ];

    return (
        <main className="bg-[#0b0c0f] text-white max-w-6xl mx-auto px-6 py-10 grid grid-cols-1 md:grid-cols-2 gap-10">
            <img

                src={item.image}
                alt={item.name}
                className="w-full aspect-[3/4] object-cover rounded-2xl"
            />

            <div>
                <h1 className="text-3xl font-bold uppercase">{item.name}</h1>
                <p className="text-sm text-gray-400 mt-2 mb-3">{item.description}</p>

                <div className="flex gap-2 mb-5">
                    {item.muscleGroups.map((t) => (
                        <span
                            key={t}
                            className="bg-lime-400 text-black text-[11px] font-bold px-3 py-0.5 rounded-full"
                        >
                            {t}
                        </span>
                    ))}
                </div>

                <div className="bg-[#14161b] border border-white/10 rounded-xl divide-y divide-white/10 mb-6">
                    {stats.map(([label, value]) => (
                        <div key={label} className="flex justify-between px-4 py-3 text-xs">
                            <span className="uppercase tracking-wider text-gray-400 font-semibold">
                                {label}
                            </span>
                            <span>{value}</span>
                        </div>
                    ))}
                </div>

                <h2 className="text-sm font-bold uppercase mb-3">Instructions</h2>
                <ol className="space-y-2 text-xs text-gray-300 mb-6">
                    {item.instructions.map((step, i) => (
                        <li key={i}>
                            {i + 1}. {step}
                        </li>
                    ))}
                </ol>

                <div className="flex gap-3">
                    {/* <AddToPlanButton item={item} /> */}
                    <button>add to plan</button>
                    <button>save for later</button>
                    {/* <SaveForLaterButton item={item} /> */}

                </div>
            </div>
        </main>
    );
};

export default ExerciseDetailsPage;