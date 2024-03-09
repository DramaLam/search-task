import { useState } from "react";
import { ErrorBoundary } from "react-error-boundary"
import { SearchForm } from "./components/SearchFrom/SearchForm";
import { SearchContext } from "./components/SearchResults/SearchContext";
import { SearchResults } from "./components/SearchResults/SearchResults";
import { SearchResourse } from "./components/SearchResults/SearchResourse"
import { mockUsers } from "./mockUsers";
import TabsSection from "./components/TabsSection";
import { SearchRequest } from "./components/SearchResults/SearchRequest";

export default function App() {
  const [users] = useState(mockUsers);

  // transmitting data from the search form
  const [ name, setName ] = useState('')
  const handleChange = (name : string) => {
    setName(name)
  }

  // switching between tabs
  const [tab, setTab] = useState('resources')

  return (
    <>
      <SearchForm onChange={handleChange}/>
      <TabsSection active={tab} onChange={(current) => setTab(current)} />

      {tab === 'main' && (
        <ErrorBoundary fallback={<div>Ops... Something went wrong! Try again later</div>}>
          <SearchContext.Provider value={{ users }}>
            <SearchResults name={name}/>
          </SearchContext.Provider>
        </ErrorBoundary>
      )}

      {tab === 'resource' && (
        <ErrorBoundary fallback={<div>Ops... Something went wrong! Try again later</div>}>
          <SearchResourse name={name}/>
        </ErrorBoundary>
      )}

      {tab === 'resources' && (
        <ErrorBoundary fallback={<div>Ops... Something went wrong! Try again later</div>}>
          <SearchRequest name={name}/>
        </ErrorBoundary>
      )}
    </>
  );
}
