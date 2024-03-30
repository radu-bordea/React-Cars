// Importing necessary dependencies from @reduxjs/toolkit
import { createSlice, nanoid } from '@reduxjs/toolkit';

// Creating a slice for managing cars
const carsSlice = createSlice({
  name: 'cars', // Name of the slice
  initialState: {
    searchTerm: '', // Initial search term
    data: [], // Initial array of cars
  },
  reducers: {
    // Reducer function for changing search term
    changeSearchTerm(state, action) {
      state.searchTerm = action.payload; // Updating the search term in the state
    },
    // Reducer function for adding a new car
    addCar(state, action) {
      // Assumption:
      // action.payload === { name: 'ab', cost: 140 }
      state.data.push({
        name: action.payload.name, // Getting car name from payload
        cost: action.payload.cost, // Getting car cost from payload
        id: nanoid(), // Generating unique id for the new car
      });
    },
    // Reducer function for removing a car
    removeCar(state, action) {
      // Assumption:
      // action.payload === the id of the car we want to remove
      // Filtering out the car with the provided id
      const updated = state.data.filter((car) => {
        return car.id !== action.payload;
      });
      state.data = updated; // Updating the cars array without the removed car
    },
  },
});

// Exporting actions and reducer from carsSlice
export const { changeSearchTerm, addCar, removeCar } = carsSlice.actions;
export const carsReducer = carsSlice.reducer;
