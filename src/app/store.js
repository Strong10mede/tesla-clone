import { configureStore } from "@reduxjs/toolkit";
import carReducer from "../features/car/carSlice";
export const store = configureStore({
  reducer: {
    car: carReducer,
  },
});

//car is name of carSlice
