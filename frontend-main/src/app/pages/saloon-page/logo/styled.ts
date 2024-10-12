import styled from "styled-components";
import { getColor, getSizeBy } from "../../../../themes/utils/utils";
import { PicProp } from "../interfaces";

export const LogoWrapper = styled.div`
  margin: ${getSizeBy(3)};
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  column-gap: ${getSizeBy(5)};
  border-bottom: ${getSizeBy(3)} solid ${getColor("background")};
`;

export const LogoText = styled.div`
  color: ${getColor("lightgray")};
`;

export const LogoIcon = styled.img`
  height: ${getSizeBy(17.75)};
  width: ${getSizeBy(16)};
  background-repeat: no-repeat;
`;

export const StyledTitle = styled.div`
  font-size: ${getSizeBy(6)};
`;
