import React, { useState } from "react";
// import { FiterUsers } from "../FilterUsers/FilterUsers";
import "./styles.css";
import { SearchContext } from "../SearchResults/SearchContext";
import { useContext } from "react";
import useInput from "../../hooks/useInput";


export function SearchForm({ onChange }) {
  // const input = useInput()
  // const [value, setValue] = useState('')
  // const { users } = useContext(SearchContext);
  // const [searchResults, setSearchResults] = React.useState([]);
  const handleChange = (event) => {
    onChange(event.target.value)
  }

  // React.useEffect(() => {
  //   const results = users.filter(user =>
  //     user.firstName.toLowerCase().includes(value.toLowerCase())
  //   );
  //   setSearchResults(results);
  // }, [value]);

  return (
    <div className="searchForm">
      <form>
        <input 
          type="text"
          placeholder="Terry"
          // value="Terry"
          onChange={handleChange}
          />
      </form>
    </div>
  );
}
