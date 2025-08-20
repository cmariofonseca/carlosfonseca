"use client";

import { useState } from "react";
import { MessageCircleMore } from "lucide-react";

import ChatModal from "./ChatModal";

import ChatInterface from "./ChatInterface";
import { COLORS } from "@/constants/colors";

export default function ChatButton() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <button
        aria-label="Chatea conmigo"
        onClick={() => setOpen(true)}
        className="h-12 w-12 flex items-center hover:w-44 group fixed bottom-14 right-0 z-[8] rounded-l-full text-black shadow-lg overflow-hidden transition-[width] duration-300"
        style={{ backgroundColor: COLORS.highlight }}
      >
        <span
          aria-hidden="true"
          className="inline-flex items-center justify-center h-12 w-12 shrink-0"
        >
          <MessageCircleMore className="h-6 w-6" />
        </span>

        <span
          className="w-0 group-hover:w-44 overflow-hidden transition-[width] duration-300"
          aria-hidden="true"
        >
          <span className="h-12 flex items-center whitespace-nowrap leading-none delay-150">
            Chatea conmigo
          </span>
        </span>
      </button>

      {/* Modal */}
      <ChatModal open={open} onClose={() => setOpen(false)}>
        {/* Header estilo WhatsApp-like */}
        <div
          className="h-12 px-4 flex items-center justify-between text-white"
          style={{ backgroundColor: COLORS.chatHeader }}
        >
          <div className="flex items-center gap-3">
            <div className="h-7 w-7 rounded-full bg-white/20 flex items-center justify-center">
              <MessageCircleMore className="h-4 w-4" />
            </div>
            <span className="text-sm font-semibold">Chat con agente virtual</span>
          </div>
          <button
            onClick={() => setOpen(false)}
            className="text-white/80 hover:text-white focus:outline-none"
            aria-label="Cerrar chat"
            title="Cerrar"
          >
            ✕
          </button>
        </div>

        {/* Cuerpo del chat: tu componente actual tal cual */}
        <div className="h-[calc(100%-3rem)]">
          <ChatInterface />
        </div>
      </ChatModal>
    </>
  );
}
