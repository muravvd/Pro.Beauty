import styled, { css } from "styled-components";
import { getColor, getSizeBy } from "../../../themes/utils/utils";
import { Button } from "../button/button";
import Form from "@rjsf/core";
import { TextStyle1 } from "../../typography/typography";

const FieldStyles = css`
  margin: ${getSizeBy(7)} 0;
`;

export const LoginBox = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: ${getColor("background")};
  color: ${getColor("danger")};

  fieldset {
    .field {
      ${FieldStyles}
    }

    .control-label {
      display: none;
    }

    border: none;
    margin-inline-start: 0;
    margin-inline-end: 0;
    padding-block-start: 0;
    padding-inline-start: 0;
    padding-inline-end: 0;
    padding-block-end: 0;
  }
`;

export const StyledForm = styled(Form)`
  max-width: ${getSizeBy(100)};
  width: 80%;

  &:last-child {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`;

export const StyledLoginButton = styled(Button)`
  ${TextStyle1};
  color: ${getColor("onBackground")};
  text-align: center;
  height: ${getSizeBy(14)};
  background-color: ${getColor("primary")};
  border-radius: ${getSizeBy(5)};
  cursor: pointer;
`;

export const StyledRegisterButton = styled(Button)`
  ${TextStyle1};
  color: ${getColor("onBackground")};
  margin-top: ${getSizeBy(5)};
  text-align: center;
  height: ${getSizeBy(14)};
  background-color: ${getColor("primary")};
  border-radius: ${getSizeBy(5)};
  cursor: pointer;
`;

export const ActionsWrapper = styled.div`
  width: 80%;
  max-width: ${getSizeBy(90)};
  display: flex;
  flex-direction: column;
  margin-top: ${getSizeBy(15)};
`;

export const StyledTitle = styled.div`
  font-weight: bold;
  font-size: ${getSizeBy(6)};
  text-align: center;
  color: ${getColor("primary")};
`;
