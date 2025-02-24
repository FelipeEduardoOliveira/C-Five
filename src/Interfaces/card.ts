export interface ICard {
  imageBg: string;
  title: string;
  description?: string;
  text: string;
}

export interface IServiceCards {
  cards: ICard[];
}
