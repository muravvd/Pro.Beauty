import { RatingProps, ReviewProp } from "../interfaces";
import { ArrowWrapper, RatingWrap, ReviewWrapper } from "../styled";
import { AiFillStar } from "react-icons/ai";
import React from "react";
import {
  LeftAlign,
  RatingWrapper,
  ReviewCountWrapper,
  RightAlign,
} from "./styled";
import { useNavigate } from "react-router";
import { BsChevronRight } from "react-icons/bs";

export function Reviews({ reviewsAmount }: ReviewProp) {
  const navigate = useNavigate();
  function handleSaloonReviewsClick() {
    navigate("/reviews");
  }
  return (
    <ReviewWrapper onClick={handleSaloonReviewsClick}>
      <ReviewCountWrapper>{reviewsAmount} отзывов</ReviewCountWrapper>
      <ArrowWrapper>
        <BsChevronRight />
      </ArrowWrapper>
    </ReviewWrapper>
  );
}

export function RatingInfo({ currentRating, reviewsAmount }: RatingProps) {
  return (
    <RatingWrap>
      <LeftAlign>
        <AiFillStar color="#FFD53E" />
        <RatingWrapper>{currentRating}</RatingWrapper>
      </LeftAlign>
      <RightAlign>
        <Reviews reviewsAmount={reviewsAmount} />
      </RightAlign>
    </RatingWrap>
  );
}
