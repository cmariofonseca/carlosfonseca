"use client";

import { useState } from "react";
import Image from "next/image";

import ProjectAccordion from "./projectAccordion";
import ProjectSkeleton from "./projectSkeleton";

import { projectList } from "@/data/projectList";
import { Project } from "@/interfaces/project";
import { COMPANIES, FILTER_OPTIONS, ICONS, YEARS } from "@/constants/projects";

export default function Projects() {
  const [filteredProjects, setFilteredProjects] = useState<Project[]>(projectList);
  const [activeIcon, setActiveIcon] = useState<string | null>(null);
  const [activeCompany, setActiveCompany] = useState<string | null>(null);
  const [activeYear, setActiveYear] = useState<string | null>(null);
  const [filterType, setFilterType] = useState("tecnologías");
  const [loading, setLoading] = useState<boolean>(false);

  const handleClick = (filterType: string, name: string) => {
    setLoading(true);

    setTimeout(() => {
      if (filterType === "tecnologías") handleDisplayByTechnologies(name);
      if (filterType === "empresas") handleDisplayByCompanies(name);
      if (filterType === "fecha de desarrollo") handleDisplayByDevelopmentDate(name);
    }, 300);
  };

  const handleDisplayByTechnologies = (name: string) => {
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

  const handleDisplayByCompanies = (company: string) => {
    setActiveCompany((prev) => {
      if (prev === company) {
        setFilteredProjects(projectList);
        setLoading(false);
        return null;
      }

      const filtered = projectList.filter((project) =>
        project.developmentCompany.toLowerCase().includes(company.toLowerCase())
      );

      setFilteredProjects(filtered);
      setLoading(false);
      return company;
    });
  };

  const handleDisplayByDevelopmentDate = (date: string) => {
    setActiveYear((prev) => {
      if (prev === date) {
        setFilteredProjects(projectList);
        setLoading(false);
        return null;
      }

      const filtered = projectList.filter((project) => project.date === date);

      setFilteredProjects(filtered);
      setLoading(false);
      return date;
    });
  };

  const getButtonClass = (isActive: boolean) => {
    return `
      text-gray-400
      cursor-pointer 
      mx-1
      transition-transform 
      duration-200 
      hover:scale-120 
      ${!isActive ? "grayscale opacity-50" : ""}
    `;
  };

  const handleChangeFilterType = () => {
    setFilteredProjects(projectList);
    setActiveIcon(null);
    setActiveCompany(null);
    setActiveYear(null);

    const currentIndex = FILTER_OPTIONS.indexOf(filterType);
    const nextIndex = (currentIndex + 1) % FILTER_OPTIONS.length;
    setFilterType(FILTER_OPTIONS[nextIndex]);
  };

  return (
    <div className="w-full">
      <p className="text-2xl mt-16">Experiencia laboral</p>

      {/* Skills */}
      <button className="text-gray-400 cursor-pointer mt-8" onClick={handleChangeFilterType}>
        Filtrar por: <b>{filterType}</b>
      </button>

      <div className="flex justify-center flex-wrap gap-4 mt-6">
        {(() => {
          if (filterType === "tecnologías") {
            return ICONS.map((icon) => (
              <Image
                alt={icon.name}
                className={getButtonClass(activeIcon === null || activeIcon === icon.name)}
                height={24}
                key={icon.name}
                onClick={() => handleClick(filterType, icon.name)}
                src={icon.src}
                title={icon.name}
                width={24}
              />
            ));
          }
          if (filterType === "empresas") {
            return COMPANIES.map((company) => (
              <button
                className={getButtonClass(activeCompany === null || activeCompany === company)}
                key={company}
                onClick={() => handleClick(filterType, company)}
              >
                {company}
              </button>
            ));
          }
          if (filterType === "fecha de desarrollo") {
            return YEARS.map((year) => (
              <button
                className={getButtonClass(activeYear === null || activeYear === year)}
                key={year}
                onClick={() => handleClick(filterType, year)}
              >
                {year}
              </button>
            ));
          }
        })()}
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
