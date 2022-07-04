import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cars: ["Model S", "Model Y", "Model 3", "Model X"],
};

const carSlice = createSlice({
  name: "car",
  initialState,
  reducers: {},
});

export const selectCars = (state) => state.car.cars;
//in select.car.cars car is the name value
export default carSlice.reducer;
//have to esport some kind of reduce event if it is empty
