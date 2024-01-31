import React from "react";
import { motion } from "framer-motion";

type Props = {
  directionDown?: boolean;
};

function Skill({ directionDown }: Props) {
  return (
    <div className="group relative flex cursor-pointer">
      <motion.img
        initial={{ y: directionDown ? -200 : 200, opacity: 0 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        src="https://images.g2crowd.com/uploads/product/image/social_landscape/social_landscape_96102ac6497377cd53da621075fe828e/sanity.png"
        className="rounded-full border border-gray-500 object-cover s8:w-16 s8:h-16 12pro:w-20 12pro:h-20 sm:w-24 sm:h-24 md:w-28 md:h-28 xl:w-32 xl:h-32 filter group-hover:grayscale transition duration-200 ease-in-out"
      />
      <div className="absolute opacity-0 group-hover:opacity-80 transition duration-200 ease-in-out group-hover:bg-white s8:w-16 s8:h-16 12pro:w-20 12pro:h-20 sm:w-24 sm:h-24 md:w-28 md:h-28 xl:w-32 xl:h-32 rounded-full z-0 ">
        <div className="flex items-center justify-center h-full">
          <p className="s8:text-xl 12pro:text-2xl sm:text-3xl font-bold text-black opacity-100 ">
            100%
          </p>
        </div>
      </div>
    </div>
  );
}

export default Skill;
