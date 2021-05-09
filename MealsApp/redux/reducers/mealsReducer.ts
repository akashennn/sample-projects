import { TCategory, TMeal } from '../../types/api';
import MEALS from '../../data/meal.json';
import CATEGORY from '../../data/category.json';
import { TMealsActions, TOGGLE_FAVORITE } from '../actions/meals';

type TInitialState = {
  meals: TMeal[];
  categories: TCategory[];
  userFavorites: TMeal[];
};

const initialState: TInitialState = {
  meals: MEALS,
  categories: CATEGORY,
  userFavorites: [],
};

const mealsReducer = (
  state: TInitialState = initialState,
  action: TMealsActions
): TInitialState => {
  switch (action.type) {
    case TOGGLE_FAVORITE:
      const isExist = state.userFavorites.find((m) => m.id === action.meal.id);
      if (isExist) {
        return {
          ...state,
          userFavorites: [
            ...state.userFavorites.filter((m) => m.id !== action.meal.id),
          ],
        };
      } else {
        return {
          ...state,
          userFavorites: [...state.userFavorites, action.meal],
        };
      }
    default:
      return state;
  }
};

export default mealsReducer;
