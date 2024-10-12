import React from "react";
import { useNavigate } from "react-router";
import { Header } from "../reviews/saloonreviews";
import {
  Details,
  GlobalText,
  Photo,
  PhotoLine,
  ProfileWrapper,
  TextWall,
  DetailsTextWrap,
  IconWrap,
  TextWrap,
} from "./styled";
// @ts-ignore
import pfp from "../../../app/pages/components/user.png";
import { BsBriefcase, BsMoonStars, BsPencil } from "react-icons/bs";
import {
  IoNavigateCircleOutline,
  IoNotificationsOutline,
} from "react-icons/io5";
import { HiOutlineKey } from "react-icons/hi2";
import { BiLogOutCircle } from "react-icons/bi";
import { RiQuestionnaireLine } from "react-icons/ri";
import { isTokenValid } from "../../utils";
import { UnauthorizedPage } from "../components/UnauthorizedAccess/access";

export function ProfilePage() {
  const navigate = useNavigate();

  function Unauthorize() {
    localStorage.removeItem("token");
    localStorage.removeItem("token/lifetime");
    navigate("/login");
  }

  if (!isTokenValid()) {
    return <UnauthorizedPage />;
  }

  return (
    <ProfileWrapper>
      <Header title={"Профиль"} />
      <PhotoLine>
        <Photo imageUrl={pfp} />
        <Details>
          <DetailsTextWrap>Имя</DetailsTextWrap>
          <DetailsTextWrap>Телефон</DetailsTextWrap>
        </Details>
        <IconWrap>
          <BsPencil />
        </IconWrap>
      </PhotoLine>
      <TextWall>
        <GlobalText>НАСТРОЙКИ</GlobalText>
        <TextWrap>
          <IoNavigateCircleOutline />
          Город
        </TextWrap>
        <TextWrap>
          <BsMoonStars />
          Внешний вид
        </TextWrap>
        <TextWrap>
          <IoNotificationsOutline />
          Push-уведомления
        </TextWrap>
        <TextWrap>
          <HiOutlineKey />
          Сменить пароль
        </TextWrap>
        <GlobalText>ДОПОЛНИТЕЛЬНО</GlobalText>
        <TextWrap>
          <RiQuestionnaireLine />
          Служба поддержки
        </TextWrap>
        <TextWrap>
          <BsBriefcase />
          Стать партнером
        </TextWrap>
        <TextWrap onClick={Unauthorize}>
          <BiLogOutCircle />
          Выйти
        </TextWrap>
      </TextWall>
    </ProfileWrapper>
  );
}
