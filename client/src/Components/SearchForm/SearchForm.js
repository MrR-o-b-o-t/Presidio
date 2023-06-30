import React from "react";

export default function SearchForm() {
  return (
    <form className="container mt-5">
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
