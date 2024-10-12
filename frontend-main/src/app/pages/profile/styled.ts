import styled from "styled-components";
import { getColor, getSizeBy } from "../../../themes/utils/utils";
import { PicProp } from "../saloon-page/interfaces";

export const ProfileWrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  align-items: center;
`;

export const PhotoLine = styled.div`
  width: ${getSizeBy(93.75)};
  display: grid;
  grid-template-columns: 7fr 14fr 4fr;
  justify-content: center;
  align-items: center;
  margin-top: ${getSizeBy(15)};
`;

export const Photo = styled.div`
  background-image: url(${(props: PicProp) => props.imageUrl});
  height: ${getSizeBy(20)};
  width: ${getSizeBy(20)};
  border-radius: ${getSizeBy(25)};
`;

export const DetailsTextWrap = styled.div`
  color: ${getColor("primary")};
  margin-bottom: ${getSizeBy(2)};
`;

export const GlobalText = styled.div`
  color: ${getColor("lightgray")};
  margin-top: ${getSizeBy(10)};
`;

export const Details = styled.div`
  display: flex;
  flex-direction: column;
`;

export const TextWall = styled.div`
  display: flex;
  flex-direction: column;
  width: ${getSizeBy(93.75)};
  justify-content: flex-start;
`;

export const TextWrap = styled.div`
  width: ${getSizeBy(40)};
  color: ${getColor("primary")};
  display: grid;
  grid-template-columns: 1fr 6fr;
  margin-top: ${getSizeBy(3)};
  cursor: pointer;
`;

export const IconWrap = styled.div`
  color: ${getColor("primary")};
  margin-bottom: ${getSizeBy(8)};
  cursor: pointer;
`;
