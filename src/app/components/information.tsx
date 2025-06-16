import Image from "next/image";

export default function Information() {
  return (
    <div className="w-full flex flex-col items-center text-center">
      {/* Imagen de perfil circular */}
      <div className="w-40 h-40 rounded-full overflow-hidden shadow-lg mb-6">
        <Image
          alt="Foto de perfil"
          className="w-full h-full object-cover"
          src="/images/image_profile.jpg"
          width={160}
          height={160}
        />
      </div>

      {/* Nombre */}
      <h1 className="text-4xl text-[#f7df1e] font-bold">Carlos Fonseca</h1>

      {/* Descripción */}
      <p className="text-lg text-gray-400 max-w-md mt-2">
        Desarrollador web especializado en frontend, con experiencia en backend y aplicaciones
        móviles.
      </p>

      {/* Iconos de redes y botón de CV */}
      <div className="flex items-center gap-4 mt-8">
        <a
          href="https://github.com/cmariofonseca"
          rel="noopener noreferrer"
          target="_blank"
          title="GitHub"
        >
          <button className="flex items-center text-sm text-gray-300 border border-gray-500 px-3 py-1 rounded hover:bg-gray-800 transition cursor-pointer">
            <Image
              alt="GitHub"
              className="cursor-pointer mr-2"
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
          <button className="flex items-center text-sm text-gray-300 border border-gray-500 px-3 py-1 rounded hover:bg-gray-800 transition cursor-pointer">
            <Image
              alt="LinkedIn"
              className="cursor-pointer mr-2"
              src="/icons/linkedin.svg"
              width={24}
              height={24}
            />
            LinkedIn
          </button>
        </a>

        <a href="/cv" rel="noopener noreferrer" target="_blank" title="CV">
          <button className="text-sm text-gray-300 border border-gray-500 px-3 py-1 rounded hover:bg-gray-800 transition cursor-pointer">
            Descargar CV
          </button>
        </a>
      </div>
    </div>
  );
}
