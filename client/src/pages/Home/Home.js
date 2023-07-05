import React, { useState } from "react";

import SearchForm from "../../Components/SearchForm/SearchForm";
import ResultsTable from "../../Components/ResultsTable/ResultsTable";
import ChatBox from "../../Components/ChatBox/ChatBox";

export default function Home() {
  const [searchResults, setSearchResults] = useState([]);
  const [dataAvailable, setDataAvailable] = useState(false);
  const [userInput, setUserInput] = useState("");

  const updateSearchResults = (data, criteria) => {
    setSearchResults(data);
    setDataAvailable(true);
    setUserInput(criteria);
  };

  return (
    <div className="container-fluid mt-5">
      <div className="text-center">
        <h1>Welcome to DevDiscovery!</h1>
        <p>Enter a topic to search for information.</p>
      </div>
      {dataAvailable && <ChatBox userInput={userInput} />}
      <SearchForm updateSearchResults={updateSearchResults} />
      <ResultsTable searchResults={searchResults} />
    </div>
  );
}
