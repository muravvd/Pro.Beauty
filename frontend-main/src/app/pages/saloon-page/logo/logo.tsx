import { LogoLineProps } from "../interfaces";
import { LogoWrapper, LogoIcon, LogoText, StyledTitle } from "./styled";
import React from "react";

export function SaloonLogo({ logoUrl, title }: LogoLineProps) {
  return (
    <LogoWrapper>
      <LogoIcon src={logoUrl} />
      <LogoText>
        <StyledTitle style={{ fontSize: 22 }}>{title}</StyledTitle>
      </LogoText>
    </LogoWrapper>
  );
}
