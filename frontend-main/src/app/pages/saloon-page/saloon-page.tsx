import React from "react";
import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";
import { RxCross1 } from "react-icons/rx";
import { IoShareOutline } from "react-icons/io5";
import { SaloonProps, PicProps } from "./interfaces";
import {
  PageWrapper,
  TheCircle,
  ButtonLine,
  SaloonBackground,
  AboutTitleWrapper,
} from "./styled";
import { useNavigate } from "react-router";
import { SaloonMock } from "./mock";
import { SaloonLogo } from "./logo/logo";
import { DetailInfo } from "./detail-info/detail-info";
import { Description } from "./description/description";
import { ToMasters } from "./masters/masters";

export function SaloonPic(props: PicProps) {
  const { imageUrl, isFavourite } = props;

  const navigate = useNavigate();

  function onQuit() {
    navigate("/");
  }

  return (
    <SaloonBackground imageUrl={imageUrl}>
      <ButtonLine>
        <TheCircle onClick={onQuit}>
          <RxCross1 />
        </TheCircle>
        <TheCircle onClick={handleFavouriteClick}>
          {isFavourite ? <AiFillHeart color="#F42F4C" /> : <AiOutlineHeart />}
        </TheCircle>
        <TheCircle onClick={handleShareClick}>
          <IoShareOutline />
        </TheCircle>
      </ButtonLine>
    </SaloonBackground>
  );
}

//todo отдельный wrapper для строки телефона, boolean наличия метро, прокид метро
function handleFavouriteClick() {
  //todo лайк
  alert("Like");
}

function handleShareClick() {
  //todo share
  alert("Share");
}

//todo перенести 'читать далее' в конец текста?
const SaloonPage = ({
  isFavourite,
  currentRating,
  reviewsAmount,
  phoneNumber,
  title,
  distance,
  imageUrl,
  description,
  logoUrl,
  address,
}: SaloonProps) => {
  return (
    <PageWrapper>
      <SaloonLogo logoUrl={logoUrl} title={title} distance={distance} />
      <DetailInfo
        address={address}
        currentRating={currentRating}
        reviewsAmount={reviewsAmount}
        phoneNumber={phoneNumber}
      />
      <AboutTitleWrapper>О салоне</AboutTitleWrapper>
      <Description description={description} />
      <ToMasters />
    </PageWrapper>
  );
};

export const Saloon = () => {
  return <SaloonPage {...SaloonMock} />;
};
