import React, { useState } from "react";
import { iCard } from "../assets/ts/interfaces";

type CardFormProps = {
  onSubmit: onSubmit;
  title: string;
  onClose?: onClose;
  card?: iCard;
};

export default function CardForm({
  onSubmit,
  title,
  onClose,
  card,
}: CardFormProps) {
  const [cardTitle, setCardTitle] = useState(card?.title || "");
  const [cardText, setCardText] = useState(card?.text || "");
  const [cardURL, setCardURL] = useState(
    card?.url || "https://picsum.photos/id/1/300"
  );

  const validate = () => {
    if (
      cardTitle.trim() === "" ||
      cardText.trim() === "" ||
      cardURL.trim() === ""
    ) {
      alert("Please enter all the values!");
    } else {
      onSubmit({
        title: cardTitle,
        text: cardText,
        url: cardURL,
        id: card?.id,
      });
    }
  };

  return (
    <form
      className="CardForm relative m-auto flex w-max flex-col rounded-md bg-slate-800 p-5"
      onSubmit={(e) => {
        e.preventDefault();
        validate();
      }}
    >
      {onClose !== undefined && (
        <button
          className="absolute top-3 right-3 w-max rounded-full bg-cyan-900 px-3 py-1 text-slate-300"
          onClick={onClose}
        >
          x
        </button>
      )}
      <h2 className="pb-3 text-3xl text-slate-300">{title}</h2>
      <input
        className="mb-3 rounded bg-slate-600 p-2 text-xl text-slate-400"
        type="text"
        placeholder="Title"
        defaultValue={cardTitle}
        onChange={(e) => setCardTitle(e.target.value.trim())}
        required
      />
      <input
        className="mb-3 rounded bg-slate-600 p-2 text-xl text-slate-400"
        type="text"
        placeholder="Description"
        required
        defaultValue={cardText}
        onChange={(e) => setCardText(e.target.value.trim())}
      />
      <input
        className="mb-3 rounded bg-slate-600 p-2 text-xl text-slate-400"
        type="text"
        placeholder="URL"
        required
        defaultValue={cardURL}
        onChange={(e) => setCardURL(e.target.value.trim())}
      />
      <button className="w-max self-center rounded bg-slate-600 px-3 py-1 text-slate-200 hover:bg-slate-700 hover:text-slate-300">
        Save
      </button>
    </form>
  );
}
