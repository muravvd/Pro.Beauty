import { FavouriteT } from "./interfaces";
// @ts-ignore
import favouritelogo from "../components/favouritelogo.png";

export const FavouritesListMock: FavouriteT[] = [
  {
    id: 1,
    title: "Название",
    imageUrl: favouritelogo,
    address: "Жопа мира",
    price: 2000,
  },
  {
    id: 2,
    title: "Второе название",
    imageUrl: favouritelogo,
    address: "Жопа мира",
    price: 2000,
  },
  {
    id: 3,
    title: "Gym",
    imageUrl: favouritelogo,
    address: "Dungeon",
    price: 300,
  },
  {
    id: 4,
    title: "Название",
    imageUrl: favouritelogo,
    address: "Жопа мира",
    price: 2000,
  },
  {
    id: 5,
    title: "Пятое название",
    imageUrl: favouritelogo,
    address: "Жопа мира",
    price: 2000,
  },
];

//todo нахуя в избранном цена - НА ЧТО ЭТА ЦЕНА?
