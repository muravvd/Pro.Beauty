import { RJSFSchema, UiSchema } from "@rjsf/utils";

export const loginSchema: RJSFSchema = {
  type: "object",
  required: ["login", "password"],
  properties: {
    login: {
      type: "string",
    },
    password: {
      type: "string",
    },
  },
};

export const loginUiSchema: UiSchema = {
  "ui:submitButtonOptions": {
    norender: true,
  },
  login: {
    "ui:widget": "FormInputWidget",
    "ui:placeholder": "Электронная почта",
  },
  password: {
    "ui:widget": "FormInputWidget",
    "ui:placeholder": "Пароль",
    "ui:type": "password",
  },
};
