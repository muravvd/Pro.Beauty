import React from "react";
import { AiFillHeart, AiFillStar, AiOutlineHeart } from "react-icons/ai";
import { InformationProps, RatingProps, SaloonPanelProps } from "./interfaces";
import {
  RatingPanel,
  SaloonBck,
  SaloonInfoPanel,
  StarAlignment,
  StyledText,
  TextAlignment,
} from "./styled";

export function transferToSaloon() {
  //todo replace(страница салона)
  alert("Saloon clicked");
}

export function Rating(props: RatingProps) {
  const { currentRating, reviewsAmount } = props;

  return (
    <RatingPanel>
      <StarAlignment>
        <AiFillStar color="#FFD53E" />
      </StarAlignment>
      <TextAlignment>
        <b> {currentRating}</b> ({reviewsAmount})
      </TextAlignment>
    </RatingPanel>
  );
}

export function Information(props: InformationProps) {
  const { title, address, isFavourite } = props;

  //todo переключение isFavourite в БД при нажатии (на странице категории или на странице салона?)
  return (
    <SaloonInfoPanel>
      {isFavourite ? <AiFillHeart color="#F42F4C" /> : <AiOutlineHeart />}
      <StyledText>
        <div>{title}</div>
        <div>{address}</div>
      </StyledText>
    </SaloonInfoPanel>
  );
}

export function SaloonCard(props: SaloonPanelProps) {
  const {
    title,
    address,
    isFavourite,
    currentRating,
    reviewsAmount,
    imageUrl,
  } = props;
  return (
    <SaloonBck imageUrl={imageUrl} onClick={transferToSaloon}>
      <Rating currentRating={currentRating} reviewsAmount={reviewsAmount} />
      <Information title={title} address={address} isFavourite={isFavourite} />
    </SaloonBck>
  );
}
