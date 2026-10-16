'use client';

import { PlanContext } from '@/context/PlanContext';
import { useContext } from 'react';
import { Plus, Check } from 'lucide-react';

const AddToPlanButton = ({ item }) => {
  const { addToPlan, isInPlan } = useContext(PlanContext);
  const added = isInPlan(item.id);

  return (
    <button
      onClick={() => addToPlan(item)}
      disabled={added}
      className="flex items-center gap-3 bg-lime-400 text-black text-base font-medium px-6 py-3 rounded-lg disabled:opacity-50 disabled:cursor-not-allowed"
    >
      {added ? <Check size={16} /> : <Plus size={16} />}
      {added ? 'Added to plan' : "Add to today's plan"}
    </button>
  );
};

export default AddToPlanButton;