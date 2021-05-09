import { combineReducers } from 'redux';
import mealsReducer from './mealsReducer';

const rootReducer = combineReducers({
  meals: mealsReducer,
});

export type TAppState = ReturnType<typeof rootReducer>;

export default rootReducer;
