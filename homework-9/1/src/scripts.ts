import { newCard } from "./assets/ts/helper";
import { Character, Episode, request } from "./assets/ts/interfaces";

const box = document.querySelector<HTMLDivElement | null>(".container");
fetch("https://rickandmortyapi.com/api/character")
  .then((response) => response.json())
  .then((data: request) =>
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
    })
  );
