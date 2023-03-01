export const moves = ["rock", "paper", "scissors"] as const;
export type move = (typeof moves)[number];

export type state = "start" | "move" | "end";