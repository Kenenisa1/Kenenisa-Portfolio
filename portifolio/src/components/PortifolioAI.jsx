import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const PortfolioAI = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');
  const [isListening, setIsListening] = useState(false);
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef(null);
  const recognitionRef = useRef(null);

  const portfolioData = {
    name: "Kenenisa Mieso",
    skills: ["React", "JavaScript", "Node.js", "Python", "AI/ML", "TypeScript"],
    projects: [
      { name: "E-Commerce Platform", description: "Full-stack e-commerce solution with React and Node.js" },
      { name: "AI Chatbot", description: "Machine learning chatbot for customer service" },
      { name: "Portfolio Website", description: "Modern responsive portfolio with 3D animations" }
    ],
    experience: [
      { role: "Frontend Developer", company: "Tech Corp", duration: "2 years" },
      { role: "AI Engineer", company: "AI Startup", duration: "1 year" }
    ],
    education: "Computer Science Degree from University Name",
    contact: {
      email: "your.email@example.com",
      phone: "+1234567890",
      linkedin: "linkedin.com/in/yourname"
    },
    about: "Passionate developer specializing in AI and web technologies with 3+ years of experience."
  };

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  useEffect(() => {
    if (typeof window !== 'undefined' && ('webkitSpeechRecognition' in window || 'SpeechRecognition' in window)) {
      const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
      recognitionRef.current = new SpeechRecognition();
      recognitionRef.current.continuous = false;
      recognitionRef.current.interimResults = false;
      recognitionRef.current.lang = 'en-US';

      recognitionRef.current.onresult = (event) => {
        const transcript = event.results[0][0].transcript;
        setInput(transcript);
        handleSendMessage(transcript);
      };

      recognitionRef.current.onend = () => {
        setIsListening(false);
      };
    }
  }, []);

  const startListening = () => {
    if (recognitionRef.current) {
      recognitionRef.current.start();
      setIsListening(true);
    }
  };

  const stopListening = () => {
    if (recognitionRef.current) {
      recognitionRef.current.stop();
      setIsListening(false);
    }
  };

  const speakText = (text) => {
    if ('speechSynthesis' in window) {
      const utterance = new SpeechSynthesisUtterance(text);
      utterance.rate = 0.9;
      utterance.pitch = 1;
      window.speechSynthesis.speak(utterance);
    }
  };

  const analyzeQuestion = (question) => {
    const lowerQuestion = question.toLowerCase();
    
    // Skills related
    if (lowerQuestion.includes('skill') || lowerQuestion.includes('what can you do') || lowerQuestion.includes('technologies')) {
      return `I have expertise in ${portfolioData.skills.join(', ')}. I'm particularly strong in ${portfolioData.skills.slice(0, 3).join(', ')}.`;
    }
    
    // Projects related
    if (lowerQuestion.includes('project') || lowerQuestion.includes('work') || lowerQuestion.includes('build')) {
      const projectsList = portfolioData.projects.map(proj => `${proj.name}: ${proj.description}`).join('\n');
      return `Here are some of my key projects:\n${projectsList}`;
    }
    
    // Experience related
    if (lowerQuestion.includes('experience') || lowerQuestion.includes('work experience') || lowerQuestion.includes('job')) {
      const expList = portfolioData.experience.map(exp => `${exp.role} at ${exp.company} (${exp.duration})`).join('\n');
      return `My professional experience includes:\n${expList}`;
    }
    
    // Education related
    if (lowerQuestion.includes('education') || lowerQuestion.includes('degree') || lowerQuestion.includes('study')) {
      return `I have a ${portfolioData.edducation}.`;
    }
    
    // Contact related
    if (lowerQuestion.includes('contact') || lowerQuestion.includes('email') || lowerQuestion.includes('phone') || lowerQuestion.includes('reach')) {
      return `You can contact me via:\nEmail: ${portfolioData.contact.email}\nPhone: ${portfolioData.contact.phone}\nLinkedIn: ${portfolioData.contact.linkedin}`;
    }
    
    // About related
    if (lowerQuestion.includes('about') || lowerQuestion.includes('who are you') || lowerQuestion.includes('tell me about')) {
      return `I'm ${portfolioData.name}, ${portfolioData.about}`;
    }
    
    // Greeting
    if (lowerQuestion.includes('hello') || lowerQuestion.includes('hi') || lowerQuestion.includes('hey')) {
      return `Hello! I'm ${portfolioData.name}'s AI assistant. I can tell you about my skills, projects, experience, and more. What would you like to know?`;
    }
    
    // Default response
    return `I'm ${portfolioData.name}'s AI assistant. I can help you learn about my skills, projects, experience, education, and contact information. What specific information are you looking for?`;
  };

  const handleSendMessage = async (text = input) => {
    if (!text.trim()) return;

    const userMessage = { text: text, sender: 'user' };
    setMessages(prev => [...prev, userMessage]);
    setInput('');
    setIsTyping(true);

    // Simulate AI thinking
    setTimeout(() => {
      const aiResponse = analyzeQuestion(text);
      const aiMessage = { text: aiResponse, sender: 'ai' };
      setMessages(prev => [...prev, aiMessage]);
      setIsTyping(false);
      
      // Auto-speak the response
      speakText(aiResponse);
    }, 1000);
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  const clearChat = () => {
    setMessages([]);
  };

  return (
    <>
      {/* Floating AI Button */}
      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={() => setIsOpen(true)}
        className="fixed bottom-6 right-6 w-16 h-16 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full shadow-lg flex items-center justify-center z-50"
      >
        <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
        </svg>
      </motion.button>

      {/* AI Chat Modal */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            className="fixed bottom-20 right-6 w-96 h-[500px] bg-black-200 border-2 border-cyan-500 rounded-2xl shadow-2xl z-50 flex flex-col"
          >
            {/* Header */}
            <div className="bg-gradient-to-r from-cyan-600 to-blue-600 p-4 rounded-t-2xl flex justify-between items-center">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center">
                  <svg className="w-5 h-5 text-cyan-600" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 15h-2v-6h2v6zm4 0h-2v-6h2v6z"/>
                  </svg>
                </div>
                <div>
                  <h3 className="text-white font-bold">Portfolio AI</h3>
                  <p className="text-cyan-100 text-sm">Ask me anything!</p>
                </div>
              </div>
              <div className="flex gap-2">
                <button
                  onClick={clearChat}
                  className="p-1 text-white hover:bg-white hover:bg-opacity-20 rounded-full transition-colors"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                  </svg>
                </button>
                <button
                  onClick={() => setIsOpen(false)}
                  className="p-1 text-white hover:bg-white hover:bg-opacity-20 rounded-full transition-colors"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>
            </div>

            {/* Messages */}
            <div className="flex-1 p-4 overflow-y-auto bg-black-100">
              {messages.length === 0 ? (
                <div className="text-center text-gray-400 mt-8">
                  <svg className="w-12 h-12 mx-auto mb-4 text-cyan-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
                  </svg>
                  <p>Hello! I'm your AI assistant. Ask me about:</p>
                  <ul className="mt-2 text-sm space-y-1">
                    <li>• Skills and technologies</li>
                    <li>• Projects and work</li>
                    <li>• Experience and education</li>
                    <li>• Contact information</li>
                  </ul>
                </div>
              ) : (
                messages.map((message, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className={`mb-4 ${message.sender === 'user' ? 'text-right' : 'text-left'}`}
                  >
                    <div
                      className={`inline-block max-w-[80%] p-3 rounded-2xl ${
                        message.sender === 'user'
                          ? 'bg-cyan-600 text-white rounded-br-none'
                          : 'bg-gray-700 text-white rounded-bl-none'
                      }`}
                    >
                      {message.text.split('\n').map((line, i) => (
                        <p key={i}>{line}</p>
                      ))}
                    </div>
                  </motion.div>
                ))
              )}
              {isTyping && (
                <div className="flex items-center gap-2 text-gray-400">
                  <div className="flex gap-1">
                    <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></div>
                    <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
                    <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                  </div>
                  <span>AI is thinking...</span>
                </div>
              )}
              <div ref={messagesEndRef} />
            </div>

            {/* Input Area */}
            <div className="p-4 border-t border-gray-700 bg-black-200 rounded-b-2xl">
              <div className="flex gap-2">
                <textarea
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyPress={handleKeyPress}
                  placeholder="Ask about my skills, projects, experience..."
                  className="flex-1 p-3 bg-black-100 border border-gray-600 rounded-lg text-white resize-none focus:border-cyan-500 outline-none"
                  rows="1"
                />
                <div className="flex flex-col gap-2">
                  <button
                    onClick={isListening ? stopListening : startListening}
                    className={`p-3 rounded-lg ${
                      isListening 
                        ? 'bg-red-500 hover:bg-red-600' 
                        : 'bg-gray-600 hover:bg-gray-500'
                    } text-white transition-colors`}
                  >
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z" />
                    </svg>
                  </button>
                  <button
                    onClick={() => handleSendMessage()}
                    disabled={!input.trim()}
                    className="p-3 bg-cyan-600 text-white rounded-lg hover:bg-cyan-500 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                  >
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default PortfolioAI;