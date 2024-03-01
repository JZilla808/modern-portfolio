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
        className="rounded-full border border-gray-500 object-cover s8:w-16 s8:h-16 12pro:w-20 12pro:h-20 sm:w-24 sm:h-24 md:w-28 md:h-28 xl:w-32 xl:h-32 filter group-hover:grayscale transition duration-200 ease-in-out bg-white object-contain"
      />
      <div className="absolute opacity-0 group-hover:opacity-80 transition duration-200 ease-in-out group-hover:bg-white s8:w-16 s8:h-16 12pro:w-20 12pro:h-20 sm:w-24 sm:h-24 md:w-28 md:h-28 xl:w-32 xl:h-32 rounded-full z-0 ">
        <div className="flex items-center justify-center h-full">
          <p className="s8:text-sm 12pro:text-sm sm:text-xl md:text-2xl font-bold text-black opacity-100 text-center ">
            {name}
          </p>
        </div>
      </div>
    </div>
  );
}

export default Skill;
