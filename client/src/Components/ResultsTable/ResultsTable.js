import React from "react";

export default function ResultsTable(props) {
  const webPages = props.searchResults.webPages?.value;
  return (
    <>
      {!webPages || webPages.length === 0 ? (
        <p>No Results.</p>
      ) : (
        <table className="table table-hover mt-4">
          <thead>
            <tr>
              <th scope="col">Title</th>
              <th scope="col">Body</th>
              <th scope="col">Address</th>
            </tr>
          </thead>
          <tbody>
            {webPages &&
              webPages.map((result, index) => (
                <tr key={index}>
                  <td>{result.name}</td>
                  <td>{result.snippet}</td>
                  <td>{result.displayUrl}</td>
                </tr>
              ))}
          </tbody>
        </table>
      )}
    </>
  );
}
