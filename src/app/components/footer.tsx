"use client";

export default function Footer() {
  const currentDate = new Date().toLocaleDateString("es-ES", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return (
    <footer className="w-full bg-gray-900 text-gray-400 py-4 px-6">
      <div className="text-right text-sm">Portfolio actualizado el {currentDate}</div>
    </footer>
  );
}
