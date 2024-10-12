import { FavouriteInfoWrap, FavouriteLogo } from "../favourite/styled";
import React from "react";
import {
  AHeader,
  AppointmentButton,
  AppointmentCard,
  AppointmentInfo,
  AppointmentLogo,
  AppointmentsWrapper,
  ArchiveCard,
  CardAlignment,
  InfoWrap,
  SaloonInfo,
  SelectedHeader,
  StyledList,
  TextWrap,
  UnselectedHeader,
  VLine,
} from "./styled";
import { RecommendedSaloonT } from "../components/recomended/recommended-saloon";
import { useNavigate } from "react-router";
import { AppointmentsListMock } from "./mock";
import { IoPricetagOutline } from "react-icons/io5";
import { isTokenValid } from "../../utils";
import { UnauthorizedPage } from "../components/UnauthorizedAccess/access";

const AppointmentsList = ({ title = "" }: RecommendedSaloonT) => {
  return (
    <StyledList
      direction="column"
      title={title}
      items={AppointmentsListMock.map(
        ({
          id,
          title,
          imageUrl,
          address,
          service,
          date,
          time,
          duration,
          price,
        }) => (
          <AppointmentCard key={id}>
            <SaloonInfo>
              <FavouriteLogo imageUrl={imageUrl} />
              <FavouriteInfoWrap>
                <TextWrap>{title}</TextWrap>
                <TextWrap>Адрес: {address}</TextWrap>
              </FavouriteInfoWrap>
            </SaloonInfo>
            <AppointmentInfo>
              <CardAlignment>
                <TextWrap>{date}</TextWrap>
                <TextWrap>{time}</TextWrap>
                <TextWrap>{duration}</TextWrap>
              </CardAlignment>
              <VLine />
              <CardAlignment>
                <TextWrap>Услуга: {service}</TextWrap>
                <TextWrap>
                  <IoPricetagOutline style={{ marginTop: 5, marginRight: 5 }} />
                  {price}
                </TextWrap>
              </CardAlignment>
            </AppointmentInfo>
            <AppointmentButton>Отменить запись</AppointmentButton>
          </AppointmentCard>
        )
      )}
    />
  );
};
//todo вместо <div> обертку для текста

const ArchiveList = ({ title = "" }: RecommendedSaloonT) => {
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
      items={AppointmentsListMock.map(
        ({ id, title, imageUrl, address, service, price }) => (
          <ArchiveCard key={id} onClick={transferToSaloon}>
            <AppointmentLogo imageUrl={imageUrl} />
            <InfoWrap>
              <TextWrap>{title}</TextWrap>
              <TextWrap>Адрес: {address}</TextWrap>
              <TextWrap>Услуга: {service}</TextWrap>
              <TextWrap>
                <IoPricetagOutline style={{ marginRight: 5 }} />
                {price}
              </TextWrap>
            </InfoWrap>
          </ArchiveCard>
        )
      )}
    />
  );
};

const AppointmentsHeader = () => {
  const navigate = useNavigate();

  function switchPage() {
    navigate(`/appointments/archive`);
  }

  return (
    <AHeader>
      <SelectedHeader>Предстоящие</SelectedHeader>
      <UnselectedHeader onClick={switchPage}>Архив</UnselectedHeader>
    </AHeader>
  );
};

const ArchiveHeader = () => {
  const navigate = useNavigate();

  function switchPage() {
    navigate(`/appointments`);
  }

  return (
    <AHeader>
      <UnselectedHeader onClick={switchPage}>Предстоящие</UnselectedHeader>
      <SelectedHeader>Архив</SelectedHeader>
    </AHeader>
  );
};

export const AppointmentsPage = () => {
  if (!isTokenValid()) {
    return <UnauthorizedPage />;
  }
  return (
    <AppointmentsWrapper>
      <AppointmentsHeader />
      <AppointmentsList />
    </AppointmentsWrapper>
  );
};

export const ArchivePage = () => {
  return (
    <AppointmentsWrapper>
      <ArchiveHeader />
      <ArchiveList />
    </AppointmentsWrapper>
  );
};
