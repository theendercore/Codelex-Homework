import { newCard } from "./assets/ts/helper";
import { Character, Episode, request } from "./assets/ts/interfaces";

const box = document.querySelector<HTMLDivElement | null>(".box");
const nextBtn = document.querySelector<HTMLButtonElement | null>(".next");

let originalRequest = "https://rickandmortyapi.com/api/character"
// let originalRequest = "https://rickandmortyapi.com/api/character?page=40"
let nextRequest: string;


fetch(originalRequest)
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
  if (nextRequest !== undefined && nextRequest!== null) {
    fetch(nextRequest)
      .then((response) => response.json())
      .then((data: request) => {
        nextRequest = data.info.next;
        console.log(data.info)
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
  }else if (nextRequest === null) {
    nextBtn.innerHTML="Thats all folks!";
    nextBtn.setAttribute('disabled', 'disabled')
  }
   else {
    alert("Loading! Please wait...");
  }
});
