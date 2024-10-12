import {
  MasterProps,
  SaloonProps,
  MasterT,
  WorksT,
  ReviewT,
} from "./interfaces";
// @ts-ignore
import saloonpic from "../../../app/pages/components/hipsterbarber.png";
// @ts-ignore
import saloonlogo from "../../../app/pages/components/hipsterlogo.png";
// @ts-ignore
import masterpic from "../../../app/pages/components/masterpic.png";
// @ts-ignore
import masterlogo from "../../../app/pages/components/masterlogo.png";
// @ts-ignore
import work1 from "../../../app/pages/components/masterwork1.png";
// @ts-ignore
import work2 from "../../../app/pages/components/masterwork2.png";

export const SaloonMock: SaloonProps = {
  title: "HIPSTER BARBERSHOP",
  address: "Абаканская улица, 10к1",
  isFavourite: false,
  currentRating: 5.0,
  reviewsAmount: 177,
  imageUrl: saloonpic,
  logoUrl: saloonlogo,
  phoneNumber: "88005553535",
  description:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum nec neque vulputate, vehicula neque a, dignissim dui. Donec ex quam, vulputate ut dignissim in, semper a quam. Aenean ac mauris justo. Praesent non urna purus.",
  distance: "8 км от вас",
};

export const MasterMock: MasterProps = {
  title: "Наталья",
  imageUrl: masterpic,
  currentRating: 4.2,
  reviewsAmount: 177,
  description:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum nec neque vulputate, vehicula neque a, dignissim dui. Donec ex quam, vulputate ut dignissim in, semper a quam. Aenean ac mauris justo. Praesent non urna purus.",
};

export const MasterCardsListMock: MasterT[] = [
  {
    id: 1,
    name: "Наталья",
    imageUrl: masterlogo,
  },
  {
    id: 2,
    name: "Наталья",
    imageUrl: masterlogo,
  },
  {
    id: 3,
    name: "Наталья",
    imageUrl: masterlogo,
  },
  {
    id: 4,
    name: "Наталья",
    imageUrl: masterlogo,
  },
  {
    id: 5,
    name: "Наталья",
    imageUrl: masterlogo,
  },
  {
    id: 6,
    name: "Наталья",
    imageUrl: masterlogo,
  },
  {
    id: 7,
    name: "Наталья",
    imageUrl: masterlogo,
  },
  {
    id: 8,
    name: "Наталья",
    imageUrl: masterlogo,
  },
  {
    id: 9,
    name: "Наталья",
    imageUrl: masterlogo,
  },
  {
    id: 10,
    name: "Наталья",
    imageUrl: masterlogo,
  },
  {
    id: 11,
    name: "Наталья",
    imageUrl: masterlogo,
  },
];

export const WorksListMock: WorksT[] = [
  {
    id: 1,
    imageUrl: work1,
  },
  {
    id: 2,
    imageUrl: work2,
  },
  {
    id: 3,
    imageUrl: work1,
  },
  {
    id: 4,
    imageUrl: work2,
  },
  {
    id: 5,
    imageUrl: work1,
  },
  {
    id: 6,
    imageUrl: work2,
  },
  {
    id: 7,
    imageUrl: work1,
  },
  {
    id: 8,
    imageUrl: work2,
  },
  {
    id: 9,
    imageUrl: work1,
  },
  {
    id: 10,
    imageUrl: work2,
  },
];

export const SaloonReviewsMock: ReviewT[] = [
  {
    id: "1",
    reviewText:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum nec neque vulputate, vehicula neque a, dignissim dui. ",
    rating: 5,
    author: "Мария",
    reviewDate: new Date(),
  },
  {
    id: "2",
    reviewText:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum nec neque vulputate, vehicula neque a, dignissim dui. ",
    rating: 4,
    author: "Мария2",
    reviewDate: new Date("June 11, 2022 11:11:11"),
  },
  {
    id: "3",
    reviewText: "Прожженный салон и конкурсы интересные",
    rating: 5,
    author: "Мария3",
    reviewDate: new Date("June 1, 2022 23:45:00"),
  },
  {
    id: "4",
    reviewText:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum nec neque vulputate, vehicula neque a, dignissim dui. ",
    rating: 4,
    author: "Мария4",
    reviewDate: new Date("June 5, 2022 01:10:00"),
  },
  {
    id: "5",
    reviewText:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum nec neque vulputate, vehicula neque a, dignissim dui. ",
    rating: 3,
    author: "Мария5",
    reviewDate: new Date("June 21, 2022 02:15:00"),
  },
  {
    id: "6",
    reviewText:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum nec neque vulputate, vehicula neque a, dignissim dui. ",
    rating: 5,
    author: "Мария5",
    reviewDate: new Date("June 21, 2022 02:15:00"),
  },
  {
    id: "7",
    reviewText:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum nec neque vulputate, vehicula neque a, dignissim dui. ",
    rating: 5,
    author: "Мария5",
    reviewDate: new Date("June 21, 2022 02:15:00"),
  },
  {
    id: "8",
    reviewText:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum nec neque vulputate, vehicula neque a, dignissim dui. ",
    rating: 2,
    author: "Мария5",
    reviewDate: new Date("June 21, 2022 02:15:00"),
  },
  {
    id: "9",
    reviewText:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum nec neque vulputate, vehicula neque a, dignissim dui. ",
    rating: 5,
    author: "Мария5",
    reviewDate: new Date("June 21, 2022 02:15:00"),
  },
  {
    id: "10",
    reviewText:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum nec neque vulputate, vehicula neque a, dignissim dui. ",
    rating: 2,
    author: "Мария5",
    reviewDate: new Date("June 21, 2022 02:15:00"),
  },
  {
    id: "11",
    reviewText:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum nec neque vulputate, vehicula neque a, dignissim dui. ",
    rating: 3,
    author: "Мария5",
    reviewDate: new Date("June 21, 2022 02:15:00"),
  },
  {
    id: "12",
    reviewText:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum nec neque vulputate, vehicula neque a, dignissim dui. ",
    rating: 4,
    author: "Мария5",
    reviewDate: new Date("June 21, 2022 02:15:00"),
  },
];
