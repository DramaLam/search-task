import { useContext } from "react";
import { SearchContext } from "./SearchContext";
import { UserCard } from "../UserCard/UserCard";
import React from "react";
import "./style.css";

export function SearchResults( { name } : {name : string} ) {
  const { users } = useContext(SearchContext);
  const [searchResults, setSearchResults] = React.useState([]);

  React.useEffect(() => {
    const results = users.filter(user =>
      user.firstName.toLowerCase().includes(name.toLowerCase())
    );
    setSearchResults(results);
  }, [name]);

  return (
    <div>
      <div className="usersList">
        {searchResults.map((user, id) => (
          <UserCard key={id} {...user} />
        ))}
      </div>
    </div>
  );
}
