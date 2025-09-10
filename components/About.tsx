"use client";
import { motion } from "framer-motion";
import { urlFor } from "../sanity";
import { PageInfo } from "../typing";

type Props = { pageInfo: PageInfo };

export default function About({ pageInfo }: Props) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className="flex flex-col relative min-h-screen text-center 
                 md:text-left md:flex-row max-w-7xl px-4 sm:px-8 md:px-10 
                 justify-evenly mx-auto items-center"
    >
      <p className="absolute top-20 uppercase tracking-[12px] sm:tracking-[20px] text-gray-500 text-lg sm:text-xl md:text-2xl">
        About
      </p>

      <motion.img
        initial={{
          x: -200,
          opacity: 0,
        }}
        transition={{
          duration: 1.2,
        }}
        whileInView={{
          x: 0,
          opacity: 1,
        }}
        viewport={{ once: true }}
        className="mt-20 sm:mt-24 md:mt-0 flex-shrink-0 
                   w-32 h-32 sm:w-44 sm:h-44 md:w-64 md:h-64 
                   xl:w-[400px] xl:h-[400px] rounded-full md:rounded-lg object-cover"
        src={urlFor(pageInfo?.profilePic).url()}
        alt={pageInfo?.name || "Profile"}
      />
      <div className="mt-10 space-y-4 sm:space-y-6 md:space-y-10 px-2 md:px-10">
        <p className="text-lg sm:text-xl md:text-3xl xl:text-4xl font-semibold">
          Here is a{" "}
          <span className=" underline decoration-darkGreen/50">little</span>{" "}
          background
        </p>
        <p className="text-sm sm:text-base md:text-lg text-justify leading-relaxed">
          {pageInfo?.backgroundInformation}
        </p>
      </div>
    </motion.div>
  );
}
