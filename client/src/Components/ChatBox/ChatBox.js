import React, { useState } from "react";
import { sendMessageToAssistant } from "./ChatController";

import "./ChatBox.scss";

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
      const assistantMessage = { ...newMessage, role: "assistant" };
      const botReply = await sendMessageToAssistant([
        ...messages,
        assistantMessage,
      ]);
      const botMessage = { content: botReply, role: "assistant" };
      setMessages([...messages, botMessage]);
    } catch (error) {
      console.error("Error sending message:", error);
    }
  };

  return (
    <div className="container mt-5 p-4 bg-primary rounded">
      <h3 className="text-center">
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
        <button className="btn btn-primary mt-3" type="submit">
          Send
        </button>
      </form>
      <div className="chat-bot-reply">
        {messages.map((message, index) => (
          <div key={index} className={`message ${message.role}`}>
            <strong>Message: </strong> {message.content}
          </div>
        ))}
      </div>
    </div>
  );
}
