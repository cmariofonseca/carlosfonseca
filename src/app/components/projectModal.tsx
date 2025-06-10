"use client";

import { useEffect } from "react";
import { CircleMinus } from "lucide-react";

import { Project } from "@/interfaces/project";

interface ProjectModalProps {
  readonly project: Project;
  readonly onClose: () => void;
}

export default function ProjectModal({ project, onClose }: ProjectModalProps) {
  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "auto";
    };
  }, []);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-40 backdrop-blur-sm">
      <div className="relative w-11/12 max-w-3xl rounded-lg bg-gray-800 shadow-2xl border border-gray-700 overflow-hidden animate-fadeIn">
        {/* Imagen */}
        <div className="w-full h-64 md:h-96 flex justify-center items-center overflow-hidden bg-gray-900">
          <img
            src={project.imageUrl}
            alt={project.projectName}
            className="max-h-full max-w-full object-contain"
          />
        </div>

        {/* Contenido */}
        <div className="p-6 text-left space-y-3">
          <div className="text-gray-400">
            <span className="font-semibold text-white">Nombre:</span> {project.projectName}
          </div>
          <div className="text-gray-400">
            <span className="font-semibold text-white">Cliente:</span> {project.client}
          </div>
          <div className="text-gray-400">
            <span className="font-semibold text-white">Industria:</span> {project.industry}
          </div>
          <div className="text-gray-400">
            <span className="font-semibold text-white">Compañía:</span> {project.developmentCompany}
          </div>
          <div className="text-gray-400">
            <span className="font-semibold text-white">Tecnología:</span> {project.technologies}
          </div>
          <div className="text-gray-400">
            <span className="font-semibold text-white">Herramientas:</span> {project.tools}
          </div>
          <div className="text-gray-400">
            <span className="font-semibold text-white">Descripción:</span> {project.description}
          </div>
          <div className="text-gray-400">
            <span className="font-semibold text-white">Sitio web:</span>{" "}
            <a
              href={project.webSite}
              target="_blank"
              rel="noopener noreferrer"
              className="cursor-pointer text-blue-400"
            >
              {project.webSite}
            </a>
          </div>
        </div>

        {/* Botón cerrar */}
        <button
          aria-label="Cerrar modal"
          className="absolute top-4 right-4 text-gray-400 hover:text-white transition"
          onClick={onClose}
        >
          <CircleMinus size={28} />
        </button>
      </div>
    </div>
  );
}
