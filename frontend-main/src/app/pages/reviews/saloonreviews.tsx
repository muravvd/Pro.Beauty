import React from "react";
import { HeaderWrap, MastersHeader } from "../masters/styled";
import { RxCross2 } from "react-icons/rx";
import {
  CrossWrap,
  DivisionColumn,
  RatingWrap,
  ReviewCard,
  ReviewCardText,
  ReviewPercentageLine,
  ReviewPercentageLineWrap,
  ReviewsConditionalWrapper,
  ReviewsPageWrapper,
  ReviewsWrap,
  StarsLine,
  StyledList,
  WhiteLine,
} from "./styled";
import {
  PassMock,
  RatingProps,
  ReviewLineInfo,
  ReviewT,
  RStar,
  Works,
} from "../saloon-page/interfaces";
import { IoStarSharp } from "react-icons/io5";
import { RecommendedSaloonT } from "../components/recomended/recommended-saloon";
import { SaloonReviewsMock } from "../saloon-page/mock";
import { ru } from "date-fns/locale";
import { useNavigate } from "react-router";

export function Header({ title }: Works) {
  const navigate = useNavigate();

  function handleBackClick() {
    navigate(-1);
  }

  return (
    <HeaderWrap>
      <CrossWrap>
        <RxCross2 onClick={handleBackClick} />
      </CrossWrap>
      <div />
      <MastersHeader>{title}</MastersHeader>
      <div />
    </HeaderWrap>
  );
}

/*function GetGradeAmount({ reviewList }: PassMock, grade: number) {
  let amount = 0;
  reviewList.forEach((element) => (element.rating == grade ? amount++ : ""));
  return amount;
}*/ //todo ??? reviewList не прокидывается из ReviewLines, убрать подсчет из reviewLines и сделать нормальный вызов для подсчета

function ReviewLines({ reviewList }: PassMock) {
  let grade1 = 0,
    grade2 = 0,
    grade3 = 0,
    grade4 = 0,
    grade5 = 0;
  reviewList.forEach((element) => {
    element.rating == 1
      ? grade1++
      : element.rating == 2
      ? grade2++
      : element.rating == 3
      ? grade3++
      : element.rating == 4
      ? grade4++
      : element.rating == 5
      ? grade5++
      : "";
  });
  return (
    <div>
      <ReviewsLine
        grade={5}
        thisGradeReviews={grade5}
        totalReviews={reviewList.length}
      />
      <ReviewsLine
        grade={4}
        thisGradeReviews={grade4}
        totalReviews={reviewList.length}
      />
      <ReviewsLine
        grade={3}
        thisGradeReviews={grade3}
        totalReviews={reviewList.length}
      />
      <ReviewsLine
        grade={2}
        thisGradeReviews={grade2}
        totalReviews={reviewList.length}
      />
      <ReviewsLine
        grade={1}
        thisGradeReviews={grade1}
        totalReviews={reviewList.length}
      />
    </div>
  );
}

function ReviewsInfoLine({ reviewsAmount, currentRating }: RatingProps) {
  return (
    <RatingWrap>
      <IoStarSharp color="#FFD53E" />
      {currentRating}
      <div />
      <ReviewsWrap>{reviewsAmount} отзывов</ReviewsWrap>
    </RatingWrap>
  );
}

function ReviewsLine({
  grade,
  thisGradeReviews,
  totalReviews,
}: ReviewLineInfo) {
  let GradeLineLength = parseFloat(
    (thisGradeReviews / totalReviews).toFixed(2)
  );
  GradeLineLength < 0.1 ? (GradeLineLength = 0) : "";
  //alert(GradeLineLength);
  return (
    <ReviewPercentageLineWrap>
      {grade}
      <WhiteLine>
        <ReviewPercentageLine $flex={GradeLineLength} />
      </WhiteLine>
      {thisGradeReviews}
    </ReviewPercentageLineWrap>
  );
} //todo прикрутить getSizeBy для GradeLineLength

const ReviewStars = ({ rating }: RStar) => {
  return (
    <>
      {Array(rating)
        .fill(null)
        .map((_, key) => (
          <IoStarSharp color="#FFD53E" key={key} />
        ))}
    </>
  ); //todo key тут только из-за ошибки
};

const ReviewsList = ({ title = "" }: RecommendedSaloonT) => {
  return (
    <StyledList
      direction="column"
      title={title}
      items={SaloonReviewsMock.map(
        ({ id, reviewText, rating, author, reviewDate }) => (
          <ReviewCard key={id}>
            <StarsLine>
              <ReviewStars rating={rating} />
            </StarsLine>
            {reviewText}
            <ReviewCardText>
              {author},{" "}
              {Intl.DateTimeFormat("ru", {
                year: "numeric",
                month: "long",
                day: "numeric",
              }).format(reviewDate)}
            </ReviewCardText>
          </ReviewCard>
        )
      )}
    />
  );
};

function GetRating(reviewList: ReviewT[]) {
  const overall = reviewList.length;
  let curRating = 0;
  reviewList.forEach((element) => (curRating += element.rating));
  return parseFloat((curRating / overall).toFixed(2));
}

function Statistics() {
  return (
    <DivisionColumn>
      <ReviewsInfoLine
        reviewsAmount={SaloonReviewsMock.length}
        currentRating={GetRating(SaloonReviewsMock)}
      />
      <ReviewLines reviewList={SaloonReviewsMock} />
    </DivisionColumn>
  );
}

export function SaloonReviews() {
  return (
    <ReviewsPageWrapper>
      <Header title={"Отзывы"} />
      <ReviewsConditionalWrapper>
        <Statistics />
        <ReviewsList />
      </ReviewsConditionalWrapper>
    </ReviewsPageWrapper>
  );
}

//todo отзывы со страниц салона и мастера ведут в одно и то же место, разбить
//todo выровнять страницу
