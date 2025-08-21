"use client";

import { useState, useRef, useEffect } from "react";

import { sendMessage } from "@/app/libs/chatbot-service";

import { generateMessageId } from "@/utils/generate-ids";
import { ChatMessage } from "@/interfaces/chat-message";
import { COLORS } from "@/constants/colors";

export default function ChatInterface() {
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSend = async () => {
    if (!input.trim() || isLoading) return;

    const userMessage: ChatMessage = {
      id: generateMessageId(),
      role: "user",
      content: input,
    };

    setMessages((prev) => [...prev, userMessage]);
    setInput("");
    setIsLoading(true);

    try {
      const assistantMessage = await sendMessage(input, messages);
      setMessages((prev) => [...prev, assistantMessage]);
    } catch (error) {
      console.error("Chat error:", error);
      const errorMessage: ChatMessage = {
        id: generateMessageId(),
        role: "assistant",
        content: "Lo siento, hubo un error. Por favor intenta nuevamente.",
      };
      setMessages((prev) => [...prev, errorMessage]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="w-full h-full flex flex-col">
      {/* Messages */}
      <div className="flex-1 overflow-y-auto bg-gray-50">
        {messages.length === 0 ? (
          <div className="text-center text-gray-500 mt-5">
            <p>¡Hola! Soy el agente virtual de Carlos Fonseca.</p>
            <p>¿En qué puedo ayudarte?</p>
          </div>
        ) : (
          messages.map((msg) => (
            <div
              key={msg.id}
              className={`flex ${msg.role === "user" ? "justify-end" : "justify-start"}`}
            >
              <div
                className={`max-w-xs lg:max-w-md px-4 py-2 rounded-lg m-1 ${
                  msg.role === "user"
                    ? "bg-[#25D366] text-white"
                    : "bg-white text-gray-800 border border-gray-200"
                }`}
              >
                <p className="text-sm">{msg.content}</p>
              </div>
            </div>
          ))
        )}

        {isLoading && (
          <div className="flex justify-start">
            <div className="bg-white border border-gray-200 px-4 py-2 rounded-lg">
              <div className="flex space-x-2">
                <div
                  className="w-2 h-2 rounded-full animate-bounce"
                  style={{ backgroundColor: COLORS.chatUser }}
                ></div>
                <div
                  className="w-2 h-2 rounded-full animate-bounce"
                  style={{ animationDelay: "0.2s", backgroundColor: COLORS.chatUser }}
                ></div>
                <div
                  className="w-2 h-2 rounded-full animate-bounce"
                  style={{ animationDelay: "0.4s", backgroundColor: COLORS.chatUser }}
                ></div>
              </div>
            </div>
          </div>
        )}

        <div ref={messagesEndRef} />
      </div>

      {/* Input Area */}
      <div className="p-3 border-t border-gray-200 bg-white rounded-b-lg">
        <div className="flex items-center gap-2">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && handleSend()}
            placeholder="Escribe tu consulta..."
            disabled={isLoading}
            className="w-0 flex-auto min-w-0 px-3 sm:px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#128C7E] disabled:bg-gray-100 disabled:cursor-not-allowed text-gray-700"
          />
          <button
            onClick={handleSend}
            disabled={isLoading || !input.trim()}
            className="shrink-0 min-w-[82px] sm:min-w-[92px] px-3 sm:px-4 py-2 text-white rounded-lg hover:bg-[#0C6E63] focus:outline-none focus:ring-2 focus:ring-[#25D366] disabled:bg-gray-400 disabled:cursor-not-allowed transition-colors whitespace-nowrap"
            style={{ backgroundColor: COLORS.chatButton }}
          >
            {isLoading ? (
              <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
            ) : (
              "Enviar"
            )}
          </button>
        </div>
      </div>
    </div>
  );
}
