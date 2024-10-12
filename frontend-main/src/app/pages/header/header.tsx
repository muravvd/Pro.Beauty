import React from "react";
import { HeaderItems, HeaderWrapper, NameStyle, SearchBar } from "./styled";
import {
  UpperControlPanel,
  USectionT,
} from "../../../ui-kit/components/upper-panel/upper-panel";
import { DropdownPanel } from "../../../ui-kit/components/dropdown-panel/dropdown-panel";

export const sections: USectionT[] = [
  {
    id: "home",
    navigateTo: "/",
    label: "Главная",
  },
  {
    id: "map",
    navigateTo: "/map",
    label: "Карта",
  },
  {
    id: "appointments",
    navigateTo: "/appointments",
    label: "Записи",
  },
  {
    id: "heart",
    navigateTo: "/favourite",
    label: "Избраное",
  },
  {
    id: "profile",
    navigateTo: "/profile",
    label: "Профиль",
  },
];

const PanelChoice = () => {
  if (window.innerWidth > 800) return <UpperControlPanel sections={sections} />;
  return <DropdownPanel />;
};

export const Header = () => {
  if (window.innerWidth < 500) {
    return <div />;
  }
  return (
    <HeaderWrapper>
      <HeaderItems>
        <NameStyle>PRO.BEAUTY</NameStyle>
        <SearchBar />
        <PanelChoice />
      </HeaderItems>
    </HeaderWrapper>
  );
};

//todo searchbar
