'use client';

import { createContext, useState } from 'react';

export const PlanContext = createContext({});

const PlanProvider = ({ children }) => {
  const [plan, setPlan] = useState([]);
  const [savedForLater, setSavedForLater] = useState([]);
  const [doneIds, setDoneIds] = useState([]);

  const isInPlan = (id) => plan.some((e) => e.id === id);
  const isDone = (id) => doneIds.includes(id);

  const addToPlan = (item) =>
    setPlan((prev) => (prev.some((e) => e.id === item.id) ? prev : [...prev, item]));

  const removeFromPlan = (id) => setPlan((prev) => prev.filter((e) => e.id !== id));
  const removeFromSaved = (id) => setSavedForLater((prev) => prev.filter((e) => e.id !== id));
  const markDone = (id) => setDoneIds((prev) => (prev.includes(id) ? prev : [...prev, id]));

  const sharedData = {
    plan, setPlan,
    savedForLater, setSavedForLater,
    addToPlan, removeFromPlan, removeFromSaved,
    isInPlan, isDone, markDone,
  };

  return <PlanContext.Provider value={sharedData}>{children}</PlanContext.Provider>;
};

export default PlanProvider;