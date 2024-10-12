import { css } from "styled-components";
import { getColor, getSizeBy } from "../../themes/utils/utils";

export const Title1Styles = css`
  font-size: 20px;
  font-weight: 300;
  line-height: 16px;
  letter-spacing: 0.17812499403953552px;
  text-align: center;
  width: 135px;
`;

export const TextStyle1 = css`
  padding: 0 ${getSizeBy(4)};
  color: ${getColor("primary")};
  font-size: 16px;
  font-weight: 300;
  line-height: 21px;
  letter-spacing: -0.3199999928474426px;
  text-align: left;
`;
