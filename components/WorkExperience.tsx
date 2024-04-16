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
      className="flex flex-col relative h-screen overflow-hidden text-center md:flex-row max-w-full px-10 justify-evenly mx-auto items-center"
    >
      <h3 className="absolute top-24 uppercase tracking-[20px] text-gray-500 text-xl md:text-2xl">
        Experience
      </h3>
      <div className="w-full flex flex-col space-x-5 overflow-x-scroll p-10 snap-x snap-mandatory mt-36 scrollbar scrollbar-thumb-[#F7AB0A]/80 scrollbar-track-gray-400/20">
        {experiences && experiences.length > 0 ? (
          experiences.map((experience) => (
            <ExperienceCard key={experience._id} experience={experience} />
          ))
        ) : (
          <h1 className="text-2xl text-white text-center items-center justify-center">No Experience</h1>
        )}
      </div>
    </motion.div>
  );
}
