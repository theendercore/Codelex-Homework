export const ColorsList = [
  "red",
  "orange",
  "yellow",
  "olive",
  "green",
  "teal",
] as const;

type Colors = typeof ColorsList;
