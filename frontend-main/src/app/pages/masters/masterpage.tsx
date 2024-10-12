import React from "react";
import {
  LazyWrap2,
  MakeAppointment,
  MasterDetailsWrap,
  MasterPageNameWrap,
  MasterPic,
  MasterWorks,
  QuitMargin,
  WorkPic,
} from "./styled";
import {
  MasterProps,
  PicProp,
  RatingProps,
  Works,
} from "../saloon-page/interfaces";
import {
  AboutTitleWrapper,
  PageWrapper,
  TheCircle,
} from "../saloon-page/styled";
import { RxCross1 } from "react-icons/rx";
import { useNavigate } from "react-router";
import { List } from "../../../ui-kit/components/list/list";
import { WorksListMock, MasterMock } from "../saloon-page/mock";
import styled from "styled-components";
import { RatingInfo } from "../saloon-page/rating-info/rating-info";
import { Description } from "../saloon-page/description/description";

function MasterDetails({ currentRating, reviewsAmount }: RatingProps) {
  return (
    <MasterDetailsWrap>
      <RatingInfo currentRating={currentRating} reviewsAmount={reviewsAmount} />
    </MasterDetailsWrap>
  );
}

function WorkPics({ imageUrl }: PicProp) {
  return (
    <div>
      <WorkPic imageUrl={imageUrl} />
    </div>
  );
}

const WorksList = ({ title = "" }: Works) => {
  return (
    <List
      direction="row"
      title={title}
      items={WorksListMock.map(({ imageUrl, id, ...saloonProps }) => (
        <WorkPics imageUrl={imageUrl} key={id} />
      ))}
    />
  );
};

export const RxCross1WithMargin = styled(RxCross1)`
  margin: 10px;
`;

function MasterPicture({ imageUrl }: PicProp) {
  const navigate = useNavigate();

  function onQuit() {
    navigate("/masters");
  }

  return (
    <MasterPic imageUrl={imageUrl}>
      <QuitMargin>
        <TheCircle onClick={onQuit}>
          <RxCross1 />
        </TheCircle>
      </QuitMargin>
    </MasterPic>
  );
}

export function MasterPage() {
  function makeAppointment() {
    alert("Запись");
  }

  return (
    <PageWrapper>
      <MasterPicture imageUrl={MasterMock.imageUrl} />
      <MasterPageNameWrap>{MasterMock.title}</MasterPageNameWrap>
      <AboutTitleWrapper>О мастере</AboutTitleWrapper>
      <Description description={MasterMock.description} />
      <MasterDetails
        currentRating={MasterMock.currentRating}
        reviewsAmount={MasterMock.reviewsAmount}
      />
      <LazyWrap2>Работы</LazyWrap2>
      <MasterWorks>
        <WorksList title={""} />
      </MasterWorks>
      <MakeAppointment onClick={makeAppointment}>Записаться</MakeAppointment>
    </PageWrapper>
  );
}

//todo ширина картинки в ширину мобильного экрана при вертикальной ориентации
//todo не хватает места на странице, разберись из-за какого враппера
//todo лишние вызовы?

//todo !!! прокид мастера вместо чтения импортированного мока
