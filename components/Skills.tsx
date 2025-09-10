"use client";
import { motion } from "framer-motion";
import Skill from "./Skill";
import { Skill as SkillType } from "../typing";
type Props = {
  skills: SkillType[];
};

function Skills({ skills }: Props) {
  return (
    <motion.div
      className="relative flex flex-col text-center md:text-left xl:flex-row 
                 max-w-[2000px] xl:px-10 min-h-screen justify-center 
                 xl:space-y-0 mx-auto items-center py-20"
    >
      <h3 className="absolute top-16 sm:top-20 uppercase tracking-[12px] sm:tracking-[20px] text-gray-500 text-xl sm:text-2xl">
        Skills
      </h3>

      <h3 className="absolute top-28 sm:top-32 uppercase tracking-[2px] text-gray-500 text-xs sm:text-sm">
        Hover over a skill for current proficiency
      </h3>

      <div className="grid grid-cols-4 gap-5">
        {skills?.slice(0, skills.length / 2).map((skill) => (
          <Skill key={skill._id} skill={skill} />
        ))}
        {skills?.slice(skills.length / 2, skills.length).map((skill) => (
          <Skill key={skill._id} skill={skill} directionLeft />
        ))}
      </div>
    </motion.div>
  );
}

export default Skills;
