import styled from "styled-components";
import { getColor, getSizeBy } from "../../../../themes/utils/utils";

export const DetailsWrap = styled.div`
  margin: ${getSizeBy(3)} 0;
  padding: ${getSizeBy(3)};
  display: flex;
  flex-direction: column;
  row-gap: ${getSizeBy(3)};
  border-top: ${getSizeBy(0.5)} solid ${getColor("onBackground")};
  border-bottom: ${getSizeBy(0.5)} solid ${getColor("onBackground")};

  @media screen and (max-width: 350px) {
    border: ${getSizeBy(0.5)} solid ${getColor("onBackground")};
    border-radius: ${getSizeBy(4)};
    margin: ${getSizeBy(3)};
  }
`;

export const AddressWrapper = styled.div`
  display: flex;
  flex-direction: row;
`;

export const MetroStationWrapper = styled.div`
  display: flex;
  flex-direction: row;
`;

export const PhoneWrapper = styled.div`
  display: flex;
  gap: ${getSizeBy(3)};
`;
