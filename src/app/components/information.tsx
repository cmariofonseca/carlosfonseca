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
      <h1 className="text-3xl text-[#f7df1e] font-bold">Carlos Fonseca</h1>

      {/* Descripción */}
      <p className="text-lg text-gray-400 max-w-md mt-2">
        Especialista en frontend con habilidades complementarias en backend.
      </p>

      {/* Iconos de redes y botón de CV */}
      <div className="flex items-center gap-4 mt-4">
        <a
          href="https://github.com/cmariofonseca"
          target="_blank"
          rel="noopener noreferrer"
          title="GitHub"
        >
          <Image
            alt="GitHub"
            className="cursor-pointer"
            src="/icons/github.svg"
            width={24}
            height={24}
          />
        </a>

        <a
          href="https://www.linkedin.com/in/carlosfonsecadev/"
          target="_blank"
          rel="noopener noreferrer"
          title="LinkedIn"
        >
          <Image
            alt="LinkedIn"
            className="cursor-pointer"
            src="/icons/linkedin.svg"
            width={24}
            height={24}
          />
        </a>

        <a href="/cv" target="_blank" rel="noopener noreferrer">
          <button className="text-sm text-gray-300 border border-gray-500 px-3 py-1 rounded hover:bg-gray-800 transition cursor-pointer">
            CV
          </button>
        </a>
      </div>
    </div>
  );
}
