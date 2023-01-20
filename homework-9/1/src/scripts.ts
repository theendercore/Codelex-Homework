import { newCard } from "./assets/ts/helper";
import { Character, Episode, request } from "./assets/ts/interfaces";

const box = document.querySelector<HTMLDivElement | null>(".box");
const nextBtn = document.querySelector<HTMLButtonElement | null>(".next");

let nextRequest: string;

fetch("https://rickandmortyapi.com/api/character")
  .then((response) => response.json())
  .then((data: request) => {
    nextRequest = data.info.next;
    data.results.forEach((c: Character) => {
      fetch(c.episode[0])
        .then((response) => response.json())
        .then(
          (ep: Episode) =>
            (box.innerHTML += newCard(
              c.image,
              c.name,
              c.status,
              c.species,
              c.origin.name,
              c.location.name,
              ep.name
            ))
        );
    });
  });

nextBtn.addEventListener("click", () => {
  if (nextRequest) {
    fetch(nextRequest)
      .then((response) => response.json())
      .then((data: request) => {
        nextRequest = data.info.next;
        data.results.forEach((c: Character) => {
          fetch(c.episode[0])
            .then((response) => response.json())
            .then(
              (ep: Episode) =>
                (box.innerHTML += newCard(
                  c.image,
                  c.name,
                  c.status,
                  c.species,
                  c.origin.name,
                  c.location.name,
                  ep.name
                ))
            );
        });
      });
  } else {
    alert("Loading! Please wait...");
  }
});
