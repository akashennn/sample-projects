export type TMeal = {
  id: string;
  categoryIds: string[];
  title: string;
  imageUrl: string;
  duration: number;
  ingredients: string[];
  isVegetarian: boolean;
};

export type TCategory = {
  id: string;
  title: string;
  color: string;
};
