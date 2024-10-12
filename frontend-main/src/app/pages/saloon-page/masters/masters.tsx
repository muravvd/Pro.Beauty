import { useNavigate } from "react-router";
import { BsChevronRight } from "react-icons/bs";
import React from "react";
import { MastersTitle, MastersWrapper } from "./styled";
import { ArrowWrapper } from "../styled";

export function ToMasters() {
  const navigate = useNavigate();

  function handleMastersClick() {
    navigate("/masters");
  }

  return (
    <MastersWrapper>
      <MastersTitle onClick={handleMastersClick}>МАСТЕРА</MastersTitle>
      <ArrowWrapper>
        <BsChevronRight onClick={handleMastersClick} />
      </ArrowWrapper>
    </MastersWrapper>
  );
}
