// Importing necessary dependencies from react-redux and store
import { useDispatch, useSelector } from 'react-redux'; // Importing useDispatch and useSelector hooks from react-redux
import { changeName, changeCost, addCar } from '../store'; // Importing action creators from store

// Function component representing the CarForm
function CarForm() {
  // Using useDispatch hook to dispatch actions
  const dispatch = useDispatch();
  // Using useSelector hook to access selected state from the Redux store
  const { name, cost } = useSelector((state) => {
    return {
      name: state.form.name, // Getting name from the form state in Redux store
      cost: state.form.cost, // Getting cost from the form state in Redux store
    };
  });

  // Event handler for name input change
  const handleNameChange = (event) => {
    dispatch(changeName(event.target.value)); // Dispatching changeName action with the new value
  };
  
  // Event handler for cost input change
  const handleCostChange = (event) => {
    const carCost = parseInt(event.target.value) || 0; // Parsing cost value to integer, defaulting to 0 if parsing fails
    dispatch(changeCost(carCost)); // Dispatching changeCost action with the new cost value
  };
  
  // Event handler for form submission
  const handleSubmit = (event) => {
    event.preventDefault(); // Preventing default form submission behavior
    
    dispatch(addCar({ name, cost })); // Dispatching addCar action with the car details
  };

  // Rendering the CarForm component
  return (
    <div className="car-form panel">
      {/* Title for the form */}
      <h4 className="subtitle is-3">Add Car</h4>
      {/* Form for adding a new car */}
      <form onSubmit={handleSubmit}>
        {/* Input fields for car name and cost */}
        <div className="field-group">
          <div className="field">
            <label className="label">Name</label>
            {/* Input field for car name */}
            <input
              className="input is-expanded"
              value={name}
              onChange={handleNameChange}
            />
          </div>

          <div className="field">
            <label className="label">Cost</label>
            {/* Input field for car cost */}
            <input
              className="input is-expanded"
              value={cost || ''}
              onChange={handleCostChange}
              type="number"
            />
          </div>
        </div>
        {/* Button to submit the form */}
        <div className="field">
          <button className="button is-link">Submit</button>
        </div>
      </form>
    </div>
  );
}

// Exporting CarForm component as default
export default CarForm;
