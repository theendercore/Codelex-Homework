import { Color } from "./assets/images/color";
import {
  log,
  GridOptions,
  GameState,
  createGrid,
  Card,
  shuffleArray,
} from "./assets/images/helper";

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

const gridOptions: GridOptions = { rows: 2, columns: 4 };

const gameState: GameState = {
  cards: createGrid(gameScreen, gridOptions),
  selectedCard: null,
  clicks: 0,
  animationTimer: 0,
  turnsLeft: (gridOptions.columns * gridOptions.rows) / 2,
};

const cardBtns = document.querySelectorAll<HTMLButtonElement | null>(
  ".btn-play"
);

const randomizeColors = () => {
  let colorCount = gameState.cards.length;
  let colors: Set<Color>= new Set;
  while (colors.size < colorCount){
    colors.add(Color[Math.floor(Math.random() * Color.length)])
  }
  log(colors)
  shuffleArray(gameState.cards)
  for (let i = 0; i < colorCount; i+=2) {
    gameState.cards[i].color = [...colors][i]
    gameState.cards[i+1].color = [...colors][i]
  }

};

const gameLoop = (btn: HTMLButtonElement) => {
  if (gameState.animationTimer) {
    return;
  }

  if (!gameState.selectedCard) {
    let selectedCard = gameState.cards.find((a) => a.id === btn.classList[1]);
    btn.style.backgroundColor = selectedCard.color;
    selectedCard.state = "up";
    gameState.selectedCard = selectedCard;
  } else {
    let selectedCard = gameState.cards.find((a) => a.id === btn.classList[1]);
    btn.style.backgroundColor = selectedCard.color;
    selectedCard.state = "up";
    if (selectedCard.color === gameState.selectedCard.color) {
      cardHide(selectedCard);
      cardHide(gameState.selectedCard);
      gameState.turnsLeft--;
    } else {
      cardReset(selectedCard);
      cardReset(gameState.selectedCard);
    }
    gameState.selectedCard = null;
  }
  gameState.clicks++;
  if (gameState.turnsLeft === 0) {
    hasWon();
  }
};

const cardHide = (card: Card) => {
  let btn = document.querySelector<HTMLButtonElement>(`.${card.id}`);
  btn.classList.toggle("hidden");
  card.state = "hidden";
};

const cardReset = (card: Card) => {
  let btn = document.querySelector<HTMLButtonElement>(`.${card.id}`);
  btn.style.backgroundColor = "";
  card.state = "down";
};

const hasWon = () => {
  gameScreen.classList.toggle("grid");
  endScreen.classList.toggle("none");
  endScreen.innerHTML += `<p>Turns Made: ${gameState.clicks}</p>`;
};

/*

  Here is the "Game section"

*/

//This is Init (essentially)
startBtn.addEventListener("click", () => {
  startScreen.classList.toggle("none");
  randomizeColors();
  gameScreen.classList.toggle("grid");
});

cardBtns.forEach((card) => {
  card.addEventListener("click", () => gameLoop(card));
});
