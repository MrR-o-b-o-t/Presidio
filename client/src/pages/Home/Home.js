import React from "react";

import SearchForm from "../../Components/SearchForm/SearchForm";

export default function Home() {
  return (
    <div className="container-fluid mt-5">
      <h1>Welcome to the Search App!</h1>
      <p>Enter a topic to search for information.</p>
      <button className="btn btn-primary btn-lg">Get Started</button>
      <SearchForm />
    </div>
  );
}
