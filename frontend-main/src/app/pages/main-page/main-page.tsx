import React, { useState } from "react";
import {
  Header,
  MainPageWrapper,
  MPSearchbarWrapper,
  SearchBar,
} from "./styled";
import { Categories } from "../components/categories/categories";
import { CategoryT } from "../components/categories/types";
import { Route, Routes } from "react-router-dom";
import { useLocation, useNavigate } from "react-router";
import { useQuery } from "react-query";
import { useHttpClient } from "../../../platform-utils/utils";
import { CategoriesListMock } from "../components/categories/mock";
import { RecommendedSaloon } from "../components/recomended/recommended-saloon";
import { API_BASE_URL } from "../../../index";
import { Title } from "../components/categories/styled";
import { EmptyHeader } from "../header/styled";

const ConditionalSearchbar = () => {
  if (window.innerWidth >= 500) {
    return <EmptyHeader />;
  }
  return (
    <MPSearchbarWrapper>
      <SearchBar />
    </MPSearchbarWrapper>
  );
};

export const MainPage = () => {
  const [categories, setCategories] = useState<CategoryT[]>(
    CategoriesListMock ?? []
  );
  const { httpClient } = useHttpClient();
  const navigate = useNavigate();

  useQuery<unknown, unknown, CategoryT[]>(
    "data",
    httpClient.createGet(`${API_BASE_URL}/categories`),
    {
      onSuccess: (data) => setCategories(data),
      onError: (err) => {
        console.error(err);
      },
    }
  );

  return (
    <MainPageWrapper>
      <Header>Онлайн - запись и бронирование услуг</Header>
      <ConditionalSearchbar />
      <Title>Рекомендуемые салоны:</Title>
      <RecommendedSaloon />
      <Categories categoriesList={categories} />
    </MainPageWrapper>
  );
};
