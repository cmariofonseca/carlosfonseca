import Image from "next/image";
import { CloudDownload } from "lucide-react";

export default function Information() {
  return (
    <div className="w-full flex flex-col items-center text-center">
      {/* Imagen de perfil circular */}
      <div className="w-52 h-w-52 rounded-full overflow-hidden shadow-lg mb-6">
        <Image
          alt="Foto de perfil"
          className="w-full h-full object-cover"
          src="/images/image_profile_2.png"
          width={200}
          height={200}
        />
      </div>

      {/* Nombre */}
      <h1 className="text-4xl text-[#f7df1e] font-bold mb-2">Carlos Fonseca</h1>

      {/* Descripción */}
      <p className="text-lg text-gray-400 max-w-md mb-8">
        Desarrollador web especializado en frontend, con experiencia en backend y aplicaciones
        móviles.
      </p>

      {/* Iconos de redes y botón de CV */}
      <div className="flex items-center gap-2 sm:gap-4">
        <a
          href="https://github.com/cmariofonseca"
          rel="noopener noreferrer"
          target="_blank"
          title="GitHub"
        >
          <button className="flex items-center text-sm text-gray-400 border border-gray-500 px-2 sm:px-3 py-1 rounded hover:bg-gray-800 transition cursor-pointer">
            <Image
              alt="GitHub"
              className="cursor-pointer mr-1 sm:mr-2"
              src="/icons/github.svg"
              width={24}
              height={24}
            />
            GitHub
          </button>
        </a>

        <a
          href="https://www.linkedin.com/in/carlosfonsecadev/"
          rel="noopener noreferrer"
          target="_blank"
          title="LinkedIn"
        >
          <button className="flex items-center text-sm text-gray-400 border border-gray-500 px-2 sm:px-3 py-1 rounded hover:bg-gray-800 transition cursor-pointer">
            <Image
              alt="LinkedIn"
              className="cursor-pointer mr-1 sm:mr-2"
              src="/icons/linkedin.svg"
              width={24}
              height={24}
            />
            LinkedIn
          </button>
        </a>

        <a href="/cv" rel="noopener noreferrer" target="_blank" title="CV">
          <button className="flex items-center text-sm text-gray-400 border border-gray-500 px-2 sm:px-3 py-1 rounded hover:bg-gray-800 transition cursor-pointer">
            <CloudDownload className="text-[#f7df1e] mr-1 sm:mr-2" /> Descargar CV
          </button>
        </a>
      </div>
    </div>
  );
}
