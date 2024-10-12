import React, {
  createRef,
  useCallback,
  useMemo,
  useRef,
  useState,
} from "react";
import { CategoriesT, CategoryT } from "./types";
import { CategoryCard } from "../../../category-card/category-card";
import { Layout, Layouts } from "react-grid-layout";

import {
  CategoriesWrapper,
  StyledResponsiveReactGridLayout,
  Title,
} from "./styled";
import { keys } from "ramda";

type CategoriesLayoutT = {
  xll: Layout[];
  xl: Layout[];
  m: Layout[];
  s: Layout[];
  xs: Layout[];
};

const cols = {
  xll: 5,
  xl: 4,
  m: 3,
  s: 2,
  xs: 1,
};

const breakpoints = { xll: 1300, xl: 1050, m: 800, s: 550, xs: 300 };

const gridConfig = {
  rowHeight: 176,
  breakpoints,
  cols,
  maxRows: 10,
};

const generateLayouts = (data: CategoryT[], width = 0, columnCount: number) => {
  return data.reduce<CategoriesLayoutT>(
    (acc, { id: i }, currentIndex) => {
      const viewPort = keys(acc);
      viewPort.forEach((key) =>
        acc[key].push({
          i,
          x: currentIndex % columnCount,
          y: currentIndex / columnCount,
          h: 1,
          w: 1,
        })
      );
      return acc;
    },
    { xll: [], xl: [], m: [], s: [], xs: [] }
  );
};

export const Categories = ({ categoriesList }: CategoriesT) => {
  const [width, setWidth] = useState<number>(outerWidth);

  const onWidthChange = useCallback(
    (containerWidth: number) => setWidth(containerWidth),
    []
  );

  const layouts = useMemo<Layouts>(
    () =>
      generateLayouts(categoriesList, width, Math.floor((width - 50) / 250)),
    [generateLayouts, categoriesList, width]
  );

  const ref = createRef();

  return (
    <CategoriesWrapper>
      <Title>Категории:</Title>
      <StyledResponsiveReactGridLayout
        onWidthChange={onWidthChange}
        layouts={layouts}
        isDraggable={false}
        {...gridConfig}
      >
        {categoriesList.map(({ id, title, imageUrl }) => (
          <CategoryCard
            ref={ref}
            id={id}
            key={id}
            title={title}
            imageUrl={imageUrl}
          />
        ))}
      </StyledResponsiveReactGridLayout>
    </CategoriesWrapper>
  );
};
