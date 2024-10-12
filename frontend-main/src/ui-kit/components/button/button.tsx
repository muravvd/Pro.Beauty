import React, { PropsWithChildren } from "react";
import { StyledButton } from "./styled";

export type ButtonProps = {
  onClick?: () => void;
} & PropsWithChildren;

export const Button = ({ onClick, children, ...rest }: ButtonProps) => {
  return (
    <StyledButton onClick={onClick} {...rest}>
      {children}
    </StyledButton>
  );
};
