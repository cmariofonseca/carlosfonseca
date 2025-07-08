"use client";

import { useState } from "react";
import Image from "next/image";

import ProjectModal from "./projectModal";

import { Project } from "@/interfaces/project";

export default function ProjectAccordion({ project }: { readonly project: Project }) {
  const [showModal, setShowModal] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  const cardBorderColor = project.isPersonalProject ? "border-[#f7df1e]" : "border-gray-700";

  const handleCardClick = () => setShowModal(true);

  const handleKeyDown = (event: React.KeyboardEvent) => {
    if (event.key === "Enter" || event.key === " ") {
      event.preventDefault();
      setShowModal(true);
    }
  };

  return (
    <>
      <button
        type="button"
        onClick={handleCardClick}
        onKeyDown={handleKeyDown}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        className={`
          w-96 
          bg-gray-800 
          border 
          rounded-lg 
          shadow-md 
          transition 
          duration-300 
          cursor-pointer 
          ${cardBorderColor}
          ${isHovered ? "opacity-100 shadow-lg scale-105" : "opacity-70"}
        `}
      >
        <div className="w-96 h-[207px] relative flex justify-center items-center overflow-hidden">
          <Image
            src={project.imageUrl}
            alt={project.projectName}
            fill
            sizes="384px"
            className="object-contain rounded-lg"
          />
        </div>

        <div className="flex justify-between px-5 py-3 items-center">
          <span className="font-semibold text-gray-400">{project.projectName}</span>
        </div>
      </button>

      {showModal && <ProjectModal project={project} onClose={() => setShowModal(false)} />}
    </>
  );
}
