import React from "react";
import { motion } from "framer-motion";
import ExperienceCard from "./ExperienceCard";

type Props = {};

function WorkExperience({}: Props) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 2 }}
      className="h-screen relative flex flex-col overflow-hidden text-left md:flex-row max-w-full px-10 justify-evenly mx-auto items-center "
    >
      <h3 className="absolute s8:top-16 12pro:top-20 sm:top-24 uppercase tracking-[20px] mr-[-20px] text-gray-500 text-2xl">
        Experience
      </h3>

      <div className="w-full flex s8:mt-20 12pro:mt-16 space-x-5 overflow-x-scroll p-10 snap-x snap-mandatory scrollbar scrollbar-track-gray-400/20 scrollbar-thumb-[#F7AB0A]/80">
        <ExperienceCard />
        <ExperienceCard />
        <ExperienceCard />
        <ExperienceCard />
      </div>
    </motion.div>
  );
}

export default WorkExperience;
