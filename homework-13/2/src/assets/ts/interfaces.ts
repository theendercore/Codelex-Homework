interface iCard extends PseudoCard {
  id: number;
}
interface PseudoCard {
  title: string;
  text: string;
  url: string;
}

export type { iCard, PseudoCard };
