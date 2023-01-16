import { Color } from "./color";
export const log = (...args: any[]) => console.log(...args);

export interface GridOptions {
  rows: number;
  columns: number;
}

export interface Card {
  color: Color;
  id: string;
}

const createChild = (id: number): HTMLButtonElement => {
  let child = document.createElement("button");
  child.classList.add("btn", `ts-btn-${id}`, "btn-play");
  return child;
};

//* Creates and return the cards, and also adds colum count to the parent
export const createGrid = (
  ele: HTMLDivElement,
  { rows, columns }: GridOptions
): HTMLButtonElement[] => {
  ele.style.gridTemplateColumns = "auto ".repeat(columns);
  let newCards: HTMLButtonElement[] = [];
  for (let i = 0; i < rows; i++) {
    let tempArray: HTMLButtonElement[] = [];
    for (let j = 0; j < columns; j++) {
      let child = createChild(i);
      ele.appendChild(child);
      tempArray.push(child);
    }
    newCards.concat(tempArray);
  }
  return newCards;
};

export const gameLoop = () => {
  log("hi");
};
