import React, { useState } from "react";
import { addOne, selectAnimals } from "../app/slices/AnimalListSlice";
import { useAppDispatch, useAppSelector } from "../app/hooks";
import { AnimalData } from "../app/types";

export default function AddAnimalForm() {
  const [animal, setAnimal] = useState<AnimalData>({
    id: crypto.randomUUID(),
    name: "",
    image: "",
    species: "",
  });
  const dispatch = useAppDispatch();
  const animals = useAppSelector(selectAnimals);
  return (
    <form
      className="flex flex-col p-2"
      onSubmit={(e) => {
        e.preventDefault();
        setAnimal({ ...animal, id: crypto.randomUUID() });
        dispatch(addOne(animal));
      }}
    >
      <span className="text-xl">Add Animal</span>
      <label className="my-2">
        <span>Name</span>
        <input
          type="text"
          name="name"
          id="name"
          className="mx-2"
          value={animal.name}
          onChange={(e) => {
            setAnimal({ ...animal, name: e.target.value });
          }}
          required
        />
      </label>
      <label className="my-2">
        <span>Image Src</span>
        <input
          type="text"
          name="img-src"
          id="img-src"
          className="mx-2"
          value={animal.image}
          onChange={(e) => {
            setAnimal({ ...animal, image: e.target.value });
          }}
          required
        />
      </label>
      <label className="my-2">
        <span>Species</span>
        <input
          type="text"
          className="mx-2"
          value={animal.species}
          onChange={(e) => {
            setAnimal({ ...animal, species: e.target.value });
          }}
          required
        />
      </label>
      <button className="w-max self-center rounded bg-slate-400 p-2 hover:bg-slate-700">
        ADD
      </button>
    </form>
  );
}
