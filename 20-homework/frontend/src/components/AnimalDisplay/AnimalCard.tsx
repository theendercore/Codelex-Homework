import React from "react";
import { AnimalData } from "../../app/types";

type AnimalCardProps = { animal: AnimalData };

export default function AnimalCard({ animal }: AnimalCardProps) {
  return (
    <div className="m-1 flex flex-col p-2">
      <img src={animal.image} alt={`${animal.name} picture`} />
      <span className="m-1 p-2 text-xl">{animal.name}</span>
      <span className="m-1 p-2 text-xl">{animal.species}</span>
    </div>
  );
}
