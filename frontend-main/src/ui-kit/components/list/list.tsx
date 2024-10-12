import React, { JSX } from "react";
import { ListWrapper, Title, Wrapper } from "./styled";

export type ListProps = {
  title?: string;
  items: JSX.Element[];
  direction?: "row" | "column";
};

export const List = ({ items, direction = "row", ...rest }: ListProps) => {
  return (
    <Wrapper direction={direction} {...rest}>
      <ListWrapper direction={direction}>
        {items.map((item) => item)}
      </ListWrapper>
    </Wrapper>
  );
};
