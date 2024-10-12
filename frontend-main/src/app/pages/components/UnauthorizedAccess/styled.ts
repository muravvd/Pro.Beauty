import styled from "styled-components";
import { getColor, getSizeBy } from "../../../../themes/utils/utils";

export const UnauthorizedWrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  align-items: center;
`;

export const TextLineWrap = styled.div`
  display: flex;
  flex-direction: row;
`;

export const LoginLinkText = styled.div`
  color: ${getColor("danger")};
  cursor: pointer;
  margin-left: ${getSizeBy(1)}; //костыль
`;
