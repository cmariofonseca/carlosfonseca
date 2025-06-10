import Image from "next/image";

export default function Information() {
  return (
    <div className="w-full">
      {/* Imagen de perfil circular */}
      <div className="w-full flex justify-center">
        <div className="w-40 h-40 rounded-full overflow-hidden shadow-lg mb-6">
          <Image
            alt="Foto de perfil"
            className="w-full h-full object-cover"
            src="/images/image_profile.jpg"
            width={40}
            height={40}
          />
        </div>
      </div>

      {/* Name */}
      <h1 className="text-3xl font-bold text-gray-600 mb-2">Carlos Fonseca</h1>

      {/* Description */}
      <div className="w-full flex justify-center">
        <p className="text-lg text-gray-400 max-w-md">
          Desarrollador de software enfocado en experiencias web modernas. Apasionado por el
          frontend, el rendimiento y el diseño funcional.
        </p>
      </div>
    </div>
  );
}
