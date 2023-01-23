import axios from "axios";
import { PlayerCard, PlayerCardInterface } from "./interfaces";

let dbUrl = "http://localhost:3004/players";

const createButton = (type: string, id: string, fn: EventListener) => {
  const newButton = document.createElement("button");
  newButton.classList.add("card__btn");
  newButton.classList.add(`card__btn--${type}`);
  newButton.setAttribute("data-id", id.toString());
  newButton.addEventListener("click", fn);
  newButton.innerHTML = type[0].toUpperCase() + type.slice(1);
  return newButton;
};

const cardFromPlayer = ({
  id,
  title,
  text,
  skin,
}: PlayerCard): HTMLDivElement => {
  const card = document.createElement("div");
  card.classList.add("card");
  card.classList.add(`ts-card-${id}`);

  // Img
  const img = document.createElement("img");
  img.src = skin;
  img.alt = "skin";
  img.classList.add("card__img");
  card.appendChild(img);

  // Body
  const cardBody = document.createElement("div");
  cardBody.classList.add("card__body");

  // Title
  const cardTitle = document.createElement("h2");
  cardTitle.classList.add("card__text-title");
  cardTitle.innerHTML = title;
  cardBody.appendChild(cardTitle);

  // Text
  const cardText = document.createElement("p");
  cardText.classList.add("card__text");
  cardText.innerHTML = text;
  cardBody.appendChild(cardText);

  //Delete Button
  cardBody.appendChild(
    createButton("delete", id.toString(), () => {
      deleteById(id.toString()).then(() => {
        location.reload();
      });
    })
  );

  // Edit Button
  cardBody.appendChild(
    createButton("edit", id.toString(), () => {
      console.log(id);
      // location.reload();
    })
  );

  // Append Body
  card.appendChild(cardBody);

  return card;
};

//GET POST PUT DELETE
const get = async <T>(urlExtra?: string) => {
  const response = await axios.get<T>(
    `${dbUrl}${urlExtra !== undefined ? urlExtra : ""}`
  );
  return await response.data;
};

const post = async (player: PlayerCardInterface) => {
  await axios.post(dbUrl, player).catch((err) => {
    console.log("Failed to post: ", err);
  });
};

// const put
const put = async (player: PlayerCardInterface) => {
  await axios.put(dbUrl, player).catch((err) => {
    console.log("Failed to put: ", err);
  });
};

const deleteById = async (id: string) => {
  await axios.delete(`${dbUrl}/${id}`).catch((err) => {
    console.log("Failed to delete: ", err);
  });
};

const deleteDB = async () => {
  await get<PlayerCard[]>().then((data) => {
    data.forEach(async (player) => {
      await deleteById(player.id.toString());
    });
  }).catch((err) => {
    console.log("Failed to delete DB: ", err);
  });
};

export { cardFromPlayer, post, get, deleteById, deleteDB };
