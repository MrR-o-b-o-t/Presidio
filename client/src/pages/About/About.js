import React from "react";

export default function About() {
  return (
    <div className="container mt-5">
      <div className="text-center">
        <h1>About the Application</h1>
      </div>
      <div className="mt-4">
        <h3>Welcome to the DevDiscovery!</h3>
        <p>
          This tool is designed to make your life as a software developer easier
          by providing a streamlined way to search for information related to
          your coding projects. Whether you need to quickly look up
          documentation, find code examples, or explore programming resources,
          the DevDiscovery has got you covered.
        </p>
      </div>
      <div className="mt-4">
        <h3>How It Works</h3>
        <p>
          The DevDiscovery leverages cutting-edge technologies to deliver
          accurate and comprehensive search results at your fingertips. By
          integrating with popular search engines and APIs, we aggregate
          relevant information from a variety of trusted sources, saving you
          valuable time and effort in your coding journey.
        </p>
      </div>
      <div className="mt-4">
        <h3>Key Features</h3>
        <ul>
          <li>
            Efficient Search: Enter a topic or keyword, and the DevDiscovery
            will retrieve the most relevant results in a matter of seconds.
          </li>
          <li>
            Intelligent Assistance: Our built-in AI-powered chatbot can assist
            you with your queries, providing real-time suggestions, code
            snippets, and insights.
          </li>
          <li>
            Organized Results: The DevDiscovery presents search results in a
            clean and user-friendly manner, including titles, descriptions, and
            relevant links.
          </li>
        </ul>
      </div>
      <div className="mt-4">
        <h3>Get Involved</h3>
        <p>
          We are committed to continuous improvement and welcome contributions
          from the software developer community. The DevDiscovery is an
          open-source project hosted on GitHub. Feel free to explore the source
          code, suggest enhancements, and contribute to the project's growth.
          Visit our{" "}
          <a target="blank" href="https://github.com/MrR-o-b-o-t/Presidio">
            GitHub repository
          </a>{" "}
          to get involved.
        </p>
      </div>
    </div>
  );
}
