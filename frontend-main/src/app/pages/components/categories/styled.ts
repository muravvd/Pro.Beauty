import styled from "styled-components";
import { getColor, getSizeBy } from "../../../../themes/utils/utils";
import { NavLink } from "react-router-dom";
import { Responsive, WidthProvider } from "react-grid-layout";

export const ResponsiveReactGridLayout = WidthProvider(Responsive);

export const CategoriesWrapper = styled.div`
  position: relative;
`;

export const Title = styled.div`
  margin: ${getSizeBy(3)} ${getSizeBy(3)} 0 ${getSizeBy(3)};
  font-size: ${getSizeBy(4.5)};
  font-family: monospace; //todo шрифт?
  margin-bottom: ${getSizeBy(3)}; //todo убрать и сделать в wrapper-е
`;

export const Label = styled.div`
  margin: ${getSizeBy(3)} ${getSizeBy(3)} 0 ${getSizeBy(3)};
`;

export const StyledAddCategoryButton = styled.button`
  width: ${getSizeBy(25)};
`;

export const StyledResponsiveReactGridLayout = styled(
  ResponsiveReactGridLayout
)`
  overflow: auto;
`;
