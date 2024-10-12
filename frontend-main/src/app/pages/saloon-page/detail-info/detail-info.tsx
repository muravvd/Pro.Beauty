import { DetailsLineProps } from "../interfaces";
import {
  AddressWrapper,
  DetailsWrap,
  MetroStationWrapper,
  PhoneWrapper,
} from "./styled";
import { FiMapPin } from "react-icons/fi";
import { SiMoscowmetro } from "react-icons/si";
import { BsTelephone } from "react-icons/bs";
import React from "react";
import { RatingInfo } from "../rating-info/rating-info";

function handleTelephoneClick() {
  alert("Ring-a-ding-ding, baby");
}

export function DetailInfo({
  address,
  currentRating,
  reviewsAmount,
  phoneNumber,
}: DetailsLineProps) {
  return (
    <DetailsWrap>
      <AddressWrapper>
        <FiMapPin />
        {address}
      </AddressWrapper>
      <MetroStationWrapper>
        <SiMoscowmetro />
      </MetroStationWrapper>
      <RatingInfo currentRating={currentRating} reviewsAmount={reviewsAmount} />
      <PhoneWrapper>
        <BsTelephone
          color="#F42F4C"
          onClick={handleTelephoneClick}
          style={{ cursor: "pointer" }}
        />
        {phoneNumber}
      </PhoneWrapper>
    </DetailsWrap>
  );
}
