// Importing necessary dependency from @reduxjs/toolkit
import { configureStore } from '@reduxjs/toolkit';
// Importing reducers and actions from slices
import { carsReducer, changeSearchTerm, addCar, removeCar } from './slices/carsSlice';
import { formReducer, changeName, changeCost } from './slices/formSlice';

// Configuring the Redux store with combined reducers
const store = configureStore({
  reducer: {
    cars: carsReducer, // Reducer for managing cars state
    form: formReducer, // Reducer for managing form state
  },
});

// Exporting Redux store and actions
export { store, changeName, changeCost, addCar, removeCar, changeSearchTerm };
