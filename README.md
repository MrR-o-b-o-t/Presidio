# DevDiscovery Search App

The DevDiscovery Search App is a web application designed to help software developers search for information related to programming topics. It utilizes the Bing Search API to fetch search results and presents them in a user-friendly table format. Additionally, it incorporates an AI-powered chatbot powered by OpenAI's GPT-3.5 Turbo model to provide interactive conversational assistance.

## Features

- Search functionality: Enter a topic or query to fetch relevant search results from the Bing Search API.
- Search results table: Display the search results in a tabular format, including titles, snippets, and addresses.
- AI chatbot integration: Interact with the chatbot to ask questions or get assistance on programming topics.
- Conversational experience: Engage in natural language conversations with the chatbot and receive responses based on AI-generated suggestions.

## Getting Started

To run the DevDiscovery Search App locally, follow these steps:

1. Clone the repository:

2. Install the dependencies:

3. Set up API keys:

- Bing Search API: Obtain an API key from the [Bing Search API documentation](https://www.microsoft.com/en-us/bing/apis/bing-search-api-v7).
- OpenAI GPT-3.5 Turbo: Get an API key from the [OpenAI platform](https://platform.openai.com/).

4. Configure the environment variables:

- Create a `.env` file in the root directories of client and server.
- Add the following environment variables with your API keys:

  ```
  In clients .env file;
  REACT_APP_ORG=your_bing_api_key
  REACT_APP_CHAT_API_KEY=your_openai_api_key

  In servers .env file;
  BING_API_KEY=your_bing_api_key
  ```

5. Run the application:
  - Cd to the 'client' folder
  - Run 'npm run start'

7. Access the application in your browser:
   Open your browser and navigate to `http://localhost:5000`.

## Contributing

Contributions are welcome! If you have any suggestions, bug reports, or feature requests, please open an issue or submit a pull request. We appreciate your contributions to improve the Presidio Search App.

## License

This project is licensed under the [MIT License](LICENSE)

## Acknowledgements

- [React](https://reactjs.org) - JavaScript library for building user interfaces
- [Bootstrap](https://getbootstrap.com) - CSS framework for responsive web design
- [Bing Search API](https://www.microsoft.com/en-us/bing/apis/bing-search-api-v7) - API for fetching search results
- [OpenAI](https://openai.com) - Provider of GPT-3.5 Turbo model for AI chatbot functionality
