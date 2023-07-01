import React, { useEffect, useState } from "react";

import SearchForm from "../../Components/SearchForm/SearchForm";
import ResultsTable from "../../Components/ResultsTable/ResultsTable";

export default function Home() {
  const [searchResults, setSearchResults] = useState([]);

  const updateSearchResults = (data) => {
    setSearchResults(data);
    console.log(data.webPages.value);
  };

  // useEffect(() => {
  //   console.log(searchResults);
  // }, [searchResults]);

  return (
    <div className="container-fluid mt-5">
      <h1>Welcome to the Search App!</h1>
      <p>Enter a topic to search for information.</p>
      <button className="btn btn-primary btn-lg">Get Started</button>
      <SearchForm updateSearchResults={updateSearchResults} />
      <ResultsTable searchResults={searchResults} />
    </div>
  );
}
