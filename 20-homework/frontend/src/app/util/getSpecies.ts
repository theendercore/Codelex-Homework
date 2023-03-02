import { SpeciesData } from '../types';

export default (species: SpeciesData[], id: string) => species.find((s) => s.id === id) || Error("Species not found");
