import styled from "styled-components";
import { getColor, getSizeBy } from "../../../themes/utils/utils";

export const DropdownWrapper = styled.div`
  background-color: ${getColor("danger")};
  width: 100%;
  height: 30px;
  position: absolute;
  display: flex;
  flex-direction: column;
  align-items: center;
  top: ${getSizeBy(12)};
  left: 0;
  transition: height 0.3s ease;
`;
