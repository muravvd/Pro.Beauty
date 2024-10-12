import { ErrorWrapper } from "./styles";
import React from "react";
import { useNavigate } from "react-router";

export const NotFound = () => {
  const navigate = useNavigate();

  const onClick = () => navigate("/");

  return (
    <ErrorWrapper onClick={onClick}>
      Sorry, page not found. Click here to return to main page
    </ErrorWrapper>
  );
};
