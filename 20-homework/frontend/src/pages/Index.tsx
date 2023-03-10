import { Route } from "@tanstack/react-router";
import { useEffect } from "react";
import AnimalDisplay from "../components/AnimalDisplay/AnimalDisplay";
import rootRoute from "../Root";
import AddAnimalForm from "../components/AddAnimalForm/AddAnimalForm";
import { useAppDispatch, useAppSelector } from "../app/hooks";
import { loadFromStorage, selectAnimals } from "../app/slices/AnimalListSlice";
import useLocalStorage from "use-local-storage";
import { StorageType } from '../app/types';
import { selectSpecies } from "../app/slices/SpeciesSlice";
const indexRoute = new Route({
  getParentRoute: () => rootRoute,
  path: "/",
  component: IndexRoute,
});

function IndexRoute() {
  const animals = useAppSelector(selectAnimals);
  const species = useAppSelector(selectSpecies);
  const dispatch = useAppDispatch();
  const [localData, setLocalData] = useLocalStorage<StorageType>(
    "AnimalAppData",
    {animals: [], species: []}
  );

  useEffect(() => {
    if (animals.length <= 0 && localData.animals.length > 0) {
      dispatch(loadFromStorage(localData.animals));
    }
  }, []);

  useEffect(() => {
    if (animals.length > 0 || species.length > 0) {
      setLocalData({animals: animals, species: species}); 
    }
  }, [animals, species]);

  return (
    <div className="m-auto flex flex-col items-center justify-center p-10">
      <AddAnimalForm />
      {animals.length > 0 ? (
        <AnimalDisplay />
      ) : (
        <>
          <h2 className="my-5 text-3xl">No Animals Added Yet!</h2>
          <button className="my-5 rounded bg-slate-500 px-5 py-3 text-xl hover:bg-slate-900 ">
            Add animal
          </button>
        </>
      )}
    </div>
  );
}

export default indexRoute;
