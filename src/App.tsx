import { useState } from "react";
import { SearchForm } from "./components/SearchFrom/SearchForm";
import { SearchContext } from "./components/SearchResults/SearchContext";
import { SearchResults } from "./components/SearchResults/SearchResults";
import { FilterUsers } from "./components/FilterUsers/FilterUsers";
import { FilterContext } from "./components/FilterUsers/FilterContext";
import { mockUsers } from "./mockUsers";

export default function App() {
  const [users] = useState(mockUsers);
  const [ name, setName ] = useState('')

  const handleChange = (name) => {
    setName(name)
  }

  return (
    <SearchContext.Provider value={{ users }}>
      <SearchForm onChange={handleChange}/>
      <SearchResults name={name}/>
      {/* <FilterUsers value={<SearchForm />} /> */}
    </SearchContext.Provider>
  );
}
