import styled from "styled-components";
import {Title1Styles} from "../../../../ui-kit/typography/typography";
import {getColor, getSizeBy} from "../../../../themes/utils/utils";

export const HideTheText = styled.div`
  ${Title1Styles};
  color: ${getColor("danger")};
  cursor: pointer;
  width: max-content;
`;

export const DescriptionWrapper = styled.div`
  margin: ${getSizeBy(3)};
  color: ${getColor("lightgray")};
  max-width: ${getSizeBy(90)};
  overflow: hidden;
`;

export const DescriptionText = styled.div`
  font-size: ${getSizeBy(4.5)};
`;