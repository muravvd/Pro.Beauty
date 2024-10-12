import styled from "styled-components";
import { getColor, getSizeBy } from "../../../../themes/utils/utils";

export const MastersWrapper = styled.div`
  padding: ${getSizeBy(5)} ${getSizeBy(3)};
  border: solid ${getColor("onBackground")};
  border-width: ${getSizeBy(0.5)} 0;
  display: flex;
  flex-direction: row;
  justify-content: start;
  align-items: center;


  @media screen and (max-width: 350px) {
    border: ${getSizeBy(0.5)} solid ${getColor("onBackground")};
    border-radius: ${getSizeBy(4)};
    margin: ${getSizeBy(3)};
  }
  
`;

export const MastersTitle = styled.div`
  cursor: pointer;
`;
