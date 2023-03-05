export class AnimalConstruct {
  name!: string;
  type!: AnimalType;
}

export class Animal extends AnimalConstruct {
  id!:string;
}

export const AnimalTypeList = ["Carnivores", "Herbivores","Omnivores"] as const
export type AnimalType = typeof AnimalTypeList[number]

