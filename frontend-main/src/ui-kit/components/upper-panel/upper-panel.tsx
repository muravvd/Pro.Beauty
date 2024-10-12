import React, { useCallback } from "react";
import { SectionWrapper, StyledControlPanelWrapper } from "./styled";
import { useNavigate, useLocation } from "react-router";

export type USectionT = {
  id: string;
  navigateTo: string;
  label: string;
};

export type ControlPanelT = {
  sections: USectionT[];
};

export const UpperSection = ({ id, label, navigateTo }: USectionT) => {
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
      <label>{label}</label>
    </SectionWrapper>
  );
};

export const UpperControlPanel = ({ sections }: ControlPanelT) => {
  return (
    <StyledControlPanelWrapper count={sections.length}>
      {sections.map(({ id, label, navigateTo }) => (
        <UpperSection key={id} id={id} label={label} navigateTo={navigateTo} />
      ))}
    </StyledControlPanelWrapper>
  );
};
