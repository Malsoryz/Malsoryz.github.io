import React, { useEffect } from "react";
import { create } from "zustand";
import { format } from "date-fns";

// --- Zustand Store ---
interface ClockState {
  now: Date;
  setNow: (date: Date) => void;
}

const useClock = create<ClockState>((set) => ({
  now: new Date(),
  setNow: (date) => set({ now: date }),
}));

// --- Komponen Clock ---
export default function Clock() {
  const { now, setNow } = useClock();
  
  setInterval(() => setNow(new Date()), 1000);

  return (
    <>
      <div className="text-4xl font-mono">
        {format(now, "HH:mm:ss")}
      </div>
    </>
  );
}