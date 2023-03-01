import React from "react";
import Card from "./Card";
import { iCard } from "../assets/ts/interfaces";

type CardListProps = {
  cards: iCard[];
  deleteCard: deleteCardFunc;
  editCard: editCard;
};

export default function CardList({
  cards,
  deleteCard,
  editCard,
}: CardListProps) {
  return (
    <div className="CardList flex flex-row flex-wrap justify-center gap-6 p-8">
      {cards.length < 1 ? (
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
