import { configureStore } from '@reduxjs/toolkit';
import ButterReducer from '../features/counter/counterSlice';
import BreadReducer from '../features/counter/BreadSlice';
import CheeseReducer from '../features/counter/CheeseSlice';

import SoupReducer from '../features/counter/SoupSlice';
import MilkReducer from '../features/counter/MilkSlice';


export const store = configureStore({
  reducer: {
    Butter: ButterReducer,

    Bread:BreadReducer,
  Soup  :SoupReducer,
  Cheese:CheeseReducer,
    Milk:MilkReducer

  },
});
