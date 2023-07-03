import React, { useState } from "react";
import axios from "axios";

export default function ChatBox({ userInput }) {
  const [messages, setMessages] = useState([]);
  const [inputText, setInputText] = useState("");

  const handleMessageSubmit = async (e) => {
    e.preventDefault();
    if (!inputText.trim()) return;

    const newMessage = { content: inputText, role: "user" };
    setMessages([...messages, newMessage]);
    setInputText("");

    try {
      const response = await axios.post(
        "https://api.openai.com/v1/chat/completions",
        {
          messages: [...messages, { ...newMessage, role: "assistant" }],
          model: "gpt-3.5-turbo",
        },
        {
          headers: {
            Authorization: `Bearer ${process.env.REACT_APP_CHAT_API_KEY}`,
            "OpenAI-Organization": `${process.env.REACT_APP_ORG_KEY}`,
          },
        }
      );

      const botReply = response.data.choices[0].message.content;
      const botMessage = { content: botReply, role: "assistant" };
      setMessages([...messages, botMessage]);
    } catch (error) {
      console.error("Error sending message:", error);
    }
  };

  return (
    <div className="container">
      <div className="">
        {messages.map((message, index) => (
          <div key={index} className={`message ${message.role}`}>
            {message.content}
          </div>
        ))}
      </div>
      <h3>
        It looks like you are looking for information about {userInput}. Can I
        help with that?
      </h3>
      <form className="" onSubmit={handleMessageSubmit}>
        <input
          className="form-control me-2"
          type="text"
          value={inputText}
          onChange={(e) => setInputText(e.target.value)}
          placeholder="Type your message..."
        />
      </form>
      <button className="btn btn-primary mt-3" type="submit">
        Send
      </button>
    </div>
  );
}
