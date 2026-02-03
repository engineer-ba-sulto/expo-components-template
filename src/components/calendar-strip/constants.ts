import type { Day } from "./types";

// Raw Data
const rawDays: Omit<Day, "isActive">[] = [
  { day: "Sat", date: 1 },
  { day: "Sun", date: 2 },
  { day: "Mon", date: 3 },
  { day: "Tus", date: 4 },
  { day: "Sat", date: 5 },
  { day: "Sun", date: 6 },
  { day: "Mon", date: 7 },
  { day: "Tue", date: 8 },
  { day: "Wed", date: 9 },
  { day: "The", date: 10 },
  { day: "Fri", date: 11 },
  { day: "Sat", date: 12 },
  { day: "Sun", date: 13 },
  { day: "Mon", date: 14 },
  { day: "Tue", date: 15 },
  { day: "Wed", date: 16 },
  { day: "Thu", date: 17 },
  { day: "Fri", date: 18 },
  { day: "Sat", date: 19 },
  { day: "Sun", date: 20 },
  { day: "Mon", date: 21 },
  { day: "Tue", date: 22 },
  { day: "Wed", date: 23 },
  { day: "Thu", date: 24 },
  { day: "Fri", date: 25 },
  { day: "Sat", date: 26 },
  { day: "Sun", date: 27 },
  { day: "Mon", date: 28 },
  { day: "Tue", date: 29 },
  { day: "Wed", date: 30 },
];

export { rawDays };
