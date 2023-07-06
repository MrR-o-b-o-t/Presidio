import React from "react";

import "./ResultsTable.scss";

export default function ResultsTable(props) {
  const webPages = props.searchResults.webPages?.value;
  return (
    <>
      {!webPages || webPages.length === 0 ? (
        <p className="text-center">No Results.</p>
      ) : (
        <table className="table table-hover mt-4 border-primary table-sm">
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
                  <td>
                    <a href={result.displayUrl} target="blank">
                      {result.displayUrl}
                    </a>
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
      )}
    </>
  );
}
