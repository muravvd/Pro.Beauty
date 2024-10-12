import React, { useState } from "react";
import {
  ActionsWrapper,
  LoginBox,
  StyledForm,
  StyledLoginButton,
  StyledRegisterButton,
  StyledTitle,
} from "./styled";
import { IChangeEvent } from "@rjsf/core";
import { loginSchema, loginUiSchema } from "./schema";
import validator from "@rjsf/validator-ajv8";
import { useMutation } from "react-query";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import addHours from "date-fns/addHours";
import { useNavigate } from "react-router";
import { useHttpClient } from "../../../platform-utils/utils";
import { LoginRequestErrorT, LoginResponseTypeT } from "./types";
import { UserRequestBodyT } from "../../../app/types";
import { setToken } from "../../../store/store";
import { API_BASE_URL } from "../../../index";
import { TextInput, TextInputTypeT } from "../text-input/text-input";
import { getUiOptions, WidgetProps } from "@rjsf/utils";

export type LoginT = {
  title?: string;
};

export const FormTextInput = ({ value, onChange, uiSchema }: WidgetProps) => {
  const options = getUiOptions(uiSchema);
  const onChangeHandler = (e: any) => {
    onChange(e.target.value);
  };

  const type = options?.type as TextInputTypeT;

  return (
    <TextInput
      type={type}
      value={value ?? ""}
      onChange={onChangeHandler}
      placeholder={options.placeholder}
    />
  );
};

const widgets = {
  FormInputWidget: FormTextInput,
};

const Actions = ({
  onLogin,
  onRegister,
}: {
  onLogin: () => void;
  onRegister: () => void;
}) => {
  return (
    <ActionsWrapper>
      <StyledLoginButton onClick={onLogin}>ВХОД</StyledLoginButton>
      <StyledRegisterButton onClick={onRegister}>
        РЕГИСТРАЦИЯ
      </StyledRegisterButton>
    </ActionsWrapper>
  );
};

export const Login = ({}: LoginT) => {
  const [formData, setFormData] = useState<IChangeEvent["formData"]>(undefined);
  const { httpClient } = useHttpClient();

  const navigate = useNavigate();
  const onChange = (data: IChangeEvent) => setFormData(data.formData);

  const { mutate: processLogin } = useMutation<
    LoginResponseTypeT,
    LoginRequestErrorT,
    UserRequestBodyT
  >(
    httpClient.createPost<UserRequestBodyT, LoginResponseTypeT>(
      `${API_BASE_URL}/login`
    ),
    {
      onSuccess: (data) => {
        const { accessToken, refreshToken, user } = data;
        const lifetime = addHours(new Date(), 2);
        localStorage.setItem("token", accessToken);
        localStorage.setItem("token/lifetime", lifetime.toISOString());
        setToken(accessToken);
        navigate("/");
      },
      onError: (error: any) => {
        const msg = error?.message?.errors?.msg ?? "Unresolved Error";
        toast(msg);
      },
    }
  );

  const { mutate: processRegister } = useMutation<
    LoginResponseTypeT,
    LoginRequestErrorT,
    UserRequestBodyT
  >(
    httpClient.createPost<UserRequestBodyT, LoginResponseTypeT>(
      `${API_BASE_URL}/registration`
    ),
    {
      onSuccess: (data) => {
        const { accessToken, refreshToken, user } = data;
        const lifetime = addHours(new Date(), 2);
        localStorage.setItem("token", accessToken);
        localStorage.setItem("token/lifetime", lifetime.toISOString());
        setToken(accessToken);
        navigate("/");
      },
      onError: (error: any) => {
        const msg = error?.message?.errors?.msg ?? "Unresolved Error";
        toast(msg);
      },
    }
  );
  const onSubmit = () => {};

  const onLoginClick = () => {
    const { login: username, password } = formData;
    processLogin({ username, password });
  };

  const onRegisterClick = () => {
    const { login: username, password } = formData;
    processRegister({ username, password });
  };

  return (
    <LoginBox>
      <StyledTitle>ВХОД ИЛИ РЕГИСТРАЦИЯ</StyledTitle>
      <StyledForm
        widgets={widgets}
        formData={formData}
        onChange={onChange}
        idPrefix={"login-form-prefix"}
        id={"login-form"}
        schema={loginSchema}
        uiSchema={loginUiSchema}
        validator={validator}
        onSubmit={onSubmit}
      />
      <Actions onLogin={onLoginClick} onRegister={onRegisterClick} />
      <ToastContainer />
    </LoginBox>
  );
};
