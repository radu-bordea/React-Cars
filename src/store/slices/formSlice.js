// Importing necessary dependency from @reduxjs/toolkit
import { createSlice } from "@reduxjs/toolkit";
import { addCar } from "./carsSlice";

// Creating a slice for managing form state
const formSlice = createSlice({
  name: "form", // Name of the slice
  initialState: {
    name: "", // Initial value for name
    cost: 0, // Initial value for cost
  },
  reducers: {
    // Reducer function for changing the name in the form
    changeName(state, action) {
      state.name = action.payload; // Updating the name in the form state
    },
    // Reducer function for changing the cost in the form
    changeCost(state, action) {
      state.cost = action.payload; // Updating the cost in the form state
    },
  },
  extraReducers(builder) {
    builder.addCase(addCar, (state, action)=> {
      state.name = '';
      state.cost = 0;
    });
  },
});

// Exporting actions and reducer from formSlice
export const { changeName, changeCost } = formSlice.actions;
export const formReducer = formSlice.reducer;
