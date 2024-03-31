// Importing necessary dependencies from react-redux and store/slices/carsSlice
import { useDispatch, useSelector } from "react-redux"; // Importing useDispatch and useSelector hooks from react-redux
import { removeCar } from "../store/slices/carsSlice"; // Importing removeCar action creator from carsSlice

// Function component representing the CarList
function CarList() {
  // Using useDispatch hook to dispatch actions
  const dispatch = useDispatch();

  // Destructuring 'cars', 'name', 'data', and 'searchTerm' from the Redux store state
  const { cars, name } = useSelector(({ form, cars: { data, searchTerm } }) => {
    // Filtering the cars based on the search term
    const filteredCars = data.filter((car) =>
      car.name.toLowerCase().includes(searchTerm.toLowerCase())
    ); // Getting list of cars from the Redux store

    return {
      cars: filteredCars,
      name: form.name,
    };
  });

  // Event handler for deleting a car
  const handleCarDelete = (car) => {
    // Dispatching removeCar action with the id of the car to be deleted
    dispatch(removeCar(car.id));
  };

  // Mapping through the list of cars and rendering each car
  const renderedCars = cars.map((car) => {
    // Determining if the car name should be bold
    const bold = name && car.name.toLowerCase().includes(name.toLowerCase());

    return (
      <div key={car.id} className={`panel ${bold ? "bold" : ""}`}>
        {/* Displaying car name and cost */}
        <p>
          {car.name} - ${car.cost}
        </p>
        {/* Button to delete the car */}
        <button
          className="button is-danger"
          onClick={() => handleCarDelete(car)}
        >
          Delete
        </button>
      </div>
    );
  });

  // Rendering the CarList component
  return (
    <div className="car-list">
      {/* Rendering list of cars */}
      {renderedCars}
      {/* Horizontal line */}
      <hr />
    </div>
  );
}

// Exporting CarList component as default
export default CarList;
