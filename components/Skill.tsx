import React from "react";
import { motion } from "framer-motion";

interface SkillProps {
  name: string;
  iconPath: string;
  proficiency: string;
  directionDown?: boolean;
}

function Skill({
  name,
  iconPath,
  proficiency,
  directionDown = false,
}: SkillProps) {
  return (
    <div className="group relative flex cursor-pointer">
      <motion.img
        initial={{ y: directionDown ? -200 : 200, opacity: 0 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        src={iconPath}
        alt={name}
        className="rounded-full border border-gray-500 object-cover s8:w-12 s8:h-12 12pro:w-16 12pro:h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 xl:w-28 xl:h-28 filter group-hover:grayscale transition duration-200 ease-in-out bg-white object-contain"
      />
      <div className="absolute opacity-0 group-hover:opacity-80 transition duration-200 ease-in-out group-hover:bg-white s8:w-12 s8:h-12 12pro:w-16 12pro:h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 xl:w-28 xl:h-28 rounded-full z-0 ">
        <div className="flex items-center justify-center h-full">
          <p className="s8:text-sm 12pro:text-sm sm:text-xl md:text-xl font-bold text-black opacity-100 text-center ">
            {name}
          </p>
        </div>
      </div>
    </div>
  );
}

export default Skill;
