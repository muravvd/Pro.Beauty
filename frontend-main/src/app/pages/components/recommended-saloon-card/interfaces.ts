export interface RatingProps {
  //todo поменять на цифры для сортировки и вычисления
  currentRating: SaloonCartProps["currentRating"];
  reviewsAmount: SaloonCartProps["reviewsAmount"];
}

export interface InformationProps {
  title: string;
  address: string;
  isFavourite: boolean;
}

export interface SaloonCartProps {

  id: string
  title: string;
  address: string;
  isFavourite: boolean;
  currentRating: number;
  reviewsAmount: number;
  imageUrl: string;
}
