// Importing the 'useDispatch' and 'useSelector' hooks from the 'react-redux' library,
// and importing the 'changeSearchTerm' action creator from the '../store' file.
import { useDispatch, useSelector } from "react-redux";
import { changeSearchTerm } from "../store";

// Defining a functional component named 'CarSearch'.
function CarSearch() {
  // Declaring a constant 'dispatch' to dispatch actions to the Redux store,
  // and a constant 'searchTerm' to retrieve the search term from the Redux store.
  const dispatch = useDispatch();
  const searchTerm = useSelector((state) => {
    return state.cars.searchTerm;
  });

  // Defining a function 'handleSearchTermChange' to handle changes in the search term.
  const handleSearchTermChange = (event) => {
    // Dispatching the 'changeSearchTerm' action with the new search term value.
    dispatch(changeSearchTerm(event.target.value));
  };

  // Returning JSX for the search input field.
  return (
    <div className="list-header">
      <h3 className="title is-3">My Cars</h3>
      <div className="search field is-horizontal">
        <label className="label">Search</label>
        <input
          className="input"
          value={searchTerm}
          onChange={handleSearchTermChange}
        />
      </div>
    </div>
  );
}

// Exporting the 'CarSearch' component as the default export.
export default CarSearch;
