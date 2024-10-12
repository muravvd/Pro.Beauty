import styled from "styled-components";
import { getColor, getSizeBy } from "../../../../themes/utils/utils";
import { PicProp } from "../../saloon-page/interfaces";

export const SaloonImg = styled.img`
  border-radius: ${getSizeBy(3)} ${getSizeBy(3)} 0 0;
  object-fit: cover;
`;

export const SaloonWrapper = styled.div`
  min-width: ${getSizeBy(40)};
  border: ${getSizeBy(0.5)} solid ${getColor("background")};
  border-radius: ${getSizeBy(4)};
  cursor: pointer;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background-repeat: no-repeat;
`;

export const FavouriteIconWrapper = styled.div`
  margin: 0 ${getSizeBy(1.5)};
`;

export const AddressWrapper = styled.div`
  padding-top: ${getSizeBy(0.75)};
  font-size: 13px;
`;
export const InfoLabel = styled.div`
  font-size: 16px;
`;

export const FavouriteLabel = styled.div`
  display: flex;
`;

export const RatingWrapper = styled.div`
  position: absolute;
  margin-top: ${getSizeBy(1.5)};
  margin-left: ${getSizeBy(2.5)};
  display: flex;
  background-color: rgba(255, 255, 255, 1);
  border-radius: ${getSizeBy(3)};
`;

export const CurrentRating = styled.div`
  color: rgba(0, 0, 0, 1);
`;

export const ReviewsAmount = styled.div`
  color: rgba(106, 106, 106, 1);
`;

export const SaloonInfoPanel = styled.div`
  background: ${getColor("primary")};
  color: ${getColor("onBackground")};
  border-bottom-left-radius: ${getSizeBy(3.5)};
  border-bottom-right-radius: ${getSizeBy(3.5)};
  font-size: ${getSizeBy(4)};
  height: ${getSizeBy(10)};
  width: 100%;
  bottom: 0;
  opacity: 70%;
  display: grid;
  align-items: center;
  grid-template-columns: 1fr 10fr;
  padding: ${getSizeBy()} 0;
`;

export const StyledText = styled.div`
  opacity: 100%;
  color: black; //todo этот div для непрозрачности текста на иконке салона. Убрать наследование прозрачности текста от колонки и снести
`;

export const SaloonBck = styled.div`
  background-image: url(${(props: PicProp) => props.imageUrl});
  min-height: ${getSizeBy(37.5)};
  border: ${getSizeBy(0.5)} solid ${getColor("background")};
  border-radius: ${getSizeBy(4)};
  cursor: pointer;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background-repeat: no-repeat;

  :hover {
    scale: 105%;
  }
`;
