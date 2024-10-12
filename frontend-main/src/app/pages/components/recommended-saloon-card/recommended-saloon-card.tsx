import React from "react";
import { AiFillHeart, AiFillStar, AiOutlineHeart } from "react-icons/ai";
import {
  RatingWrapper,
  SaloonWrapper,
  SaloonImg,
  SaloonInfoPanel,
  StyledText,
  FavouriteLabel,
  CurrentRating,
  ReviewsAmount,
  InfoLabel,
  AddressWrapper,
  FavouriteIconWrapper,
  SaloonBck,
} from "./styled";
import { InformationProps, SaloonCartProps } from "./interfaces";
import { Rating } from "../../../saloon-card/saloon-card";
import { useNavigate } from "react-router";

const FavouriteIcon = ({ isFavourite }: { isFavourite?: boolean }) => (
  <FavouriteIconWrapper>
    {isFavourite ? <AiFillHeart color="#F42F4C" /> : <AiOutlineHeart />}
  </FavouriteIconWrapper>
);

export function Information(props: InformationProps) {
  const { title, address, isFavourite } = props;
  return (
    <SaloonInfoPanel>
      <FavouriteIcon isFavourite={isFavourite} />
      <StyledText>
        <InfoLabel>{title}</InfoLabel>
        <AddressWrapper>{address}</AddressWrapper>
      </StyledText>
    </SaloonInfoPanel>
  );
}

export function RecommendedSaloonCard({
  id,
  title,
  address,
  isFavourite,
  currentRating,
  reviewsAmount,
  imageUrl,
}: SaloonCartProps) {
  const navigate = useNavigate();

  function transferToSaloon() {
    navigate(`/saloon/${id}`);
  }

  return (
    <SaloonWrapper onClick={transferToSaloon}>
      <SaloonBck imageUrl={imageUrl}>
        <Rating currentRating={currentRating} reviewsAmount={reviewsAmount} />
        <Information
          title={title}
          address={address}
          isFavourite={isFavourite}
        />
      </SaloonBck>
    </SaloonWrapper>
  );
}
