"use client";

import { useState } from "react";
import Image from "next/image";

import ProjectAccordion from "./projectAccordion";
import ProjectSkeleton from "./projectSkeleton";

import { projectList } from "@/data/projectList";
import { Project } from "@/interfaces/project";

export default function Projects() {
  const [activeIcon, setActiveIcon] = useState<string | null>(null);
  const [filteredProjects, setFilteredProjects] = useState<Project[]>(projectList);
  const [loading, setLoading] = useState<boolean>(false);

  const icons = [
    { name: "Angular", src: "/icons/angular.svg" },
    { name: "React", src: "/icons/react.svg" },
    { name: "Next", src: "/icons/next.svg" },
    { name: "Vue", src: "/icons/vue.svg" },
    { name: "Ionic", src: "/icons/ionic.svg" },
    { name: "Node", src: "/icons/node.svg" },
    { name: "Nest", src: "/icons/nest.svg" },
  ];

  const handleIconClickTimeout = (name: string) => {
    setActiveIcon((prev) => {
      if (prev === name) {
        setFilteredProjects(projectList);
        setLoading(false);
        return null;
      }

      const filtered = projectList.filter((project) =>
        project.technologies.toLowerCase().includes(name.toLowerCase())
      );

      setFilteredProjects(filtered);
      setLoading(false);
      return name;
    });
  };

  const handleIconClick = (name: string) => {
    setLoading(true);

    setTimeout(() => {
      handleIconClickTimeout(name);
    }, 300);
  };

  const getIconClass = (name: string) => {
    const isActive = activeIcon === null || activeIcon === name;
    return `
      mx-2 
      cursor-pointer 
      transition-transform 
      duration-200 
      hover:scale-110 
      ${!isActive ? "grayscale opacity-50" : ""}
    `;
  };

  return (
    <div className="w-full">
      {/* Skills */}
      <div className="w-full flex justify-center mt-12 flex-wrap gap-4">
        {icons.map((icon) => (
          <Image
            alt={icon.name}
            className={getIconClass(icon.name)}
            height={40}
            key={icon.name}
            onClick={() => handleIconClick(icon.name)}
            src={icon.src}
            title={icon.name}
            width={40}
          />
        ))}
      </div>

      {/* Proyectos */}
      <div className="w-full flex justify-center flex-wrap gap-8 mt-8 ">
        {(() => {
          if (loading) {
            return filteredProjects.map((project) => <ProjectSkeleton key={project.id} />);
          } else if (filteredProjects.length > 0) {
            return filteredProjects.map((project) => (
              <ProjectAccordion key={project.id} project={project} />
            ));
          } else {
            return (
              <div className="text-gray-400 mt-12">
                No se encontraron proyectos para esta tecnología.
              </div>
            );
          }
        })()}
      </div>
    </div>
  );
}
