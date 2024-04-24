import { useDispatch, useSelector } from 'react-redux';
import { setSearchTerm } from '../../redux/filtersSlice'; 

const SearchBox = () => {
  const dispatch = useDispatch();
  const searchTerm = useSelector(state => state.filters.name);

  const handleSearch = event => {
    dispatch(setSearchTerm(event.target.value));
  };

  return (
    <div className="search-box">
      <p>Find contacts by name</p>
      <input
        type="text"
        placeholder="Search"
        value={searchTerm}
        onChange={handleSearch}
        className="search-box-input"
      />
    </div>
  );
};

export default SearchBox;
