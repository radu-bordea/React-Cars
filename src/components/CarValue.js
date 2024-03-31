// Importing the 'useSelector' hook from the 'react-redux' library.
import { useSelector } from "react-redux";

// Defining a functional component named 'CarValue'.
function CarValue() {
  // Declaring a constant 'totalCost' which utilizes the 'useSelector' hook to access the Redux store state.
  const totalCost = useSelector(({ cars: { data, searchTerm } }) =>
    // Filtering the car data based on the search term and computing the total cost.
    data
      .filter((car) =>
        car.name.toLowerCase().includes(searchTerm.toLowerCase())
      )
      .reduce((acc, car) => acc + car.cost, 0)
  );

  // Returning JSX displaying the total cost.
  return <div className="car-value">Total Cost: ${totalCost}</div>;
}

// Exporting the 'CarValue' component as the default export.
export default CarValue;
