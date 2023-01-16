import { log, createGrid, gameLoop, GridOptions } from "./assets/images/helper";
const startScreen = document.querySelector<HTMLDivElement | null>(
  ".start-screen"
);
const gameScreen = document.querySelector<HTMLDivElement | null>(
  ".game-screen"
);
const endScreen = document.querySelector<HTMLDivElement | null>(".end-screen");

const startBtn = document.querySelector<HTMLButtonElement | null>(
  ".ts-btn-start"
);

const gridOptions: GridOptions = { rows: 2, columns: 3 };
const cards: HTMLButtonElement[] = createGrid(gameScreen, gridOptions);

startBtn.addEventListener("click", () => {
  startScreen.classList.toggle("none");
  gameScreen.classList.toggle("grid");
});

cards.forEach((card) => {
  card.addEventListener("click", gameLoop);
});
