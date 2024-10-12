import React from "react";
import { RecommendedSaloonCard } from "../recommended-saloon-card/recommended-saloon-card";
import { SaloonCartListMock, SaloonCartT } from "./mock";
import { List } from "../../../../ui-kit/components/list/list";

export type RecommendedSaloonT = {
  saloons?: SaloonCartT[];
  title?: string;
};

const DEFAULT_TITLE = "Рекомендуемые салоны:";

export const RecommendedSaloon = ({
  saloons = SaloonCartListMock,
  title = DEFAULT_TITLE,
}: RecommendedSaloonT) => {
  return (
    <List
      direction="row"
      title={title}
      items={saloons.map(({ id, ...saloonProps }) => (
        <RecommendedSaloonCard id={id} key={id} {...saloonProps} />
      ))}
    />
  );
};
