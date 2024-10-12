import styled from "styled-components";
import { getColor, getSizeBy } from "../../../themes/utils/utils";

export const Title = styled.div`
  padding: ${getSizeBy(4)} 0;
  position: sticky;
  top: 0;
  background-color: ${getColor("background")};
`;

export const Wrapper = styled.div<{ direction: "column" | "row" }>`
  overflow-x: ${({ direction }) => (direction === "row" ? "auto" : "hidden")};
  overflow-y: ${({ direction }) =>
    direction === "column" ? "auto" : "hidden"};
  margin: 20px;

  & {
    -ms-overflow-style: none; /* Internet Explorer 10+ */
    scrollbar-width: none; /* Firefox */
  }

  &::-webkit-scrollbar {
    display: none; /* Safari and Chrome */
  }
`;

export const ListWrapper = styled.div<{ direction: "row" | "column" }>`
  display: flex;
  flex-direction: ${({ direction }) => direction};

  & {
    -ms-overflow-style: none; /* Internet Explorer 10+ */
    scrollbar-width: none; /* Firefox */
  }

  &::-webkit-scrollbar {
    display: none; /* Safari and Chrome */
  }
`;
