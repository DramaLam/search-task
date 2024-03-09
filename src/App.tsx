import { useState } from "react";
import { SearchForm } from "./components/SearchFrom/SearchForm";
import { SearchContext } from "./components/SearchResults/SearchContext";
import { SearchResults } from "./components/SearchResults/SearchResults";
import { SearchResourse } from "./components/SearchResults/SearchResourse"
import { mockUsers } from "./mockUsers";
import TabsSection from "./components/TabsSection";
import { SearchRequest } from "./components/SearchResults/SearchRequest";

export default function App() {
  const [users] = useState(mockUsers);

  // for work SearchForm + SearchResults
  const [ name, setName ] = useState('')
  const handleChange = (name) => {
    setName(name)
  }

  // for TabsSection
  const [tab, setTab] = useState('resources')

  return (
    <>
      <SearchForm onChange={handleChange}/>
      <TabsSection active={tab} onChange={(current) => setTab(current)} />

      {tab === 'main' && (
        <>
          <SearchContext.Provider value={{ users }}>
            <SearchResults name={name}/>
          </SearchContext.Provider>
        </>
      )}

      {tab === 'resource' && (
        <>
            {/* <SearchForm onChange={handleChange}/> */}
            <SearchResourse name={name}/>
        </>
      )}

      {tab === 'resources' && (
        <>
            {/* <SearchForm onChange={handleChange}/> */}
            <SearchRequest name={name}/>
        </>
      )}
    </>
  );
}
