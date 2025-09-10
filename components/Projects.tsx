/* eslint-disable @next/next/no-img-element */
"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import { Project } from "../typing";
import { urlFor } from "../sanity";
import { SocialIcon } from "react-social-icons";

type Props = {
  projects: Project[];
};

function Projects({ projects }: Props) {
  const [displayedProjects, setDisplayedProjects] =
    useState<Project[]>(projects);

  const sortProjectsByCategory = (category: string) => {
    const filteredProjects = projects.filter(
      (project) => project.category === category
    );
    setDisplayedProjects(filteredProjects);
  };

  const resetSort = () => {
    setDisplayedProjects(projects);
  };

  const uniqueCategories = Array.from(
    new Set(projects.map((project) => project.category))
  );

  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className="h-screen relative flex overflow-hidden flex-col text-left md:flex-row max-w-full justify-evenly mx-auto items-center z-0"
    >
      <h3 className="absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl">
        Projects
      </h3>

      <div className="absolute hidden md:top-36 md:flex space-x-4 z-30 p-4 bg-white rounded-lg shadow-lg">
        {uniqueCategories.map((category) => (
          <button
            key={category}
            onClick={() => sortProjectsByCategory(category)}
            className="bg-[#F7AB0A] hover:bg-[#e89900] text-white px-4 py-2 rounded transition-colors duration-300"
          >
            {category}
          </button>
        ))}
        <button
          onClick={resetSort}
          className="flex-shrink-0 bg-gray-500 hover:bg-gray-700 text-white px-3 py-1 md:px-4 md:py-2 rounded text-sm md:text-base transition-colors duration-300"
        >
          All
        </button>
      </div>

      <div className="relative w-full md:top-20 flex overflow-x-scroll overflow-y-hidden snap-x snap-mandatory z-20 scrollbar scrollbar-thumb-[#F7AB0A]/80 scrollbar-track-gray-400/20 mt-24">
        {displayedProjects?.map((project, i) => (
          <div
            key={project?._id}
            className="w-screen flex-shrink-0 snap-center flex flex-col space-y-5 items-center justify-center p-6 sm:p-10 md:p-20 lg:p-32 h-screen"
          >
            <motion.img
              initial={{ opacity: 0, y: -300 }}
              transition={{ duration: 1.2 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              src={project?.image ? urlFor(project.image).url() : undefined}
              alt={project?.title}
              className="w-[120px] h-[120px] sm:w-[200px] sm:h-[200px] md:w-[300px] md:h-[300px] lg:w-[450px] lg:h-[450px] object-contain"
            />

            <div className="space-y-10 px-0 md:px-10 max-w-6xl">
              <h4 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-semibold text-center">
                <span className="underline decoration-[#F7AB0A]/50">
                  Project {i + 1} of {projects.length}:
                </span>{" "}
                {project?.title}
              </h4>
              <div className="flex flex-wrap items-center gap-2 justify-center">
                {project?.technologies.map((technology) => (
                  <img
                    key={technology._id}
                    src={urlFor(technology.image).url()}
                    alt={technology.title}
                    className="w-10 h-10"
                  />
                ))}
              </div>
              <p className="text-sm sm:text-base md:text-lg text-center md:text-left">
                {project?.summary}
              </p>
              <div className="flex items-center space-x-2 justify-center">
                <SocialIcon
                  url={project?.linkToBuild}
                  fgColor="gray"
                  bgColor="transparent"
                />
                <SocialIcon
                  url={project?.linkToDemo}
                  fgColor="gray"
                  bgColor="transparent"
                />
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="w-full absolute top-[30%] bg-[#F7AB0A]/10 left-0 h-[500px] -skew-y-12" />
    </motion.div>
  );
}

export default Projects;
