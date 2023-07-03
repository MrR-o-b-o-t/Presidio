import React, { useState } from "react";

import SearchForm from "../../Components/SearchForm/SearchForm";
import ResultsTable from "../../Components/ResultsTable/ResultsTable";
import ChatBox from "../../Components/ChatBox/ChatBox";

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
      <div className="text-center">
        <h1>Welcome to the Search App!</h1>
        <p>Enter a topic to search for information.</p>
      </div>
      <SearchForm updateSearchResults={updateSearchResults} />
      <ResultsTable searchResults={searchResults} />
      <ChatBox />
    </div>
  );
}
