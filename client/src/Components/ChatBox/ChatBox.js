import React, { useState } from "react";
import axios from "axios";

export default function ChatBox() {
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
      <div className="chat-container">
        <div className="chat-messages">
          {messages.map((message, index) => (
            <div key={index} className={`message ${message.role}`}>
              {message.content}
            </div>
          ))}
        </div>
        <form className="chat-form" onSubmit={handleMessageSubmit}>
          <input
            type="text"
            value={inputText}
            onChange={(e) => setInputText(e.target.value)}
            placeholder="Type your message..."
          />
          <button className="btn btn-primary" type="submit">
            Send
          </button>
        </form>
      </div>
    </div>
  );
}
