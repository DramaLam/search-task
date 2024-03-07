import { useState } from "react";
import { SearchForm } from "./components/SearchFrom/SearchForm";
import { SearchContext } from "./components/SearchResults/SearchContext";
import { SearchResults } from "./components/SearchResults/SearchResults";
import { mockUsers } from "./mockUsers";
import TabsSection from "./components/TabsSection";

export default function App() {
  const [users] = useState(mockUsers);

  // for work SearchForm + SearchResults
  const [ name, setName ] = useState('')
  const handleChange = (name) => {
    setName(name)
  }

  // for TabsSection
  const [tab, setTab] = useState('main')

  return (
    <>

      <TabsSection active={tab} onChange={(current) => setTab(current)} />

      {tab === 'main' && (
        <>
          <SearchContext.Provider value={{ users }}>
            <SearchForm onChange={handleChange}/>
            <SearchResults name={name}/>
          </SearchContext.Provider>
        </>
      )}

      {tab === 'resource' && (
        <>
            <SearchForm onChange={handleChange}/>
        </>
      )}
    </>
  );
}
