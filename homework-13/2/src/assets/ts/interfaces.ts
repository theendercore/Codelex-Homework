interface iCard extends PseudoCard {
  id: number;
}
interface PseudoCard {
  title: string;
  text: string;
  img: string;
}

export type { iCard };
