import React, { useState } from "react";
import axios from "axios";

export default function SearchForm(props) {
  const [userInput, setUserInput] = useState("");

  const fetchSearchResults = async (query) => {
    try {
      const response = await axios.get(`/api/search/${query}`);
      return response.data;
    } catch (error) {
      console.error("Error fetching search results:", error);
    }
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    const searchQuery = e.target.elements.searchInput.value;
    const searchResults = await fetchSearchResults(searchQuery);
    props.updateSearchResults(searchResults, searchQuery);
    setUserInput("");
  };

  return (
    <div className="container mt-5">
      <form onSubmit={handleFormSubmit}>
        <div>
          <input
            type="text"
            className="form-control"
            id="searchInput"
            placeholder="Enter a topic"
            value={userInput}
            onChange={(e) => {
              setUserInput(e.target.value);
            }}
          />
        </div>
        <button
          type="submit"
          className="btn btn-primary mt-3"
          onSubmit={handleFormSubmit}
        >
          Search
        </button>
      </form>
    </div>
  );
}
