import styled from "styled-components";
import { getColor, getSizeBy } from "../../../themes/utils/utils";
import { List } from "../../../ui-kit/components/list/list";

export const CrossWrap = styled.div`
  margin-top: ${getSizeBy(1.5)};
  color: ${getColor("lightgray")};
  cursor: pointer;
`;

export const ReviewsWrap = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  width: ${getSizeBy(25)};
  align-content: flex-end;
`;

export const RatingWrap = styled.div`
  color: ${getColor("lightgray")};
  width: ${getSizeBy(100)};
  display: grid;
  grid-template-columns: 2fr 4fr 20fr 13fr;
  margin-top: ${getSizeBy(5)};
  margin-bottom: ${getSizeBy(5)};
`;

export const WhiteLine = styled.div`
  display: flex;
  width: ${getSizeBy(70)};
  background-color: ${getColor("primary")};
  border-radius: ${getSizeBy(2)};
`;

export const ReviewPercentageLine = styled.div<{ $flex: number }>`
  flex: ${({ $flex }) => $flex};
  background-color: ${getColor("danger")};
  border-radius: ${getSizeBy(2)};
  //todo при количестве отзывов с оценкой меньше 10 от общего количества съезжают границы. Пока что в вызове костыль ставит на 0%
`;

export const ReviewPercentageLineWrap = styled.div`
  width: ${getSizeBy(100)};
  color: ${getColor("lightgray")};
  display: grid;
  grid-template-columns: 1fr 10fr 2fr;
  margin-bottom: ${getSizeBy(5)};
`;

export const ReviewCard = styled.div`
  max-width: ${getSizeBy(90)};
  background-color: ${getColor("onBackground")};
  //height: fit-content;
  flex-direction: column;
  margin-right: ${getSizeBy(10)}; //todo убрать костыль, выровнять врапперами
  border-radius: ${getSizeBy(2)};
  border: ${getSizeBy(2)} solid ${getColor("onBackground")};
  margin-top: ${getSizeBy(3)};
  align-items: flex-start;
`;

export const StarsLine = styled.div`
  flex-direction: row;
  //scale: 0.75;
  width: max-content;
`;

export const ReviewCardText = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: ${getSizeBy(3)};
`;

export const DivisionColumn = styled.div`
  display: flex;
  flex-direction: column;
`;

export const ReviewsPageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  align-items: center;
`;

export const ReviewsConditionalWrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  align-items: center;

  @media screen and (min-width: 900px) {
    flex-direction: row;
  }
`;

export const StyledList = styled(List)`
  @media screen and (min-width: 900px) {
    height: 500px;
  }
`;
