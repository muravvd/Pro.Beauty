import React from "react";
import { ChangeEventHandler } from "react";
import { StyledInput, StyledLabel, StyledTextInputWrapper } from "./styled";

export type TextInputTypeT = "password" | "text";

export type TextInputProps = {
  type?: TextInputTypeT
  label?: string;
  value?: string;
  onChange?: ChangeEventHandler;
  placeholder?: string;
};

export const TextInput = ({
  type = "text",
  label,
  value,
  onChange,
  placeholder,
}: TextInputProps) => {
  return (
    <StyledTextInputWrapper>
      <StyledLabel>{label}</StyledLabel>
      <StyledInput
        type={type}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
      />
    </StyledTextInputWrapper>
  );
};
