"use client";
import { useState } from "react";
import { X, Bot, Send, Sparkles } from "lucide-react";

const QUICK_REPLIES = [
  "Book a test drive",
  "Check financing options",
  "Available in Karachi?",
  "PKR payment plans",
];

export default function AIConcierge() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState([
    { role: "ai", text: "👋 Hello! I'm AutoElite's AI Concierge. How can I assist you today? I can help with test drives, financing, and more." },
  ]);
  const [input, setInput] = useState("");
  const [isTyping, setIsTyping] = useState(false);

  const send = (text: string) => {
    if (!text.trim()) return;
    
    // Add user message
    setMessages((m) => [...m, { role: "user", text }]);
    setInput("");
    
    // Simulate AI thinking
    setIsTyping(true);
    
    setTimeout(() => {
      let response = "I'm here to help! Our team will reach out within minutes via WhatsApp for specific details. 🚗✨";
      
      const lowerText = text.toLowerCase();
      if (lowerText.includes("drive")) {
        response = "I've flagged your interest in a test drive! Which model are you looking to experience? Our Karachi showroom has most of our fleet ready.";
      } else if (lowerText.includes("financing") || lowerText.includes("pkr")) {
        response = "We offer flexible financing in PKR with local bank partnerships. Would you like to see our current interest-free plans?";
      } else if (lowerText.includes("karachi")) {
        response = "Yes! Our main showroom is located in DHA Phase 5, Karachi. We also offer nationwide delivery across Pakistan.";
      }

      setMessages((m) => [...m, { role: "ai", text: response }]);
      setIsTyping(false);
    }, 1500);
  };

  return (
    <>
      {/* Floating button */}
      <button
        onClick={() => setOpen(!open)}
        className="fixed bottom-6 right-4 md:right-6 w-14 h-14 rounded-full shimmer-btn shadow-[0_0_25px_rgba(57,255,20,0.5)] flex items-center justify-center z-50 text-void hover:scale-110 active:scale-95 transition-transform"
        aria-label="Open AI Concierge"
      >
        {open ? <X size={22} /> : <Sparkles size={22} />}
      </button>

      {/* Chat window */}
      {open && (
        <div
          className="fixed bottom-24 right-4 left-4 md:left-auto md:right-6 z-50 md:w-[380px] max-w-[calc(100vw-2rem)] rounded-3xl glass border border-white/10 overflow-hidden shadow-2xl"
        >
          {/* Header */}
          <div className="px-4 md:px-5 py-3 md:py-4 flex items-center gap-3 border-b border-white/8 bg-neon/5">
            <div className="w-9 h-9 md:w-10 md:h-10 rounded-2xl bg-neon flex items-center justify-center shadow-[0_0_15px_rgba(57,255,20,0.3)] flex-shrink-0">
              <Bot size={18} className="text-void md:w-5 md:h-5" />
            </div>
            <div className="min-w-0 flex-1">
              <p className="text-xs md:text-sm font-black text-white uppercase tracking-tight truncate">AI Concierge</p>
              <div className="flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-neon flex-shrink-0" />
                <span className="text-[9px] md:text-[10px] text-neon font-bold uppercase tracking-widest truncate">Active Assistance</span>
              </div>
            </div>
            <button onClick={() => setOpen(false)} className="w-8 h-8 rounded-full flex items-center justify-center text-muted hover:text-white hover:bg-white/5 transition-all flex-shrink-0">
              <X size={16} className="md:w-[18px] md:h-[18px]" />
            </button>
          </div>

          {/* Messages */}
          <div className="p-4 md:p-5 h-[300px] md:h-[350px] overflow-y-auto space-y-3 md:space-y-4 custom-scrollbar">
            {messages.map((m, i) => (
              <div 
                  key={i} 
                  className={`flex ${m.role === "user" ? "justify-end" : "justify-start"}`}
              >
                <div
                  className={`px-4 py-3 rounded-2xl text-sm max-w-[85%] leading-relaxed shadow-sm ${
                    m.role === "user"
                      ? "bg-neon text-void font-bold"
                      : "glass border border-white/8 text-white/90"
                  }`}
                >
                  {m.text}
                </div>
              </div>
            ))}
            {isTyping && (
              <div className="flex justify-start">
                <div className="glass border border-white/8 px-4 py-3 rounded-2xl flex gap-1 items-center h-10">
                  <div className="w-1.5 h-1.5 rounded-full bg-white/50 animate-pulse" />
                  <div className="w-1.5 h-1.5 rounded-full bg-white/50 animate-pulse delay-75" />
                  <div className="w-1.5 h-1.5 rounded-full bg-white/50 animate-pulse delay-150" />
                </div>
              </div>
            )}
          </div>

          {/* Quick replies */}
          <div className="px-4 md:px-5 pb-3 flex flex-wrap gap-2">
            {QUICK_REPLIES.map((r) => (
              <button
                key={r}
                onClick={() => send(r)}
                className="px-2.5 md:px-3 py-1.5 rounded-xl border border-white/10 text-muted text-[11px] md:text-xs hover:border-neon/30 hover:text-neon hover:bg-neon/5 transition-all whitespace-nowrap"
              >
                {r}
              </button>
            ))}
          </div>

          {/* Input */}
          <div className="p-3 md:p-4 border-t border-white/8 flex gap-2 bg-void/50">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && send(input)}
              placeholder="Ask about inventory..."
              className="flex-1 bg-white/5 border border-white/10 rounded-2xl px-3 md:px-4 py-2.5 md:py-3 text-xs md:text-sm text-white placeholder-muted focus:outline-none focus:border-neon/30 transition-all font-medium min-w-0"
            />
              <button
              onClick={() => send(input)}
              className="w-10 h-10 md:w-12 md:h-12 rounded-2xl bg-neon flex items-center justify-center shadow-[0_0_15px_rgba(57,255,20,0.4)] hover:shadow-[0_0_25px_rgba(57,255,20,0.6)] transition-all flex-shrink-0"
            >
              <Send size={16} className="text-void md:w-[18px] md:h-[18px]" />
            </button>
          </div>
        </div>
      )}
    </>
  );
}
