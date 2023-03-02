import { AnimalData } from "../../app/types";
import getSpecies from "../../app/util/getSpecies";
import { selectSpecies } from "../../app/slices/SpeciesSlice";
import { useAppSelector } from "../../app/hooks";

type AnimalCardProps = { animal: AnimalData };

export default function AnimalCard({ animal }: AnimalCardProps) {
  const species = useAppSelector(selectSpecies);
  let specie = getSpecies(species, animal.speciesId);
  return (
    <div className="m-1 flex flex-col p-2">
      <img src={animal.image} alt={`${animal.name} picture`} />
      <span className="m-1 p-2 text-xl">{animal.name}</span>
      <span className="m-1 p-2 text-xl">{specie.message || specie.name}</span>
    </div>
  );
}
