import { TMeal } from '../../types/api';

export const TOGGLE_FAVORITE = 'TOGGLE_FAVORITE';

interface ToggleFavoriteMeal {
  type: typeof TOGGLE_FAVORITE;
  meal: TMeal;
}

export type TMealsActions = ToggleFavoriteMeal;
