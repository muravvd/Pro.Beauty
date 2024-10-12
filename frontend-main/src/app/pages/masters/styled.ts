import styled from "styled-components";
import { getColor, getSizeBy } from "../../../themes/utils/utils";
import { PicProp } from "../saloon-page/interfaces";

export const MastersHeader = styled.div`
  display: flex;
  flex-direction: row;
  width: ${getSizeBy(30)};
  height: ${getSizeBy(7)};
  background-color: ${getColor("background")};
  border: solid ${getColor("danger")} ${getSizeBy(0.4)};
  border-radius: ${getSizeBy(2)};
  align-items: center;
  justify-content: center;
`;

export const HeaderWrap = styled.div`
  width: ${getSizeBy(100)};
  display: grid;
  grid-template-columns: 2fr 2fr 2fr 4fr;
`;

export const MasterLogo = styled.div`
  background-image: url(${(props: PicProp) => props.imageUrl});
  height: ${getSizeBy(12)};
  width: ${getSizeBy(12)};
  border-radius: ${getSizeBy(25)};
  cursor: pointer;
`;

export const LineWrap = styled.div`
  display: grid;
  grid-template-columns: 5fr 4fr 14fr 4fr;
  margin-bottom: ${getSizeBy(5)};
  justify-content: center;
  align-items: center;
`;

export const NameWrap = styled.div`
  color: ${getColor("primary")};
  cursor: pointer;
`;

export const MasterPageNameWrap = styled.div`
  color: ${getColor("primary")};
  font-size: ${getSizeBy(6)};
  font-family: monospace;
`;

export const MasterPic = styled.div`
  background-image: url(${(props: PicProp) => props.imageUrl});
  height: ${getSizeBy(58)};
  width: ${getSizeBy(93.75)};
  background-repeat: no-repeat;
  border-bottom: ${getSizeBy(3)} solid ${getColor("background")};
`;

export const MasterDetailsWrap = styled.div`
  margin-top: ${getSizeBy(6)};
  margin-bottom: ${getSizeBy(6)};
  width: ${getSizeBy(90)};
`;

export const QuitMargin = styled.div`
  margin-top: ${getSizeBy(4)};
  margin-left: ${getSizeBy(4)};
  opacity: 70%;
`;

export const MasterWorks = styled.div`
  //display: flex;
  //flex-direction: row;
  //margin-top: ${getSizeBy(2)};
  width: ${getSizeBy(105)};
`;

export const WorkPic = styled.div`
  background-image: url(${(props: PicProp) => props.imageUrl});
  width: ${getSizeBy(19.5)};
  height: ${getSizeBy(24)};
  margin-left: ${getSizeBy(1)};
  margin-right: ${getSizeBy(1)};
  //todo заменить margin на настойку row в MasterWorks
`;

export const MakeAppointment = styled.div`
  display: flex;
  background-color: ${getColor("danger")};
  color: ${getColor("primary")};
  width: ${getSizeBy(55)};
  height: ${getSizeBy(10)};
  border-radius: ${getSizeBy(2)};
  //margin-top: ${getSizeBy(15)};
  font-family: monospace;
  font-size: ${getSizeBy(5)};
  align-items: center;
  flex-flow: column;
  cursor: pointer;
  //todo выровнять нормально надпись
`;

export const LazyWrap2 = styled.div`
  width: ${getSizeBy(90)};
  font-size: ${getSizeBy(5)};
  color: white;
`;

export const MastersWrapper = styled.div``;
