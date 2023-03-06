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
    public id: string
  ) {
    super(name, type, img, rating);
  }
}

export type RatingType = 1 | 2 | 3 | 4 | 5 | null;

export const StatusTypeList = [
  'Watched',
  'Going to Watch',
  'Not Watching',
] as const;
export type StatusType = typeof StatusTypeList[number];
