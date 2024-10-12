import styled from "styled-components";
import { getColor, getSizeBy } from "../../../themes/utils/utils";

export const MainPageWrapper = styled.div`
  height: 100%;
  width: 100%;
  overflow: auto;
  background-color: ${getColor("background")};
`;

export const CategoriesWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Header = styled.div`
  color: ${getColor("primary")};
  font-size: ${getSizeBy(8.5)};
  //width: ${getSizeBy(86)};
  font-family: Calibri; //todo подобрать шрифт (на фигме - SF Pro Display)
  text-align: center;
  align-content: center;
`;

export const MPSearchbarWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const SearchBar = styled.div`
  background-color: ${getColor("onBackground")};
  height: ${getSizeBy(8)};
  width: 90%;
  border-radius: ${getSizeBy(2.5)};
`;
