import { selectAnimals } from "../../app/slices/AnimalListSlice";
import { useAppSelector } from "../../app/hooks";
import AnimalCard from "./AnimalCard";


export default function AnimalDisplay() {
    const animals = useAppSelector(selectAnimals);
  return (
    <div className="flex flex-wrap items-center">
      <span>AnimalDisplay Things in the TodoType</span>
      {animals.map((animal) => (<AnimalCard key={animal.id} animal={animal}/>))}
    </div>
  );
}
