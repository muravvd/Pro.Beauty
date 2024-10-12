import styled from "styled-components";
import { getColor, getSizeBy } from "../../../themes/utils/utils";

export const StyledControlPanelWrapper = styled.div<{ count: number }>`
  background-color: ${getColor("danger")};
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
  grid-column-gap: ${getSizeBy(5)};
`;

export const SectionWrapper = styled.div<{ isActive?: boolean }>`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: ${({ isActive }) => getColor(isActive ? "primary" : "lightgray")};
`;
