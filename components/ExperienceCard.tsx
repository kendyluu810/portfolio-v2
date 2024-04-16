import React from "react";
import { motion } from "framer-motion";
import { Experience } from "../typing";
import { urlFor } from "../sanity";

type Props = {
  experience: Experience;
};

export default function ExperienceCard({ experience }: Props) {
  return (
    <article className=" flex flex-col rounded-t-full md:rounded-3xl items-center space-y-7 flex-shrink-0 w-[400px] md:w-[600px] xl:[900px] 2xl:[1200px] bg-[#292929] snap-center p-10 hover:opacity-100 opacity-70 cursor-pointer transition-opacity duration-200 ">
      <motion.img
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 1.2 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        src={urlFor(experience?.companyImage).url()}
        alt=""
        className="w-32 h-32 rounded-full  object-cover object-center "
      />
      <div className="w-full px-5 md:px-10 text-center">
        <h4 className="text-4xl font-light">{experience?.company}</h4>
        <p className="font-bold text-2xl mt-1">{experience?.jobTitle}</p>
        <div className="flex space-x-2 my-2 justify-center">
          {experience?.technologies.map((tech) => (
            <img
              key={tech?._id}
              src={urlFor(tech?.image).url()}
              alt=""
              className="w-8 h-8 rounded-full object-cover object-center"
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

        <p className="uppercase py-2 text-gray-300">
          {new Date(experience?.dateStarted).toDateString()} -{" "}
          {experience.isCurrentlyWorkingHere
            ? "Present"
            : new Date(experience?.dateEnded).toDateString()}
        </p>
        <ul className="list-disc space-y-4 ml-5 text-lg h-96 overflow-y-scroll scrollbar-thin scrollbar-track-black scrollbar-thumb-[#F7AB0A]/80">
          {experience?.points.map((point, i) => (
            <li key={i}>{point}</li>
          ))}
        </ul>
      </div>
    </article>
  );
}
