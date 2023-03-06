export class ConstructedMovie {
  constructor(
    public name: string,
    public status: StatusType | null,
    public img: string,
    public rating: RatingType
  ) {}
}

export class Movie extends ConstructedMovie {
  constructor(
    name: string,
    type: StatusType,
    img: string,
    rating: RatingType,
    public id: string | number
  ) {
    super(name, type, img, rating);
  }
}

export const RatingTypeList = [1, 2, 3, 4, 5, null] as const;
export type RatingType = typeof RatingTypeList[number];

export const StatusTypeList = [
  'Watched',
  'Going to Watch',
  'Not Watching',
] as const;
export type StatusType = typeof StatusTypeList[number];
