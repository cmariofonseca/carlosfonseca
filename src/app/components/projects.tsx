"use client";

import Image from "next/image";

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
          <Image alt="Angular" className="mx-2" height={40} src="/icons/angular.svg" width={40} />
          <Image alt="React" className="mx-2" height={40} src="/icons/react.svg" width={40} />
          <Image alt="Next" className="mx-2" height={40} src="/icons/next.svg" width={40} />
          <Image alt="Vue" className="mx-2" height={40} src="/icons/vue.svg" width={40} />
        </div>

        {/* mobile */}
        <div className="flex justify-center mx-6">
          <Image alt="Ionic" className="mx-2" height={40} src="/icons/ionic.svg" width={40} />
        </div>

        {/* backend */}
        <div className="flex justify-center mx-6">
          <Image alt="Node" className="mx-2" height={40} src="/icons/node.svg" width={40} />
          <Image alt="Nest" className="mx-2" height={40} src="/icons/nest.svg" width={40} />
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
