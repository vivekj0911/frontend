import { useState, useRef, useEffect } from "react";
import { Send, Loader2, Trash2 } from "lucide-react";

export default function Chatbot() {
  const [messages, setMessages] = useState(() => {
    return JSON.parse(localStorage.getItem("chatMessages")) || [];
  });
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const chatEndRef = useRef(null);

  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  useEffect(() => {
    localStorage.setItem("chatMessages", JSON.stringify(messages));
  }, [messages]);

  const sendMessage = async () => {
    if (!input.trim()) return;

    const userMessage = { text: input, sender: "user", timestamp: new Date().toLocaleTimeString() };
    let updatedMessages = [...messages, userMessage];

    setMessages(updatedMessages);
    setInput("");
    setLoading(true);

    try {
      const response = await fetch("https://prj-backend-8kmv.onrender.com/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message: input }),
      });

      const data = await response.json();
      const botMessage = { 
        text: data.reply, 
        sender: "bot", 
        timestamp: new Date().toLocaleTimeString() 
      };

      updatedMessages = [...updatedMessages, botMessage];

      if (updatedMessages.length > 15) {
        updatedMessages = updatedMessages.slice(updatedMessages.length - 15);
      }

      setMessages(updatedMessages);
    } catch (error) {
      setMessages((prev) => [
        ...prev,
        { 
          text: "Error: Unable to fetch response.", 
          sender: "bot",
          timestamp: new Date().toLocaleTimeString()
        },
      ]);
    } finally {
      setLoading(false);
    }
  };

  const clearChat = () => {
    setMessages([]);
    localStorage.removeItem("chatMessages");
  };

  return (
    <div className="w-full mt-26 max-w-2xl mx-auto bg-white shadow-xl rounded-xl overflow-hidden">
      {/* Header */}
      <div className="bg-green-500 p-4 flex justify-between items-center">
        <h2 className="text-white text-xl font-bold">AI Assistant</h2>
        <button 
          onClick={clearChat}
          className="text-white hover:bg-green-600 p-2 rounded-full transition-colors"
        >
          <Trash2 size={20} />
        </button>
      </div>

      {/* Chat Area */}
      <div className="flex flex-col h-[500px]">
        <div className="flex-1 overflow-y-auto p-4 space-y-4">
          {messages.length === 0 && (
            <div className="text-center text-gray-500 mt-8">
              Start a conversation by sending a message...
            </div>
          )}
          
          {messages.map((msg, index) => (
            <div
              key={index}
              className={`flex ${msg.sender === "user" ? "justify-end" : "justify-start"}`}
            >
              <div
                className={`relative max-w-md p-4 rounded-2xl ${
                  msg.sender === "user"
                    ? "bg-green-500 text-white"
                    : "bg-gray-100 text-gray-800"
                }`}
              >
                <p className="text-sm">{msg.text}</p>
                <span className={`text-xs mt-1 block ${
                  msg.sender === "user" ? "text-green-100" : "text-gray-500"
                }`}>
                  {msg.timestamp}
                </span>
              </div>
            </div>
          ))}
          {loading && (
            <div className="flex items-center text-gray-500 space-x-2">
              <Loader2 className="animate-spin" size={16} />
              <span className="text-sm">Thinking...</span>
            </div>
          )}
          <div ref={chatEndRef} />
        </div>

        {/* Input Area */}
        <div className="border-t p-4">
          <div className="flex items-center gap-2">
            <input
              type="text"
              className="flex-1 p-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
              placeholder="Type your message..."
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyPress={(e) => e.key === "Enter" && sendMessage()}
            />
            <button
              className={`p-3 rounded-xl transition-colors ${
                loading || !input.trim()
                  ? "bg-gray-100 text-gray-400 cursor-not-allowed"
                  : "bg-green-500 text-white hover:bg-green-600"
              }`}
              onClick={sendMessage}
              disabled={loading || !input.trim()}
            >
              <Send size={20} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}