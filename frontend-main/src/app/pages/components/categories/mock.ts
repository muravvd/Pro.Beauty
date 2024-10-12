import { CategoryT } from "./types";
// @ts-ignore
import nails from "../../../../ui-kit/images/nails.png";
// @ts-ignore
import barber from "../../../../ui-kit/images/barber.png";
// @ts-ignore
import beard from "../../../../ui-kit/images/beard.png";
// @ts-ignore
import brows from "../../../../ui-kit/images/brows.png";
// @ts-ignore
import cosmetics from "../../../../ui-kit/images/cosmetics.png";
// @ts-ignore
import depil from "../../../../ui-kit/images/depil.png";
// @ts-ignore
import massage from "../../../../ui-kit/images/massage.png";
// @ts-ignore
import visage from "../../../../ui-kit/images/visage.png";

export enum CATEGORIES {
  DEFAULT = "default",
  NAILS = "nails",
  HAIR_CUT = "haircut",
  SKIN_CLEAN = "skinclean",
  BROW = "brow",
  VISAGE = "visage",
  MASSAGE = "massage",
  BEAR = "bear",
}

const CATEGORIES_ID_LIST = Object.values(CATEGORIES).filter((v) =>
  isNaN(Number(v))
);

export const CategoryListMock: CategoryT[] = Array(CATEGORIES_ID_LIST.length)
  .fill(null)
  .map((_, index) => ({
    id: CATEGORIES_ID_LIST.at(index) ?? CATEGORIES.DEFAULT,
    imageUrl: `./images/${index + 1}.png`,
    title: `Категория ${index + 1}`,
  }));

export const CategoriesListMock: CategoryT[] = [
  {
    id: "1",
    title: "Ногтевой сервис",
    imageUrl: nails,
  },
  {
    id: "2",
    title: "Массаж",
    imageUrl: massage,
  },
  {
    id: "3",
    title: "Брови, ресницы",
    imageUrl: brows,
  },
  {
    id: "4",
    title: "Усы, борода",
    imageUrl: beard,
  },
  {
    id: "5",
    title: "Депиляция, эпиляция",
    imageUrl: depil,
  },
  {
    id: "6",
    title: "Визаж",
    imageUrl: visage,
  },
  {
    id: "7",
    title: "Парикмахерские услуги",
    imageUrl: barber,
  },
  {
    id: "8",
    title: "Косметология",
    imageUrl: cosmetics,
  },
];
