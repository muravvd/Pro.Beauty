export type CategoryT = {
  id: string;
  imageUrl?: string;
  title: string;
};

export type CategoriesT = {
  onAddCategory?: () => void;
  categoriesList: CategoryT[];

  maxColumns?: number
};
