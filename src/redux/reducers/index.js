import filtersReducer from './filters';
import pizzasReducer from './pizzas';
import CartReducer from './cart';
import { combineReducers } from 'redux';

const rootReducer = combineReducers({
  filters: filtersReducer,
  pizzas: pizzasReducer,
  cart: CartReducer,
});

export default rootReducer;