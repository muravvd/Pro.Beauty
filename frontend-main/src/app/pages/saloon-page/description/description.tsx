import { DescriptionTextT } from "../interfaces";
import React, { useState } from "react";
import { DescriptionText, DescriptionWrapper, HideTheText } from "./styled";

export function Description(props: DescriptionTextT) {
  const { description } = props;
  const [state, setState] = useState(true);

  function hide() {
    setState(!state);
  }

  return (
    <DescriptionWrapper>
      {state ? (
        <DescriptionText>{description.substring(0, 151)}...</DescriptionText>
      ) : (
        <DescriptionText>{description}</DescriptionText>
      )}
      {state ? (
        <HideTheText onClick={hide}>Читать дальше</HideTheText>
      ) : (
        <HideTheText onClick={hide}>Свернуть</HideTheText>
      )}
    </DescriptionWrapper>
  );
}