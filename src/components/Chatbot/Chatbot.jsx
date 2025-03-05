import { useState } from "react";
import { FaRegMessage } from "react-icons/fa6";
import { FaRobot, FaRegUser, FaTimes } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";

export default function EcommerceChatbot() {
  const [isOpen, setIsOpen] = useState(true);
  const [messages, setMessages] = useState([
    { text: "Hello! How can I assist you today?", sender: "bot" },
  ]);
  const [input, setInput] = useState("");
  const [showSuggestions, setShowSuggestions] = useState(false);

  const ecommerceQueries = [
    {
      question: "What is your return policy?",
      answer: "You can return any item within 30 days of purchase.",
    },
    {
      question: "Do you offer free shipping?",
      answer: "Yes, we offer free shipping on orders above $50.",
    },
    {
      question: "How can I track my order?",
      answer:
        "You can track your order using the tracking link sent to your email.",
    },
    {
      question: "What payment methods do you accept?",
      answer: "We accept PayPal, credit/debit cards, and Apple Pay.",
    },
    {
      question: "Do you have a loyalty program?",
      answer: "Yes! Join our rewards program to earn points on every purchase.",
    },
    {
      question: "Talk to an agent",
      answer: "Connecting you to a support agent now...",
    },
  ];

  const toggleChat = () => setIsOpen(!isOpen);

  const sendMessage = (text) => {
    setMessages([...messages, { text, sender: "user" }]);
    setShowSuggestions(false);
    setInput("");

    setTimeout(() => {
      const foundQuery = ecommerceQueries.find((q) => q.question === text);
      const botResponse = foundQuery
        ? foundQuery.answer
        : "I'm not sure about that. Let me check and get back to you.";
      setMessages((prev) => [...prev, { text: botResponse, sender: "bot" }]);
    }, 1000);
  };

  return (
    <div className="fixed bottom-6 right-6 z-1000">
      <button
        onClick={toggleChat}
        className="bg-secondary text-white p-4 rounded-full shadow-lg flex items-center justify-center 
               transition-all duration-300 ease-in-out transform hover:scale-110 active:scale-95"
      >
        <FaRegMessage size={24} />
      </button>

      {isOpen && (
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.8 }}
          className="bg-primary shadow-2xl rounded-2xl p-4 w-80 h-96 flex flex-col fixed bottom-20 right-6"
        >
          <div className="font-semibold text-lg mb-2 text-heading flex justify-between">
            <span>Chat Support</span>
            <button onClick={toggleChat} className="text-text">
              <FaTimes size={20} />
            </button>
          </div>

          <div className="flex-1 overflow-y-auto p-2 space-y-2 scrollbar-hide">
            {messages.map((msg, index) => (
              <div
                key={index}
                className={`flex items-center space-x-2 ${msg.sender === "user" ? "justify-end" : "justify-start"
                  }`}
              >
                {msg.sender === "bot" && (
                  <FaRobot size={24} className="text-secondary" />
                )}
                <div
                  className={`p-2 rounded-lg max-w-[75%] ${msg.sender === "user"
                      ? "bg-secondary text-white self-end"
                      : "bg-transparent text-text self-start"
                    }`}
                >
                  {msg.text}
                </div>
                {msg.sender === "user" && (
                  <FaRegUser size={24} className="text-mainText" />
                )}
              </div>
            ))}
          </div>

          <div className="relative border-t pt-2">
            <input
              type="text"
              value={input}
              onChange={(e) => {
                setInput(e.target.value);
                setShowSuggestions(e.target.value.length > 0);
              }}
              className="flex-1 p-2 border rounded-lg bg-white text-text w-full"
              placeholder="Type a message..."
            />
            <button
              onClick={() => sendMessage(input)}
              className="bg-secondary text-text p-2 ml-2 rounded-lg mt-2 w-full"
            >
              Send
            </button>
          </div>

          <AnimatePresence>
            {showSuggestions && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                className="absolute bottom-16 left-2 right-2 bg-primary shadow-lg rounded-lg p-2"
              >
                {ecommerceQueries.map((query, index) => (
                  <button
                    key={index}
                    onClick={() => sendMessage(query.question)}
                    className="block w-full text-heading text-left p-2 hover:bg-gray-200 rounded-md text-sm"
                  >
                    {query.question}
                  </button>
                ))}
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      )}
    </div>
  );
}
