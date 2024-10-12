import React from "react";
import { LoginLinkText, TextLineWrap, UnauthorizedWrapper } from "./styled";
import { useNavigate } from "react-router";

export const UnauthorizedPage = () => {
  const navigate = useNavigate();

  function toLogin() {
    navigate(`/login`);
  }

  return (
    <UnauthorizedWrapper>
      <TextLineWrap>
        Для доступа к этой странице пройдите
        <LoginLinkText onClick={toLogin}>авторизацию</LoginLinkText>
      </TextLineWrap>
    </UnauthorizedWrapper>
  );
};
