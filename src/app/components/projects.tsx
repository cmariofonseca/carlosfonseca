"use client";

import ProjectAccordion from "./projectAccordion";

import { porjectList } from "@/data/projectList";
import { Project } from "@/interfaces/project";

export default function Projects() {
  return (
    <div className="w-full">
      {/* Skills */}
      <div className="w-full flex justify-center mt-12">
        {/* frontend */}
        <div className="flex justify-center mx-6">
          <img alt="Angular" className="mx-2" width="40" src="icons/angular.svg" />
          <img alt="React" className="mx-2" width="40" src="icons/react.svg" />
          <img alt="Next" className="mx-2" width="40" src="icons/next.svg" />
          <img alt="Vue" className="mx-2" width="40" src="icons/vue.svg" />
        </div>

        {/* mobile */}
        <div className="flex justify-center mx-6">
          <img alt="Ionic" className="mx-2" width="40" src="icons/ionic.svg" />
        </div>

        {/* backend */}
        <div className="flex justify-center mx-6">
          <img alt="Node" className="mx-2" width="40" src="icons/node.svg" />
          <img alt="Nest" className="mx-2" width="40" src="icons/nest.svg" />
        </div>
      </div>

      {/* Proyectos */}
      <div className="w-full flex justify-center flex-wrap gap-8 mt-8">
        {porjectList.map((project: Project) => (
          <ProjectAccordion key={project.id} project={project} />
        ))}
      </div>
    </div>
  );
}
