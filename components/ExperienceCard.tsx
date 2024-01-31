import React from "react";
import { motion } from "framer-motion";

type Props = {};

function ExperienceCard({}: Props) {
  return (
    <article className="flex flex-col rounded-1 items-center space-y-7 flex-shrink-0 s8:w-[90vw] sm:w-[450px] md:w-[600px] xl:w-[900px] snap-center bg-[#292929] s8:p-7 12pro:p-10 hover:opacity-100 opacity-70 cursor-pointer transition-opacity duration-200 overflow-hidden">
      {/* TODO: Update work experience */}

      <motion.img
        initial={{
          y: -100,
          opacity: 0,
        }}
        transition={{
          duration: 1.2,
        }}
        whileInView={{
          opacity: 1,
          y: 0,
        }}
        viewport={{ once: true }}
        className="w-32 h-32 rounded-full xl:w-[200px] xl:h-[200px] object-cover object-center"
        src="/guitar.png"
        alt=""
      />

      <div className="px-0 md:px-10">
        <h4 className="s8:text-2xl sm:text-3xl md:text-4xl font-light">
          FOUNDER of CHASEGPT
        </h4>
        <p className="font-bold s8:text-xl md:text-2xl mt-1">CHASEGPT</p>
        <div className="flex space-x-2 my-2">
          <img
            className="h-10 w-10 rounded-full"
            src="https://cdn.sanity.io/images/ltuexkre/production/2a67945990f9c2ef568cf7e8483c1a8174556463-500x500.png"
          />
          <img
            className="h-10 w-10 rounded-full"
            src="https://cdn.sanity.io/images/ltuexkre/production/2a67945990f9c2ef568cf7e8483c1a8174556463-500x500.png"
          />
          <img
            className="h-10 w-10 rounded-full"
            src="https://cdn.sanity.io/images/ltuexkre/production/2a67945990f9c2ef568cf7e8483c1a8174556463-500x500.png"
          />
        </div>
        <p className="uppercase md:py-5 text-gray-300">
          Started work... - Ended...
        </p>

        <div className="h-52 md:h-64 xl:h-72 overflow-y-auto scrollbar-thin scrollbar-track-gray-400/20 scrollbar-thumb-[#F7AB0A]/80">
          <ul className="list-disc space-y-4 ml-5 s8:text-sm sm:text-base md:text-lg">
            <li>
              Summary pointsSummary pointsSummary pointsSummary pointsSummary
              points
            </li>
            <li>
              Summary pointsSummary pointsSummary pointsSummary pointsSummary
              points
            </li>
            <li>
              Summary pointsSummary pointsSummary pointsSummary pointsSummary
              points
            </li>
            <li>
              Summary pointsSummary pointsSummary pointsSummary pointsSummary
              points
            </li>
            <li>
              Summary pointsSummary pointsSummary pointsSummary pointsSummary
              points
            </li>
            <li>
              Summary pointsSummary pointsSummary pointsSummary pointsSummary
              points
            </li>
          </ul>
        </div>
      </div>
    </article>
  );
}

export default ExperienceCard;
