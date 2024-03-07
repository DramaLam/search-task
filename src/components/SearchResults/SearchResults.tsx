import { useContext } from "react";
import { SearchContext } from "./SearchContext";
import { UserCard } from "../UserCard/UserCard";
import { SearchForm } from "../SearchFrom/SearchForm";
import React, { useState } from "react";

import "./style.css";

export function SearchResults() {
  const { users } = useContext(SearchContext);
    
  const [value, setValue] = useState('')

  

  const [searchResults, setSearchResults] = React.useState([]);

  React.useEffect(() => {
    const results = users.filter(user =>
      user.firstName.toLowerCase().includes(value.toLowerCase())
    );
    setSearchResults(results);
  }, [value]);

  return (
    <div>
      {/* <div className="searchForm">
        <form>
          <input 
            type="text"
            placeholder="Terry"
            // value="Terry"
            onChange={(event) => setValue(event.target.value)}
            />
        </form>
      </div> */}
    
    <div className="usersList">
      {searchResults.map((user) => (
        <UserCard {...user} />
      ))}
    </div>
    </div>
  );
}
