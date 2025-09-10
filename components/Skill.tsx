"use client";
import { motion } from "framer-motion";
import type { Skill } from "../typing";
import { urlFor } from "../sanity";
type Props = {
  directionLeft?: boolean;
  skill: Skill;
};

function Skill({ directionLeft, skill }: Props) {
  return (
    <div className="group relative flex cursor-pointer justify-center items-center">
      <motion.img
        initial={{ x: directionLeft ? -200 : 200, opacity: 0 }}
        transition={{ duration: 1 }}
        whileInView={{ x: 0, opacity: 1 }}
        src={urlFor(skill?.image).url()}
        alt={skill?.title}
        className="rounded-full border border-gray-500 object-cover 
                   w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 xl:w-28 xl:h-28 
                   filter group-hover:grayscale transition duration-300 ease-in-out"
      />
      
    </div>
  );
}

export default Skill;
