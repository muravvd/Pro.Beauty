import React from "react";
import {
  FavouriteWrapper,
  FavouriteSaloonCard,
  FavouriteLogo,
  StyledList,
  Heart,
  CardAlignment,
  IconsWrap,
  FavouriteInfoWrap,
  TextWrap,
} from "./styled";
import { Header } from "../reviews/saloonreviews";
import { RecommendedSaloonT } from "../components/recomended/recommended-saloon";
import { FavouritesListMock } from "./mock";
import { AiFillHeart } from "react-icons/ai";
import { FaMapLocationDot } from "react-icons/fa6";
import { useNavigate } from "react-router";
import { isTokenValid } from "../../utils";
import { UnauthorizedPage } from "../components/UnauthorizedAccess/access";

const FavouritesList = ({ title = "" }: RecommendedSaloonT) => {
  const navigate = useNavigate();

  function transferToSaloon() {
    //navigate(`/saloon/${ids}`);
    alert("Saloon");
  }
  //todo transfer

  return (
    <StyledList
      direction="column"
      title={title}
      items={FavouritesListMock.map(({ id, title, imageUrl, address }) => (
        <FavouriteSaloonCard key={id} onClick={transferToSaloon}>
          <CardAlignment>
            <Heart>
              <AiFillHeart color="#F42F4C" />
            </Heart>
            <FavouriteLogo imageUrl={imageUrl} />
            <FavouriteInfoWrap>
              <TextWrap>{title}</TextWrap>
              <TextWrap>Адрес: {address}</TextWrap>
            </FavouriteInfoWrap>
            <IconsWrap>
              <FaMapLocationDot color="#FFFFFF" />
            </IconsWrap>
          </CardAlignment>
        </FavouriteSaloonCard>
      ))}
    />
  );
};

//todo нахуя на карточке иконки календаря и локации?

export const FavouritePage = () => {
  if (!isTokenValid()) {
    return <UnauthorizedPage />;
  }
  return (
    <FavouriteWrapper>
      <Header title={"Избранное"} />
      <FavouritesList />
    </FavouriteWrapper>
  );
};
