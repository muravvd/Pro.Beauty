import styled from "styled-components";
import { getColor } from "../../../themes/utils/utils";

export const StyledControlPanelWrapper = styled.div<{ count: number }>`
  box-shadow: 0px -0.5px 0px rgba(0, 0, 0, 0.2);
  background-color: ${getColor("background")};
  display: grid;
  grid-template-columns: ${({ count }) => `repeat(${count}, 1fr)`};
`;

export const SectionWrapper = styled.div<{ isActive?: boolean }>`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  path {
    fill: ${({ isActive }) => getColor(isActive ? "danger" : "primary")};
  }

  @media screen and (max-width: 350px) {
    label {
      display: none;
    }
  }
`;
