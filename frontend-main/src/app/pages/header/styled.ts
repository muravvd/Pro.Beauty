import styled from "styled-components";
import { getColor, getSizeBy } from "../../../themes/utils/utils";

export const HeaderWrapper = styled.div`
  display: flex;
  flex-direction: column;
  background-color: ${getColor("danger")};
  height: ${getSizeBy(12)};
  align-items: center;
`;

export const HeaderItems = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-column-gap: ${getSizeBy(10)};
  margin: ${getSizeBy(3)} ${getSizeBy(5)} ${getSizeBy(2)};
  align-items: center;
`;

export const EmptyHeader = styled.div`
  height: 1px;
`;

export const SearchBar = styled.div`
  background-color: ${getColor("onBackground")};
  height: ${getSizeBy(7)};
  width: ${getSizeBy(49)};
  border-radius: ${getSizeBy(2.5)};
`;

export const NameStyle = styled.div`
  color: ${getColor("primary")};
  font-size: ${getSizeBy(6)};
  font-family: system-ui;
`;
