import styled from "styled-components";
import { getColor, getSizeBy } from "../../themes/utils/utils";
import { PicProp } from "../pages/saloon-page/interfaces";
import { Title1Styles } from "../../ui-kit/typography/typography";

export const CategoryWrapper = styled.div`
  background-image: url(${(props: PicProp) => props.imageUrl});
  color: ${getColor("primary")};
  min-height: ${getSizeBy(44)};
  max-width: ${getSizeBy(73)};
  border: ${getSizeBy(0.5)} solid ${getColor("background")};
  border-radius: ${getSizeBy(2.5)};
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;

  :hover {
    border: ${getSizeBy(0.5)} solid ${getColor("danger")};
  }
`;

export const CategoryImage = styled.div`
  background-image: url(${(props: PicProp) => props.imageUrl});
  color: ${getColor("primary")};
  min-height: ${getSizeBy(22.5)};
  max-width: ${getSizeBy(51)};
  border: none;
  border-radius: ${getSizeBy(2)};
`;

export const TitleWrapper = styled.div`
  ${Title1Styles};
`;
