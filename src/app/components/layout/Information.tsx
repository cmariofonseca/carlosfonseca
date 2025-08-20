import Image from "next/image";
import { CloudDownload } from "lucide-react";

import { COLORS } from "@/constants/colors";

export default function Information() {
  return (
    <div className="w-full flex flex-col items-center text-center mt-2">
      {/* Imagen de perfil */}
      <div className="w-52 overflow-hidden mb-6">
        <Image
          src="/images/image_profile_2.png"
          alt="Foto de perfil"
          width={200}
          height={200}
          className="w-auto h-auto"
          priority
        />
      </div>

      {/* Nombre */}
      <h1 className="text-4xl font-bold mb-4" style={{ color: COLORS.highlight }}>
        Carlos Fonseca
      </h1>

      {/* Descripción */}
      <p className="text-lg text-gray-400 max-w-md mb-4">
        Desarrollador web especializado en frontend, con experiencia en backend y aplicaciones
        móviles.
      </p>

      {/* Iconos de redes y botón de CV */}
      <div className="flex items-center gap-2 sm:gap-4">
        <a
          href="https://www.linkedin.com/in/carlosfonsecadev/"
          rel="noopener noreferrer"
          target="_blank"
          title="LinkedIn"
        >
          <button className="flex items-center text-sm text-gray-400 border border-gray-500 px-2 sm:px-3 py-1 rounded hover:bg-gray-800 hover:text-white transition cursor-pointer">
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

        <a
          href="https://github.com/cmariofonseca"
          rel="noopener noreferrer"
          target="_blank"
          title="GitHub"
        >
          <button className="flex items-center text-sm text-gray-400 border border-gray-500 px-2 sm:px-3 py-1 rounded hover:bg-gray-800 hover:text-white transition cursor-pointer">
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

        <a href="/cv" rel="noopener noreferrer" target="_blank" title="CV">
          <button className="flex items-center text-sm text-gray-400 border border-gray-500 px-2 sm:px-3 py-1 rounded hover:bg-gray-800 hover:text-white transition cursor-pointer">
            <CloudDownload className="mr-1 sm:mr-2" style={{ color: COLORS.highlight }} /> Descargar
            CV
          </button>
        </a>
      </div>
    </div>
  );
}
