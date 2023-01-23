import { box } from "./const";
import { PlayerCard } from "./interfaces";
import { deleteById, get, put } from "./restAPI";

const createButton = (type: string, id: string, fn: EventListener) => {
  const newButton = document.createElement("button");
  newButton.classList.add("card__btn");
  newButton.classList.add(`card__btn--${type}`);
  newButton.setAttribute("data-id", id.toString());
  newButton.addEventListener("click", fn);
  newButton.innerHTML = type[0].toUpperCase() + type.slice(1);
  return newButton;
};

const createInputField = (type: string, id: string, value: string) => {
  const newInputField = document.createElement("input");
  newInputField.classList.add("card__input");
  newInputField.classList.add(`card__input--${type}`);
  newInputField.setAttribute("type", "text");
  newInputField.setAttribute("data-id", id.toString());
  newInputField.setAttribute("value", value);
  return newInputField;
};

const cardFromPlayer = ({
  id,
  title,
  text,
  skin,
}: PlayerCard): HTMLDivElement => {
  const card = document.createElement("div");
  card.classList.add("card",`ts-card-${id}`);

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
        box.querySelector<HTMLDivElement>(`.ts-card-${id}`).remove();
      });
    })
  );

  //Edit Section
  const editSection = document.createElement("div");

  // Edit Button
  cardBody.appendChild(
    createButton("edit", id.toString(), () => {
      editSection.classList.toggle("none");
    })
  );

  editSection.classList.add("none", "card__edit-section");
  const titleInput = createInputField("title", id.toString(), title);
  editSection.appendChild(titleInput);
  const textInput = createInputField("text", id.toString(), text);
  editSection.appendChild(textInput);
  const skinInput = createInputField("skin", id.toString(), skin);
  editSection.appendChild(skinInput);
  const updateBtn = createButton("update", id.toString(), () => {
    put({
      id: id,
      title: titleInput.value,
      text: textInput.value,
      skin: skinInput.value,
    }).then(() => {
      cardTitle.innerHTML = titleInput.value;
      cardText.innerHTML = textInput.value;
      img.src = skinInput.value;
      editSection.classList.toggle("none");
    });

    return false;
  });
  editSection.appendChild(updateBtn);

  cardBody.appendChild(editSection);

  // Append Body
  card.appendChild(cardBody);

  return card;
};

const reload = () => {
  box.innerHTML = "";
  get<PlayerCard[]>()
    .then((cards) =>
      cards.forEach(async (card) => {
        box.appendChild(cardFromPlayer(card));
      })
    )
    .catch((err) => console.log("hehehe find me", err));
};

export { cardFromPlayer, reload };
