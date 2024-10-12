export interface SaloonPanelProps {
  title: string;
  address: string;
  isFavourite: boolean;
  currentRating: number;
  reviewsAmount: number;
  imageUrl: string;
}

export interface InformationProps {
  title: string;
  address: string;
  isFavourite: boolean;
}

export interface RatingProps {
  //todo поменять на цифры для сортировки и вычисления
  currentRating: number;
  reviewsAmount: number;
}
