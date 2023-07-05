import axios from "axios";

export const sendMessageToAssistant = async (messages) => {
  try {
    const response = await axios.post(
      "https://api.openai.com/v1/chat/completions",
      {
        messages: messages,
        model: "gpt-3.5-turbo",
      },
      {
        headers: {
          Authorization: `Bearer ${process.env.REACT_APP_CHAT_API_KEY}`,
          "OpenAI-Organization": `${process.env.REACT_APP_ORG_KEY}`,
        },
      }
    );

    return response.data.choices[0].message.content;
  } catch (error) {
    console.error("Error sending message:", error);
    throw error;
  }
};
