import React from "react";
import { RegistryWidgetsType, RJSFSchema, UiSchema } from "@rjsf/utils";
import Form, { IChangeEvent } from "@rjsf/core";
import validator from "@rjsf/validator-ajv8";
import { ImageUploader } from "../../ui-kit/components/image-uploader/image-uploader";
import { da } from "date-fns/locale";
import { useMutation } from "react-query";
import { useHttpClient } from "../../platform-utils/utils";
import { API_BASE_URL } from "../../index";

export const addCategorySchema: RJSFSchema = {
  title: "Новая категория",
  type: "object",
  properties: {
    title: {
      type: "string",
      title: "Новая категория",
    },
    imageUrl: {
      type: "string",
      title: "Изображение",
    },
  },
};

export const addCategoryUiSchema: UiSchema = {
  title: {},
  imageUrl: {
    "ui:widget": "ImageUploader",
  },
};

const widgets: RegistryWidgetsType = {
  ImageUploader: ImageUploader,
};

export const AddCategoryForm = () => {
  const { httpClient } = useHttpClient();

  const { mutate } = useMutation(
    httpClient.createPost(`${API_BASE_URL}/categories-create`),
    {
      onSuccess: (data) => {
        console.log("DAta --> ", data);
      },
      onError: (error) => {
        console.error(error);
      },
    }
  );

  const onSubmit = (data: IChangeEvent) => {
    const { title, imageUrl } = data.formData;
    mutate({ title, imageUrl });
  };

  return (
    <Form
      widgets={widgets}
      schema={addCategorySchema}
      uiSchema={addCategoryUiSchema}
      validator={validator}
      onSubmit={onSubmit}
    />
  );
};
