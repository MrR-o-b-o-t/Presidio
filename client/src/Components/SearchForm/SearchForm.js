import React from "react";
import axios from "axios";

export default function SearchForm() {
  const fetchSearchResults = async (query) => {
    console.log(query);
    try {
      const response = await axios.get(
        `http://localhost:5000/api/search/${query}`
      );
      return response.data;
    } catch (error) {
      console.error("Error fetching search results:", error);
    }
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    const searchQuery = e.target.elements.searchInput.value;
    const searchResults = await fetchSearchResults(searchQuery);
    console.log(searchResults);
  };

  return (
    <form className="container mt-5" onSubmit={handleFormSubmit}>
      <div className="mb-3">
        <label htmlFor="searchInput" className="form-label">
          Enter a topic:
        </label>
        <input
          type="text"
          className="form-control"
          id="searchInput"
          placeholder="Enter a topic"
        />
      </div>
      <button type="submit" className="btn btn-primary">
        Search
      </button>
    </form>
  );
}
