'use client';

import { PlanContext } from '@/context/PlanContext';
import { useContext } from 'react';
import { Bookmark, BookmarkCheck } from 'lucide-react';

const SaveForLaterButton = ({ item }) => {
  const { savedForLater, setSavedForLater } = useContext(PlanContext);
  const saved = savedForLater.some((e) => e.id === item.id);

  const handleSave = () => {
    setSavedForLater((prev) =>
      prev.some((e) => e.id === item.id) ? prev : [...prev, item]
    );
  };

  return (
    <button
      onClick={handleSave}
      disabled={saved}
      className="flex items-center gap-2 border border-white/20 text-white text-base px-6 py-3 rounded-lg disabled:opacity-50 disabled:cursor-not-allowed"
    >
      {saved ? <BookmarkCheck size={16} /> : <Bookmark size={16} />}
      {saved ? 'Saved' : 'Save for later'}
    </button>
  );
};

export default SaveForLaterButton;