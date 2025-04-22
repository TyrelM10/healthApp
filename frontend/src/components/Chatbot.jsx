import React, { useState, useEffect } from 'react';

function Chatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (isOpen && messages.length === 0) {
      setMessages([{ sender: 'bot', text: 'Hello! I’m your Health Assistant. Ask me anything about your health data or risks.' }]);
    }
  }, [isOpen]);

  const handleSend = async () => {
    if (!input.trim()) return;

    const userMessage = { sender: 'user', text: input };
    setMessages([...messages, userMessage]);
    setInput('');
    setLoading(true);

    try {
      const response = await fetch('http://localhost:8000/query', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ question: input }),
      });

      if (!response.ok) {
        throw new Error('Failed to fetch response from RAG API');
      }

      const data = await response.json();
      const botMessage = { sender: 'bot', text: data.answer };
      setMessages((prev) => [...prev, botMessage]);
    } catch (error) {
      console.error('Error:', error);
      const errorMessage = { sender: 'bot', text: 'Sorry, I encountered an error. Please try again.' };
      setMessages((prev) => [...prev, errorMessage]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      {!isOpen && (
        <button
          onClick={() => setIsOpen(true)}
          className="fixed right-2 sm:right-4 top-1/2 transform -translate-y-1/2 bg-blue-600 text-white p-3 sm:p-4 rounded-full shadow-lg hover:bg-blue-700 transition duration-300"
          aria-label="Open chatbot"
        >
          <svg className="w-5 sm:w-6 h-5 sm:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z"></path>
          </svg>
        </button>
      )}
      {isOpen && (
        <div className="fixed right-0 top-0 h-full w-64 sm:w-80 md:w-96 xs:w-full bg-white shadow-xl transform transition-transform duration-300">
          <div className="bg-blue-600 text-white p-2 sm:p-3 flex justify-between items-center">
            <h3 className="text-base sm:text-lg font-medium">Health Assistant</h3>
            <button onClick={() => setIsOpen(false)} className="text-white hover:text-gray-200" aria-label="Close chatbot">
              <svg className="w-4 sm:w-5 h-4 sm:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
              </svg>
            </button>
          </div>
          <div className="flex-1 h-[calc(100%-100px)] sm:h-[calc(100%-120px)] overflow-y-auto p-3 sm:p-4 bg-gray-50">
            {messages.map((msg, index) => (
              <div key={index} className={`mb-2 sm:mb-3 ${msg.sender === 'user' ? 'text-right' : 'text-left'}`}>
                <span
                  className={`inline-block p-2 sm:p-3 rounded-lg text-xs sm:text-sm ${
                    msg.sender === 'user' ? 'bg-blue-100 text-blue-800' : 'bg-gray-200 text-gray-800'
                  }`}
                >
                  {msg.text}
                </span>
              </div>
            ))}
            {loading && (
              <div className="text-left mb-2 sm:mb-3">
                <span className="inline-block p-2 sm:p-3 rounded-lg text-xs sm:text-sm bg-gray-200 text-gray-800">
                  Thinking...
                </span>
              </div>
            )}
          </div>
          <div className="p-2 sm:p-3 border-t bg-white">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              className="w-full p-1 sm:p-2 border rounded-lg focus:ring-2 focus:ring-blue-400 focus:outline-none transition duration-200 text-xs sm:text-sm"
              placeholder="Ask a health question..."
              onKeyDown={(e) => e.key === 'Enter' && handleSend()}
              disabled={loading}
            />
          </div>
        </div>
      )}
    </>
  );
}

export default Chatbot;