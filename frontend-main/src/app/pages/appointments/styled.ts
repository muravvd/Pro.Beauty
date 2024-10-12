import styled from "styled-components";
import { getColor, getSizeBy } from "../../../themes/utils/utils";
import { List } from "../../../ui-kit/components/list/list";
import { PicProp } from "../saloon-page/interfaces";

export const StyledList = styled(List)`
  @media screen and (min-width: 900px) {
    height: 460px;
  }
`;

export const AppointmentsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const AHeader = styled.div`
  width: ${getSizeBy(80)};
  height: ${getSizeBy(6.5)};
  background-color: ${getColor("onBackgroundDarker")};
  display: flex;
  flex-direction: row;
  border-radius: ${getSizeBy(2)};
  margin-top: ${getSizeBy(3)};
  align-items: center;
`;

export const SelectedHeader = styled.div`
  width: ${getSizeBy(40)};
  height: ${getSizeBy(5.25)};
  background-color: ${getColor("onBackground")};
  border-radius: ${getSizeBy(1.5)};
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-left: ${getSizeBy(0.5)};
  margin-right: ${getSizeBy(0.5)};
`;

export const UnselectedHeader = styled.div`
  width: ${getSizeBy(40)};
  height: ${getSizeBy(5.25)};
  background-color: ${getColor("onBackgroundDarker")};
  border-radius: ${getSizeBy(1.5)};
  cursor: pointer;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-left: ${getSizeBy(0.5)};
  margin-right: ${getSizeBy(0.5)};
`;

export const AppointmentButton = styled.div`
  display: flex;
  flex-direction: column;
  width: ${getSizeBy(32.5)};
  height: ${getSizeBy(5)};
  background-color: ${getColor("danger")};
  border-radius: ${getSizeBy(1)};
  align-items: center;
  cursor: pointer;
  margin-top: ${getSizeBy(2.5)};
`;

export const AppointmentCard = styled.div`
  background-color: ${getColor("onBackgroundDarker")};
  width: ${getSizeBy(93.75)};
  height: ${getSizeBy(52.5)};
  border-radius: ${getSizeBy(3)};
  margin-top: ${getSizeBy(4)};
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const ArchiveCard = styled.div`
  background-color: ${getColor("onBackgroundDarker")};
  width: ${getSizeBy(93.75)};
  height: ${getSizeBy(38.5)};
  border-radius: ${getSizeBy(3)};
  margin-top: ${getSizeBy(4)};
  display: grid;
  grid-template-columns: 2fr 5fr;
  cursor: pointer;
`;

export const CardAlignment = styled.div`
  display: flex;
  flex-direction: column;
`;

export const SaloonInfo = styled.div`
  display: grid;
  grid-template-columns: 2fr 6fr;
  margin-top: ${getSizeBy(3.75)};
  margin-left: ${getSizeBy(6.25)};
  width: ${getSizeBy(93.75)};
`;

export const AppointmentInfo = styled.div`
  display: grid;
  grid-template-columns: 3fr 2fr 6fr;
  margin-top: ${getSizeBy(3.75)};
  margin-left: ${getSizeBy(6.25)};
  width: ${getSizeBy(93.75)};
`;

export const VLine = styled.div`
  width: ${getSizeBy(0.25)};
  height: ${getSizeBy(15)};
  background-color: ${getColor("lightgray")};
`;

export const TextWrap = styled.div`
  color: ${getColor("primary")};
`;

export const AppointmentLogo = styled.div`
  background-image: url(${(props: PicProp) => props.imageUrl});
  width: ${getSizeBy(20)};
  height: ${getSizeBy(20)};
  border-radius: ${getSizeBy(20)};
  margin-top: ${getSizeBy(3.75)};
  margin-left: ${getSizeBy(3)};
`;

export const InfoWrap = styled.div`
  display: flex;
  flex-direction: column;
  align-items: baseline;
  padding: ${getSizeBy(3)};
  row-gap: ${getSizeBy(3)};
  margin-top: ${getSizeBy(3.75)};
`;
