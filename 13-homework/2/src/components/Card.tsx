import React from "react";
import { iCard } from "../assets/ts/interfaces";

export type CardProp = {
  card: iCard;
  deleteCard: deleteCardFunc;
  editCard: editCard;
};

export default function Card({ card, deleteCard, editCard }: CardProp) {
  return (
    <div className="Card flex w-max flex-col justify-center overflow-hidden rounded-xl bg-slate-800">
      <img src={card.url} alt="image" className="h-max" />
      <div className="flex flex-col items-start p-4">
        <h2 className="pb-2 text-xl text-slate-100">{card.title}</h2>
        <p className="pb-2 text-slate-300">{card.text}</p>
        <div className="flex flex-row">
          <button
            className="mx-1 bg-slate-700 p-2 hover:bg-slate-600 hover:text-slate-300 rounded"
            onClick={deleteCard}
          >
            Delete
          </button>
          <button
            className="mx-1 bg-slate-700 p-2 hover:bg-slate-600 hover:text-slate-300 rounded"
            onClick={editCard}
          >
            Edit
          </button>
        </div>
      </div>
    </div>
  );
}
