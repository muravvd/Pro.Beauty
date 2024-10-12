import React from "react";
import { MainWrapper } from "../styled";
import { Header } from "./pages/header/header";
import { MainPage } from "./pages/main-page/main-page";
import {
  ControlPanel,
  SectionT,
} from "../ui-kit/components/control-panel/control-panel";
import { Route, Routes } from "react-router-dom";
import { BodyWrapper } from "./styled";
import { Saloon } from "./pages/saloon-page/saloon-page";
// @ts-ignore
import hipster from "../../src/app/pages/components/hipsterbarber.png";
// @ts-ignore
import hipsterlogo from "../../src/app/pages/components/hipsterlogo.png";
// @ts-ignore
import masterpic from "../../src/app/pages/components/masterpic.png";
import { Masters } from "./pages/masters/masters";
import { MasterPage } from "./pages/masters/masterpage";
import { NotFound } from "../ui-kit/components/not-found/not-found";
import { SaloonReviews } from "./pages/reviews/saloonreviews";
import { FavouritePage } from "./pages/favourite/favouritepage";
import {
  AppointmentsPage,
  ArchivePage,
} from "./pages/appointments/appointments";
import { ProfilePage } from "./pages/profile/profile";

const sections: SectionT[] = [
  {
    id: "home",
    iconName: "home",
    navigateTo: "/",
    label: "Главная",
  },
  {
    id: "map",
    iconName: "map",
    navigateTo: "/map",
    label: "Карта",
  },
  {
    id: "appointments",
    iconName: "records",
    navigateTo: "/appointments",
    label: "Записи",
  },
  {
    id: "heart",
    iconName: "heart",
    navigateTo: "/favourite",
    label: "Избраное",
  },
  {
    id: "profile",
    iconName: "profile",
    navigateTo: "/profile",
    label: "Профиль",
  },
];

const Body = () => {
  return (
    <BodyWrapper>
      <Routes>
        <Route path={`/`} element={<MainPage />} />
        <Route path={`/profile`} element={<ProfilePage />} />
        <Route path={`/masters/:categoryId`} element={<Masters />} />
        <Route path={`/master-details/:masterId`} element={<MasterPage />} />
        <Route path={`/saloon/:saloonId`} element={<Saloon />} />
        <Route path={`/reviews`} element={<SaloonReviews />} />
        <Route path={`/favourite`} element={<FavouritePage />} />
        <Route path={`/appointments`} element={<AppointmentsPage />} />
        <Route path={`/appointments/archive`} element={<ArchivePage />} />
        <Route path={`*`} element={<NotFound />} />
      </Routes>
    </BodyWrapper>
  );
};

export function Orc() {
  return (
    <MainWrapper>
      <Header />
      <Body />
      <ControlPanel sections={sections} />
    </MainWrapper>
  );
}
