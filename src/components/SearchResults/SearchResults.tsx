import { useContext } from "react";
import { SearchContext } from "./SearchContext";
import { UserCard } from "../UserCard/UserCard";
import { SearchForm } from "../SearchFrom/SearchForm";
import React, { useState } from "react";
import useInput from "../../hooks/useInput";

import "./style.css";

export function SearchResults( { name } ) {
  
  const { users } = useContext(SearchContext);
    
  const [value, setValue] = useState('')

  // const input = useInput()

  const [searchResults, setSearchResults] = React.useState([]);

  console.log(name);

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
