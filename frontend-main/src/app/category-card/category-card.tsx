import React, { forwardRef } from "react";
import { CategoryCartProps } from "./interfaces";
import { CategoryWrapper, TitleWrapper } from "./styled";
import { useNavigate } from "react-router";

export const CategoryCard = forwardRef<any, CategoryCartProps>(function Cart(
  { title, imageUrl, id, style: RGLStyle },
  ref
) {
  const navigate = useNavigate();
  const onCategoryClick = () => {
    navigate(`/masters/${id}`);
  };

  return (
    <CategoryWrapper
      imageUrl={imageUrl}
      ref={ref}
      onClick={onCategoryClick}
      style={RGLStyle}
    >
      <TitleWrapper>{title}</TitleWrapper>
    </CategoryWrapper>
  );
});
