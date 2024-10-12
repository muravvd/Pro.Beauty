import styled from "styled-components";
import { getColor, getSizeBy } from "../../../themes/utils/utils";
import { TextStyle1, Title1Styles } from "../../typography/typography";
import { Button } from "../button/button";

export const StyledTextInputWrapper = styled.div`
  display: flex;
`;

export const StyledInput = styled.input`
  ${TextStyle1};
  width: 100%;
  height: ${getSizeBy(14)};
  background-color: ${getColor("onBackground")};
  box-shadow: ${getSizeBy(2.5)} ${getSizeBy()} ${getSizeBy()}
    rgba(0, 0, 0, 0.25);
  border: ${getSizeBy(0.25)} solid ${getColor("onBackground")};
  border-radius: ${getSizeBy(3.5)};

  &:focus {
    outline: none;
    border: none;
    box-shadow: ${getSizeBy(2.5)} ${getSizeBy()} ${getSizeBy()}
      rgba(0, 0, 0, 0.25);
  }
`;

export const StyledLabel = styled.label`
  ${Title1Styles};
  font-weight: 1000;
`;