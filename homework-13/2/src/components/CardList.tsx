import React from "react";
import Card from "./Card";
import { iCard } from "../assets/ts/interfaces";

export default function CardList({
  cards,
  deleteCard,
  editCard,
}: {
  cards: iCard[] | null;
  deleteCard: deleteCardFunc;
  editCard: editCard;
}) {
  return (
    <div className="CardList flex flex-row flex-wrap gap-6 p-8">
      {cards === null ? (
        <h1>No cards...</h1>
      ) : (
        cards.map((card) => (
          <Card
            key={card.id}
            card={card}
            deleteCard={() => {
              deleteCard(card);
            }}
            editCard={() => {
              editCard(card);
            }}
          />
        ))
      )}
    </div>
  );
}
