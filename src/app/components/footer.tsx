"use client";

export default function Footer() {
  const currentYear = new Date().getFullYear();
  const currentDate = new Date().toLocaleDateString("es-ES", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return (
    <footer className="bg-gray-900 text-gray-400 py-4 px-6 mt-auto">
      <div className="text-right text-sm">
        &copy; {currentYear} - Portfolio actualizado el {currentDate}
      </div>
    </footer>
  );
}
