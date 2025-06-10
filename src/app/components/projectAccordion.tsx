"use client";

import { useState } from "react";
import Image from "next/image";
import { CirclePlus } from "lucide-react";

import ProjectModal from "./projectModal";

import { Project } from "@/interfaces/project";

export default function ProjectAccordion({ project }: { readonly project: Project }) {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <div className="w-96 rounded-lg shadow-sm bg-gray-800 border border-gray-700 overflow-hidden">
        <div className="w-96 flex justify-center items-center overflow-hidden">
          <Image
            src={project.imageUrl}
            alt={project.projectName}
            className="h-[207px] w-auto object-contain"
            width={384}
            height={207}
          />
        </div>

        <div className="flex justify-between px-5 py-3 items-center">
          <span className="font-semibold text-white">{project.projectName}</span>
          <button
            aria-label="Abrir modal"
            className=" text-gray-400 hover:text-white transition"
            onClick={() => setShowModal(true)}
          >
            <CirclePlus size={24} />
          </button>
        </div>
      </div>

      {/* Mostrar modal */}
      {showModal && <ProjectModal project={project} onClose={() => setShowModal(false)} />}
    </>
  );
}
