export class AnimalConstruct {
  constructor(public name: string, public type: AnimalType | null) {}
}

export class Animal extends AnimalConstruct {
  constructor(name: string, type: AnimalType, public id: string) {
    super(name, type);
  }
}

export const AnimalTypeList = [
  'Carnivore',
  'Herbivore',
  'Omnivore',
] as const;
export type AnimalType = typeof AnimalTypeList[number];
