import React, { useCallback } from "react";
import { SectionWrapper, StyledControlPanelWrapper } from "./styled";
import { IconMap, IconNames } from "../../icons/icon-map";
import { useNavigate, useLocation } from "react-router";
import { EmptyHeader } from "../../../app/pages/header/styled";

export type SectionT = {
  id: string;
  navigateTo: string;
  iconName: IconNames;
  label: string;
};

export type ControlPanelT = {
  sections: SectionT[];
};

export const Section = ({ id, iconName, label, navigateTo }: SectionT) => {
  const navigate = useNavigate();

  const { pathname } = useLocation();
  const onClick = useCallback(
    () => navigate(navigateTo),
    [navigate, navigateTo]
  );

  return (
    <SectionWrapper
      isActive={pathname.includes(navigateTo) && navigateTo.includes(pathname)}
      onClick={onClick}
    >
      {IconMap[iconName]}
      <label>{label}</label>
    </SectionWrapper>
  );
};

export const ControlPanel = ({ sections }: ControlPanelT) => {
  if (window.innerWidth >= 500) {
    return <EmptyHeader />;
  }

  return (
    <StyledControlPanelWrapper count={sections.length}>
      {sections.map(({ id, iconName, label, navigateTo }) => (
        <Section
          key={id}
          id={id}
          iconName={iconName}
          label={label}
          navigateTo={navigateTo}
        />
      ))}
    </StyledControlPanelWrapper>
  );
};
