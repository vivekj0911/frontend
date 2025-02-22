import { useState, useRef, useEffect } from "react";

export default function Chatbot() {

    const API_URL = "https://prj-backend-git-main-prathameshkhandares-projects.vercel.app"
  const [messages, setMessages] = useState(() => {
    return JSON.parse(localStorage.getItem("chatMessages")) || [];
  });
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const chatEndRef = useRef(null);

  // Auto-scroll to the latest message
  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  // Save messages to local storage
  useEffect(() => {
    localStorage.setItem("chatMessages", JSON.stringify(messages));
  }, [messages]);

  const sendMessage = async () => {
    if (!input.trim()) return;

    const userMessage = { text: input, sender: "user" };
    let updatedMessages = [...messages, userMessage];

    setMessages(updatedMessages);
    setInput("");
    setLoading(true);

    try {
      const response = await fetch(`${API_URL}/chat`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message: input }),
      });

      const data = await response.json();
      const botMessage = { text: data.reply, sender: "bot" };

      updatedMessages = [...updatedMessages, botMessage];

      // Max 15 messages rakhne ka logic
      if (updatedMessages.length > 15) {
        updatedMessages = updatedMessages.slice(updatedMessages.length - 15);
      }

      setMessages(updatedMessages);
    } catch (error) {
      setMessages((prev) => [
        ...prev,
        { text: "Error: Unable to fetch response.", sender: "bot" },
      ]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="w-full max-w-lg mx-auto bg-white shadow-lg rounded-lg p-4 flex flex-col">
      <h2 className="text-green-500 text-xl font-bold text-center mb-2">Chatbot</h2>

      <div className="flex-1 overflow-y-auto max-h-80 p-2 border border-gray-300 rounded-md">
        {messages.map((msg, index) => (
          <div
            key={index}
            className={`p-2 my-1 max-w-xs rounded-lg ${
              msg.sender === "user"
                ? "bg-green-500 text-white self-end ml-auto"
                : "bg-gray-200 text-gray-800 self-start mr-auto"
            }`}
          >
            {msg.text}
          </div>
        ))}
        {loading && <div className="text-gray-500 text-sm">Typing...</div>}
        <div ref={chatEndRef}></div>
      </div>

      <div className="flex gap-2 mt-2">
        <input
          type="text"
          className="flex-1 p-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-green-500"
          placeholder="Type a message..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyPress={(e) => e.key === "Enter" && sendMessage()}
        />
        <button
          className="bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-600 transition"
          onClick={sendMessage}
          disabled={loading}
        >
          Send
        </button>
      </div>
    </div>
  );
}