import styled from "styled-components";
import { getColor, getSizeBy } from "../../../themes/utils/utils";

export const SimpleButton = styled.button`
  align-self: center;
  background: ${getColor("primary")};
  color: ${getColor("onBackground")};
  border: none;
  border-radius: ${getSizeBy(10)};
  cursor: pointer;
  width: ${getSizeBy(30)};
`;

export const ExitAlign = styled.div`
  display: flex;
  flex-direction: column;
  align-self: center;
`;
