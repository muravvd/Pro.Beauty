import React from "react";
import { useNavigate } from "react-router";
import { SimpleButton, ExitAlign } from "./styled";

export function Unauthorize() {
  const navigate = useNavigate();

  function handleClick() {
    localStorage.removeItem("token");
    localStorage.removeItem("token/lifetime");
    navigate("/login");
  }

  return (
    <ExitAlign>
      <SimpleButton onClick={handleClick}>Unauthorize</SimpleButton>
    </ExitAlign>
  );
}
