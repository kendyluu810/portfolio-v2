import React from "react";
import { motion } from "framer-motion";
import ExperienceCard from "./ExperienceCard";
import { Experience } from "../typing";

type Props = {
  experiences: Experience[];
};

export default function WorkExperience({ experiences }: Props) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1.2 }}
      className="flex flex-col relative min-h-screen text-center md:text-left 
                 max-w-7xl px-4 sm:px-6 md:px-10 mx-auto items-center"
    >
      <h3 className="mt-16 sm:mt-20 uppercase tracking-[12px] sm:tracking-[20px] text-gray-500 text-lg sm:text-xl md:text-2xl">
        Experience
      </h3>
      <div
        className="w-full flex space-x-5 overflow-x-scroll p-6 sm:p-10 mt-10 
                   snap-x snap-mandatory scrollbar 
                   scrollbar-thumb-[#F7AB0A]/80 scrollbar-track-gray-400/20"
      >
        {experiences && experiences.length > 0 ? (
          experiences.map((experience) => (
            <ExperienceCard key={experience._id} experience={experience} />
          ))
        ) : (
          <div className="w-full flex justify-center items-center py-10">
            <h1 className="text-xl sm:text-2xl text-white">No Experience</h1>
          </div>
        )}
      </div>
    </motion.div>
  );
}
