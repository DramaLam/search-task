import React, { useState } from "react";
// import { FiterUsers } from "../FilterUsers/FilterUsers";
import "./styles.css";
import { SearchContext } from "../SearchResults/SearchContext";
import { UserCard } from "../UserCard/UserCard";
import { useContext } from "react";
import { useInput } from "../../hook/useInput";




export function SearchForm() {
  
  useInput()

  const [value, setValue] = useState('')

  const { users } = useContext(SearchContext);

  const [searchResults, setSearchResults] = React.useState([]);

  React.useEffect(() => {
    const results = users.filter(user =>
      user.firstName.toLowerCase().includes(value.toLowerCase())
    );
    setSearchResults(results);
  }, [value]);

  // const filteredValue = users.filter(user => {
  //   return user.name.toLowerCase().includes(value.toLowerCase())
  // })




  return (
    <div className="searchForm">
      <form>
        <input 
          type="text"
          placeholder="Terry"
          // value="Terry"
          onChange={(event) => setValue(event.target.value)}
          />
      </form>
    </div>
  );
}
