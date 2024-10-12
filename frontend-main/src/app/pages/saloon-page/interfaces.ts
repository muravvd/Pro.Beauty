export interface SaloonProps {
  title: string;
  address: string;
  isFavourite: boolean;
  currentRating: number;
  reviewsAmount: number;
  imageUrl: string;
  logoUrl: string;
  phoneNumber: string;
  description: string;
  distance: string; //todo distance
}

export type PicProps = Pick<SaloonProps, "imageUrl" | "isFavourite">;
export type PicProp = Pick<SaloonProps, "imageUrl">;
export type LogoLineProps = Pick<SaloonProps, "logoUrl" | "title" | "distance">;
export type DetailsLineProps = Pick<
  SaloonProps,
  "address" | "currentRating" | "reviewsAmount" | "phoneNumber"
>;
export type RatingProps = Pick<SaloonProps, "currentRating" | "reviewsAmount">;
export type ReviewProp = Pick<SaloonProps, "reviewsAmount">;
export type DescriptionTextT = Pick<SaloonProps, "description">;
export type MasterProps = Pick<
  SaloonProps,
  "imageUrl" | "title" | "currentRating" | "reviewsAmount" | "description"
>;
export type MasterLineT = Pick<SaloonProps, "imageUrl" | "title">;

export type MasterT = {
  id: number;
  imageUrl: string;
  name: string;
};

export type WorksT = Pick<MasterT, "id" | "imageUrl">;

export type Works = {
  title?: string;
};

export type ReviewLineInfo = {
  grade?: number;
  thisGradeReviews: number;
  totalReviews: number;
};

export type ReviewT = {
  id: string;
  reviewText: string;
  rating: number;
  author: string; //todo передавать ссылки, считывать имена профилей
  reviewDate: Date;
};

export type RStar = Pick<ReviewT, "rating">;

export type PassMock = {
  reviewList: ReviewT[];
};

//todo лишние типы
