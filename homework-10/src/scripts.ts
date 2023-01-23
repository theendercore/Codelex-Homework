import axios from "axios";
import { cardFromPlayer, deleteDB, get, post } from "./assets/ts/helper-func";
import { PlayerCard } from "./assets/ts/interfaces";

const addBtn = document.querySelector<HTMLButtonElement>(".ts-btn-add");
const delAllBtn = document.querySelector<HTMLButtonElement>(".ts-btn-del-all");
const randBtn = document.querySelector<HTMLButtonElement>(".ts-btn-rand");
const box = document.querySelector<HTMLDivElement>(".box");

const cards = get<PlayerCard[]>()
  .then((cards) =>
    cards.forEach(async (card) => {
      box.appendChild(cardFromPlayer(card));
    })
  )
  .catch((err) => console.log("hehehe find me", err));

addBtn.addEventListener("click", () => {
  console.log("add");
  post({
    title: "Ender",
    text: "ascy neakc".repeat(Math.random() * 10),
    skin: "hmm-hel",
  }).then((res) => {
    location.reload();
  });
});

delAllBtn.addEventListener("click", () => {
  console.log("del all");
  deleteDB().then((res) => {
    // location.reload();
    console.log("pain");
  });
});

randBtn.addEventListener("click", () => {
  console.log("rand");
});

// const getRandomPlayerSkin = async (uuid: string) => {
//   let dataL;
//   axios
//     .get(`https://sessionserver.mojang.com/session/minecraft/profile/${uuid}`)
//     .then((data) => {
//       dataL = data;
//     })
//     .catch((error) => {
//       dataL = error;
//     });

//   return await dataL;
// };

// console.log(getRandomPlayerSkin("1"));
