import React from "react";
import { iCard } from "../assets/ts/interfaces";

export type CardProp = { card: iCard; deleteCard: deleteCardFunc; editCard: editCard };

export default function Card({ card, deleteCard, editCard }: CardProp) {
  return (
    <div className="Card flex w-max flex-col justify-center border border-solid border-slate-400">
      <img src={card.img} alt="image" />
      <div className="flex flex-col items-start p-4">
        <h2 className="pb-2 text-xl text-slate-100">{card.title}</h2>
        <p className="pb-2 text-slate-300">{card.text}</p>
        <div className="flex flex-row">
          <button
            className="mx-1 border border-slate-400 p-2"
            onClick={deleteCard}  
          >
            Delete
          </button>
          <button className="mx-1 border border-slate-400 p-2" onClick={editCard}>
            Edit
          </button>
        </div>
      </div>
    </div>
  );
}
