import styled from "styled-components";
import { getColor, getSizeBy } from "../../../themes/utils/utils";
import { PicProp } from "./interfaces";
import { Title1Styles } from "../../../ui-kit/typography/typography";

export const PageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
`;

export const AboutTitleWrapper = styled.div`
  font-size: ${getSizeBy(5)};
  margin: ${getSizeBy(3)};
  color: ${getColor("primary")};
  border-bottom: solid ${getColor("background")} ${getSizeBy(2)};
`;

export const RatingWrap = styled.div`
  display: flex;
  flex-direction: row;
  gap: ${getSizeBy(3)};
  justify-content: space-between;
`;

export const TheCircle = styled.div`
  display: flex;
  background-color: white;
  color: black;
  width: ${getSizeBy(6)};
  height: ${getSizeBy(6)};
  border: none;
  border-radius: ${getSizeBy(10)};
  cursor: pointer;
  align-items: center;
`;
export const ReviewWrapper = styled.div`
  color: ${getColor("lightgray")};
  cursor: pointer;
  display: flex;
  flex-direction: row;
`;
export const ButtonLine = styled.div`
  display: grid;
  grid-template-columns: 8fr 1fr 1.2fr;
  margin-top: ${getSizeBy(14)};
  margin-left: ${getSizeBy(4)};
`;

export const SaloonBackground = styled.div`
  background-image: url(${(props: PicProp) => props.imageUrl});
  height: ${getSizeBy(58)};
  width: ${getSizeBy(93.75)};
  background-repeat: no-repeat;
  border-bottom: ${getSizeBy(3)} solid ${getColor("background")};
`;

export const ArrowWrapper = styled.div`
  margin-top: ${getSizeBy(0.5)};
  color: ${getColor("lightgray")};
  cursor: pointer;
`;
