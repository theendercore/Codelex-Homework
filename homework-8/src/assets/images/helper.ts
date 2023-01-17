import { Color } from "./color";
export const log = (...args: any[]) => console.log(...args);

export interface GridOptions {
  rows: number;
  columns: number;
}

export interface Card {
  id: string;
  color: Color;
  state: "down" | "up" | "hidden";
}

export interface GameState {
  cards: Card[];
  selectedCard: Card | null;
  clicks: number;
  animationTimer: number;
  turnsLeft: number;
}

const createCard = (id: number): { card: Card; btn: HTMLButtonElement } => {
  let child = document.createElement("button");
  child.classList.add("btn", `ts-btn-${id}`, "btn-play");

  return {
    card: {
      color: "White",
      state: "down",
      id: `ts-btn-${id}`,
    },
    btn: child,
  };
};

//* Creates and return the cards, and also adds colum count to the parent
export const createGrid = (
  ele: HTMLDivElement,
  { rows, columns }: GridOptions
): Card[] => {
  ele.style.gridTemplateColumns = "auto ".repeat(columns);
  let newCards: Card[] = [];
  for (let i = 0; i < rows * columns; i++) {
    let { card, btn } = createCard(i);
    ele.appendChild(btn);
    newCards.push(card);
  }
  return newCards;
};

export const shuffleArray = <T>(array: T[]) => {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
};
