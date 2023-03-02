import { selectAnimals } from "../../app/slices/AnimalListSlice";
import { useAppSelector } from "../../app/hooks";
import AnimalCard from "./AnimalCard";

export default function AnimalDisplay() {
  const animals = useAppSelector(selectAnimals);
  return (
    <div className="flex flex-wrap justify-center">
      <span className="self-center">AnimalDisplay Things in the TodoType</span>
      <br />
      {animals.map((animal) => (
        <AnimalCard key={animal.id} animal={animal} />
      ))}
    </div>
  );
}
