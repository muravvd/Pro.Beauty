import styled, { css } from "styled-components";
import { getColor, getSizeBy } from "./themes/utils/utils";

export const MainWrapper = styled.div`
  width: 100%;
  height: 100%;
  background: ${getColor("background")};
  color: ${getColor("primary")};
  display: grid;
  grid-template-rows: 1fr 20fr 1fr;
`;
