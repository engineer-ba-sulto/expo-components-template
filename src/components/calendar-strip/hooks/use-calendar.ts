import { useMemo, useState } from "react";
import { rawDays } from "../constants";
import type { Day } from "../types";

const useCalendar = (): {
  days: Day[];
  activeIndex: number;
  setActiveIndex: (index: number) => void;
} => {
  // Use state to track the active index. Default to index 9 (Friday 31st)
  const [activeIndex, setActiveIndex] = useState(9);

  // Map raw data to include isActive status based on state
  const days: Day[] = useMemo(
    () =>
      rawDays.map((day, index) => ({
        ...day,
        isActive: index === activeIndex,
      })),
    [activeIndex],
  );

  return {
    days,
    activeIndex,
    setActiveIndex,
  };
};

export default useCalendar;
