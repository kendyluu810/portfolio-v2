import React from "react";
import { motion } from "framer-motion";
import { Experience } from "../typing";
import { urlFor } from "../sanity";

type Props = {
  experience: Experience;
};

export default function ExperienceCard({ experience }: Props) {
  return (
    <article
      className="flex flex-col rounded-t-3xl items-center space-y-5 
                 flex-shrink-0 w-[280px] sm:w-[340px] md:w-[500px] lg:w-[650px] xl:w-[800px] 
                 bg-[#292929] snap-center p-6 sm:p-8 md:p-10 
                 hover:opacity-100 opacity-80 cursor-pointer transition-opacity duration-200"
    >
      <motion.img
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 1.2 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        src={urlFor(experience?.companyImage).url()}
        alt="Company Logo"
        className="w-20 h-20 sm:w-24 sm:h-24 md:w-28 md:h-28 rounded-full object-cover object-center"
      />
      <div className="w-full px-2 sm:px-5 md:px-8 text-center">
        <h4 className="text-xl sm:text-2xl md:text-3xl font-light">
          {experience?.company}
        </h4>
        <p className="font-bold text-lg sm:text-xl md:text-2xl mt-1">
          {experience?.jobTitle}
        </p>
        <div className="flex flex-wrap gap-2 my-3 justify-center">
          {experience?.technologies.map((tech) => (
            <img
              key={tech?._id}
              src={urlFor(tech?.image).url()}
              alt=""
              className="w-7 h-7 sm:w-8 sm:h-8 rounded-full object-cover"
            />
          ))}
          <motion.img
            initial={{ opacity: 0, y: -100 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2 }}
            className="invisible md:visible xl:invisible xl:h-0 xl:w-0 h-0 w-0 md:h-0 md:w-0  rounded-full mb-0 object-cover object-center"
            src={urlFor(experience?.companyImage).url()}
            alt=""
          />
        </div>

        <p className="uppercase py-2 text-gray-300 text-xs sm:text-sm md:text-base">
          {new Date(experience?.dateStarted).toDateString()} -{" "}
          {experience.isCurrentlyWorkingHere
            ? "Present"
            : new Date(experience?.dateEnded).toDateString()}
        </p>
        <ul className="list-disc space-y-3 ml-5 text-sm sm:text-base md:text-lg max-h-60 sm:max-h-72 md:max-h-80 overflow-y-auto scrollbar-thin scrollbar-track-black scrollbar-thumb-[#F7AB0A]/80 text-left">
          {experience?.points.map((point, i) => (
            <li key={i}>{point}</li>
          ))}
        </ul>
      </div>
    </article>
  );
}
