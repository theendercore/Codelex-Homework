import {
  GridOptions,
  GameState,
  createGrid,
  Card,
  sleep,
  randomizeColors,
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


const gameLoop = async (btn: HTMLButtonElement) => {
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
    gameState.animationTimer = 1;
    await sleep(500)
    if (selectedCard.color === gameState.selectedCard.color) {
      cardHide(selectedCard);
      cardHide(gameState.selectedCard);
      gameState.turnsLeft -= 1;
    } else {
      cardReset(selectedCard);
      cardReset(gameState.selectedCard);
    }
    gameState.selectedCard = null;
    gameState.animationTimer = 0;
  }
  gameState.clicks++;
  if (gameState.turnsLeft === 0) {
    hasWon();
  }
  // log(gameState);
};



const cardHide = (card: Card) => {
  let btn = document.querySelector<HTMLButtonElement>(`.${card.id}`);
  btn.classList.toggle("hidden");
  card.state = "hidden";
};

const cardReset = (card: Card) => {
  let btn = document.querySelector<HTMLButtonElement>(`.${card.id}`);
  btn.removeAttribute("style");
  card.state = "down";
};

const hasWon = () => {
  gameScreen.classList.toggle("grid");
  endScreen.classList.toggle("none");
  endScreen.innerHTML += `<p>Turns Made: ${Math.floor(gameState.clicks / 2)}</p>`;
};

/*

  Here is the "Game section"

*/

//This is Init (essentially)
startBtn.addEventListener("click", () => {
  startScreen.classList.toggle("none");
  randomizeColors(gameState);
  gameScreen.classList.toggle("grid");
});

cardBtns.forEach((card) => {
  card.addEventListener("click", () => gameLoop(card));
});
