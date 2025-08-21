"use client";

import { useEffect } from "react";

type Props = Readonly<{
  children: React.ReactNode;
  onClose: () => void;
  open: boolean;
}>;

export default function ChatModal({ open, onClose, children }: Props) {
  useEffect(() => {
    const prev = document.body.style.overflow;
    document.body.style.overflow = open ? "hidden" : prev;
    return () => {
      document.body.style.overflow = prev;
    };
  }, [open]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (open && e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open, onClose]);

  return (
    <dialog
      open={open}
      className={`fixed right-1 bottom-10 z-[9] m-0 p-0 w-[min(420px,92vw)] h-[70vh] md:h-[75vh] bg-neutral-900 border border-white/10 rounded-2xl shadow-2xl overflow-hidden inset-auto left-auto top-auto transform transition-all duration-200 !translate-x-0 ${
        open ? "opacity-100 translate-y-0" : "opacity-0 translate-y-3 pointer-events-none"
      }`}
    >
      {children}
    </dialog>
  );
}
