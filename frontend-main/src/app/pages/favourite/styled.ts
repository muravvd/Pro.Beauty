import styled from "styled-components";
import { getColor, getSizeBy } from "../../../themes/utils/utils";
import { PicProp } from "../saloon-page/interfaces";
import { List } from "../../../ui-kit/components/list/list";

export const StyledList = styled(List)`
  @media screen and (min-width: 900px) {
    height: 350px;
  }
`;

export const FavouriteSaloonCard = styled.div`
  background-color: ${getColor("onBackgroundDarker")};
  width: 375px;
  height: 100px;
  border-radius: ${getSizeBy(3)};
  margin-top: ${getSizeBy(4)};
  display: flex;
  align-items: center;
  cursor: pointer;
`;

export const CardAlignment = styled.div`
  display: grid;
  grid-template-columns: 2fr 4fr 11fr 1fr;
`;

export const FavouriteWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const FavouriteLogo = styled.div`
  background-image: url(${(props: PicProp) => props.imageUrl});
  width: ${getSizeBy(20)};
  height: ${getSizeBy(20)};
  border-radius: ${getSizeBy(20)};
`;

export const Heart = styled.div`
  display: flex;
  scale: 140%;
  flex-direction: row;
  align-items: center;
  margin-left: ${getSizeBy(4)};
`;

export const IconsWrap = styled.div`
  display: flex;
  flex-direction: row;
`;

export const FavouriteInfoWrap = styled.div`
  display: flex;
  flex-direction: column;
  align-items: baseline;
  //margin: ${getSizeBy(3)} 0;
  padding: ${getSizeBy(3)};
  row-gap: ${getSizeBy(3)};
`;

export const TextWrap = styled.div`
  color: ${getColor("primary")};
`;
