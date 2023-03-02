import React from "react";

export default function SpeciesSelector() {
  return (
    <label className="my-2">
      <span>Species</span>
      <input
        type="text"
        className="mx-2"
        name="species"
        id="img-src"
        value={animal.species}
        onChange={(e) => {
          setAnimal({ ...animal, species: e.target.value });
        }}
        required
      />
    </label>
  );
}
