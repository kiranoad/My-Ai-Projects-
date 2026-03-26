import { motion, AnimatePresence } from "framer-motion";
import { MessageSquare, X, Send, User, Bot, Sparkles, Loader2, RotateCcw, ArrowDown } from "lucide-react";
import { useState, useRef, useEffect } from "react";
import { cn } from "@/src/lib/utils";
import { GoogleGenAI } from "@google/genai";
import ReactMarkdown from "react-markdown";

export function Chatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    { role: "bot", text: "Hi there! I'm EduBot, your AI learning assistant. How can I help you today?" },
  ]);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [showScrollButton, setShowScrollButton] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const clearChat = () => {
    setMessages([{ role: "bot", text: "Chat cleared! How can I help you now?" }]);
  };

  const scrollToBottom = (behavior: ScrollBehavior = "smooth") => {
    // Use setTimeout to ensure the DOM has updated before scrolling
    setTimeout(() => {
      if (scrollRef.current) {
        const { scrollHeight, clientHeight } = scrollRef.current;
        scrollRef.current.scrollTo({
          top: scrollHeight - clientHeight,
          behavior
        });
      }
    }, 50);
  };

  const handleScroll = () => {
    if (scrollRef.current) {
      const { scrollTop, scrollHeight, clientHeight } = scrollRef.current;
      const hasOverflow = scrollHeight > clientHeight;
      const isAtBottom = scrollHeight - scrollTop - clientHeight < 50;
      setShowScrollButton(hasOverflow && !isAtBottom);
    }
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isLoading]);

  useEffect(() => {
    // Scroll to bottom on initial open
    if (isOpen) {
      scrollToBottom("auto");
    }
  }, [isOpen]);

  const handleSend = async () => {
    if (!input.trim() || isLoading) return;
    
    const userMessage = { role: "user", text: input };
    setMessages(prev => [...prev, userMessage]);
    const currentInput = input;
    setInput("");
    setIsLoading(true);

    try {
      const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY || "" });
      const response = await ai.models.generateContent({
        model: "gemini-3-flash-preview",
        contents: currentInput,
        config: {
          systemInstruction: "You are EduBot, a helpful and encouraging AI learning assistant for the EduVibe platform. You help students with their courses, interactive learning, and general educational questions. Keep your responses concise, friendly, and focused on education.",
        },
      });

      const botMessage = { 
        role: "bot", 
        text: response.text || "I'm sorry, I couldn't process that. Could you try again?" 
      };
      setMessages(prev => [...prev, botMessage]);
    } catch (error) {
      console.error("Gemini AI Error:", error);
      setMessages(prev => [...prev, { 
        role: "bot", 
        text: "Oops! I'm having a bit of trouble connecting to my brain. Please try again in a moment." 
      }]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="fixed bottom-4 right-4 md:bottom-8 md:right-8 z-[100]">
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 20 }}
            className="absolute bottom-16 md:bottom-20 right-0 w-72 sm:w-80 md:w-80 lg:w-96 h-[400px] md:h-[450px] lg:h-[500px] bg-white dark:bg-slate-900 rounded-3xl shadow-2xl border dark:border-slate-800 overflow-hidden flex flex-col"
          >
            {/* Header */}
            <div className="p-6 bg-indigo-600 text-white flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center backdrop-blur-md">
                  <Bot size={24} />
                </div>
                <div>
                  <h4 className="font-bold">EduBot</h4>
                  <div className="flex items-center gap-1.5">
                    <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
                    <span className="text-[10px] font-bold uppercase tracking-wider opacity-80">Online</span>
                  </div>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <button 
                  onClick={clearChat}
                  title="Clear Chat"
                  className="p-2 hover:bg-white/10 rounded-lg transition-colors"
                >
                  <RotateCcw size={18} />
                </button>
                <button onClick={() => setIsOpen(false)} className="p-2 hover:rotate-90 transition-transform">
                  <X size={20} />
                </button>
              </div>
            </div>

            {/* Messages Wrapper */}
            <div className="flex-1 relative overflow-hidden flex flex-col">
              <div 
                ref={scrollRef} 
                onScroll={handleScroll}
                className="flex-1 overflow-y-auto p-6 space-y-4 scroll-smooth custom-scrollbar"
              >
                <AnimatePresence initial={false}>
                  {messages.map((msg, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, y: 10, scale: 0.95 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      transition={{ duration: 0.3, ease: "easeOut" }}
                      className={cn("flex gap-3", msg.role === "user" ? "flex-row-reverse" : "")}
                    >
                      <div className={cn(
                        "w-8 h-8 rounded-full flex items-center justify-center shrink-0 shadow-sm transition-transform hover:scale-110",
                        msg.role === "user" ? "bg-indigo-100 text-indigo-600" : "bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400"
                      )}>
                        {msg.role === "user" ? <User size={16} /> : <Bot size={16} />}
                      </div>
                      <div className={cn(
                        "p-3 rounded-2xl text-sm max-w-[80%] leading-relaxed shadow-sm relative group markdown-content overflow-x-hidden break-words",
                        msg.role === "user" 
                          ? "bg-indigo-600 text-white rounded-tr-none user-message" 
                          : "bg-slate-50 dark:bg-slate-800/50 dark:text-slate-300 rounded-tl-none border dark:border-slate-800 bot-message"
                      )}>
                        {msg.role === "bot" && (
                          <Sparkles size={12} className="absolute -top-2 -right-2 text-indigo-400 opacity-0 group-hover:opacity-100 transition-opacity" />
                        )}
                        <ReactMarkdown>{msg.text}</ReactMarkdown>
                      </div>
                    </motion.div>
                  ))}
                </AnimatePresence>
                
                {isLoading && (
                  <motion.div 
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="flex gap-3"
                  >
                    <div className="w-8 h-8 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 flex items-center justify-center shrink-0 shadow-sm">
                      <Bot size={16} />
                    </div>
                    <div className="p-4 rounded-2xl text-sm bg-slate-50 dark:bg-slate-800/50 rounded-tl-none border dark:border-slate-800 flex flex-col gap-2 min-w-[100px]">
                      <div className="flex gap-1">
                        {[0, 1, 2].map((dot) => (
                          <motion.div
                            key={dot}
                            animate={{ y: [0, -4, 0] }}
                            transition={{
                              duration: 0.6,
                              repeat: Infinity,
                              delay: dot * 0.1,
                              ease: "easeInOut"
                            }}
                            className="w-1.5 h-1.5 bg-indigo-500 rounded-full"
                          />
                        ))}
                      </div>
                      <span className="text-[10px] text-slate-500 font-medium uppercase tracking-wider">EduBot is thinking</span>
                    </div>
                  </motion.div>
                )}
                <div ref={messagesEndRef} />
              </div>

              {/* Bottom Glow Hint */}
              <AnimatePresence>
                {showScrollButton && (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-indigo-500/10 dark:from-indigo-500/5 to-transparent pointer-events-none z-0"
                  />
                )}
              </AnimatePresence>
              
              {/* Scroll to Bottom Button */}
              <AnimatePresence>
                {showScrollButton && (
                  <motion.button
                    initial={{ opacity: 0, scale: 0.8, y: 10 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.8, y: 10 }}
                    onClick={() => scrollToBottom()}
                    className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-indigo-600 text-white p-2 rounded-full shadow-lg hover:bg-indigo-700 transition-colors z-10 flex items-center gap-2 text-xs font-medium px-4"
                  >
                    <motion.div
                      animate={{ y: [0, 3, 0] }}
                      transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
                    >
                      <ArrowDown size={14} />
                    </motion.div>
                    Scroll to bottom
                  </motion.button>
                )}
              </AnimatePresence>
            </div>

            {/* Input */}
            <div className="p-4 border-t dark:border-slate-800 bg-slate-50 dark:bg-slate-900/50">
              <div className="relative">
                <input
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyPress={(e) => e.key === "Enter" && handleSend()}
                  placeholder={isLoading ? "EduBot is thinking..." : "Type a message..."}
                  disabled={isLoading}
                  className="w-full pl-4 pr-12 py-3 bg-white dark:bg-slate-800 border dark:border-slate-700 rounded-2xl focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-all dark:text-white text-sm shadow-sm disabled:opacity-50"
                />
                <button
                  onClick={handleSend}
                  disabled={isLoading}
                  className="absolute right-2 top-1/2 -translate-y-1/2 w-8 h-8 bg-indigo-600 text-white rounded-xl flex items-center justify-center hover:bg-indigo-700 transition-all disabled:bg-slate-400"
                >
                  {isLoading ? <Loader2 size={16} className="animate-spin" /> : <Send size={16} />}
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={() => setIsOpen(!isOpen)}
        className="w-14 h-14 md:w-16 md:h-16 bg-indigo-600 text-white rounded-full flex items-center justify-center shadow-2xl shadow-indigo-500/50 group relative overflow-hidden"
      >
        <div className="absolute inset-0 bg-gradient-to-tr from-indigo-600 to-purple-600 opacity-0 group-hover:opacity-100 transition-opacity" />
        <div className="relative z-10">
          {isOpen ? <X size={28} /> : <MessageSquare size={28} />}
        </div>
        {!isOpen && (
          <motion.div
            animate={{ scale: [1, 1.2, 1] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="absolute -top-1 -right-1 w-5 h-5 bg-red-500 border-4 border-white dark:border-slate-900 rounded-full"
          />
        )}
      </motion.button>
    </div>
  );
}
