import styled from "styled-components";
import { getColor, getSizeBy } from "../../themes/utils/utils";
import { PicProp } from "../pages/saloon-page/interfaces";

export const StarAlignment = styled.div`
  margin-top: 5%;
  margin-right: 5%;
  margin-left: 5%;
`;

export const TextAlignment = styled.div`
  margin-top: 4%;
`;

export const RatingPanel = styled.div`
  display: flex;
  align-content: center;
  background: ${getColor("primary")};
  color: ${getColor("onBackground")};
  width: ${getSizeBy(17.5)};
  height: ${getSizeBy(5)};
  border: none;
  border-radius: ${getSizeBy(4)};
  margin-left: ${getSizeBy(2.5)};
  margin-top: ${getSizeBy(2.5)};
  font-size: ${getSizeBy(3)};
`;

export const StyledText = styled.div`
  opacity: 100%;
  color: black; //todo этот div для непрозрачности текста на иконке салона. Убрать наследование прозрачности текста от колонки и снести
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
`;

export const SaloonBck = styled.div`
  background-image: url(${(props: PicProp) => props.imageUrl});
  min-height: ${getSizeBy(37.5)};
  max-width: ${getSizeBy(62.5)};
  border: ${getSizeBy(0.5)} solid ${getColor("background")};
  border-radius: ${getSizeBy(4)};
  cursor: pointer;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background-repeat: no-repeat;

  :hover {
    border: ${getSizeBy(0.5)} solid ${getColor("danger")};
  }
`;
