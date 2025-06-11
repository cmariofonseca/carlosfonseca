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
      <div className="w-96 bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700">
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
          <span className="font-semibold text-gray-400">{project.projectName}</span>
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
