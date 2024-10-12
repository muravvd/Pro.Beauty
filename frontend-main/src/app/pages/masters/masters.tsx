import React from "react";
import {
  HeaderWrap,
  LineWrap,
  MasterLogo,
  MastersHeader,
  MastersWrapper,
  NameWrap,
} from "./styled";
import { MasterLineT } from "../saloon-page/interfaces";
import { BsChevronLeft, BsChevronRight } from "react-icons/bs";
import { ArrowWrapper } from "../saloon-page/styled";
import { useNavigate } from "react-router";
import { RecommendedSaloonT } from "../components/recomended/recommended-saloon";
import { List } from "../../../ui-kit/components/list/list";
import { MasterCardsListMock } from "../saloon-page/mock";

function Header() {
  const navigate = useNavigate();

  function handleBackClick() {
    //todo возврат к салону
    navigate("/saloon");
  }

  return (
    <HeaderWrap>
      <ArrowWrapper>
        <BsChevronLeft onClick={handleBackClick} />
      </ArrowWrapper>
      <div />
      <MastersHeader>Мастера</MastersHeader>
      <div />
    </HeaderWrap>
  );
}

export function MasterLine({ imageUrl, title }: MasterLineT) {
  const navigate = useNavigate();

  function handleMasterClick() {
    //todo переход к мастеру
    navigate("/master-details");
  }

  return (
    <LineWrap>
      <MasterLogo imageUrl={imageUrl} onClick={handleMasterClick} />
      <NameWrap onClick={handleMasterClick}>{title}</NameWrap>
      <div />
      <ArrowWrapper onClick={handleMasterClick}>
        <BsChevronRight />
      </ArrowWrapper>
    </LineWrap>
  );
}

const MastersList = ({ title = "" }: RecommendedSaloonT) => {
  return (
    <List
      direction="column"
      title={title}
      items={MasterCardsListMock.map(
        ({ imageUrl, name, id, ...saloonProps }) => (
          <MasterLine imageUrl={imageUrl} title={name} key={id} />
        )
      )}
    />
  );
};

export function Masters() {
  return (
    <MastersWrapper>
      <Header />
      <MastersList />
    </MastersWrapper>
  );
}

//todo перенести пикчи из frontend\src\app\pages\components или забить (с добавлением чтения из базы удалить их оттуда)
//todo убрать скроллбар списка мастеров
//todo разделить переход к списку отзывов от компонента из салона, либо добавить конкретный прокид
//todo визуальный баг списка при мобильном просмотре
//todo прокид имени Masters->MastersList->MasterLine (сейчас из MasterCardsListMock)
