import React from "react";
import { motion } from "framer-motion";

interface ExperienceItem {
  employerLogo: string;
  title: string;
  text: string;
  icons?: string[];
  startDate: string;
  endDate: string;
  summaryPoints: string[];
}

interface Props {
  experienceItems: ExperienceItem[];
}

function ExperienceCard({ experienceItems }: Props) {
  return (
    <>
      {experienceItems.map((item, index) => (
        <article
          key={index}
          className="flex flex-col rounded-1 items-center space-y-7 flex-shrink-0 s8:w-[90vw] sm:w-[450px] md:w-[550px] xl:w-[650px] h-[70vh] snap-center bg-[#292929] s8:p-7 12pro:p-10 hover:opacity-100 opacity-70 cursor-pointer transition-opacity duration-200 overflow-hidden text-center"
        >
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
            className="w-32 h-32 rounded-full xl:w-[150px] xl:h-[150px] object-cover object-center"
            src={item.employerLogo}
            alt=""
          />

          <div className="px-0 md:px-10">
            <h4 className="s8:text-2xl sm:text-3xl md:text-4xl font-light">
              {item.title}
            </h4>
            <p className="font-bold s8:text-xl md:text-2xl mt-1">{item.text}</p>
            <div className="flex justify-center space-x-2 my-2">
              {item.icons &&
                item.icons.map((icon, index) => (
                  <img
                    key={index}
                    className="h-10 w-10 rounded-full"
                    src={icon}
                    alt=""
                  />
                ))}
            </div>
            <p className="uppercase md:py-5 text-gray-300">
              {item.startDate} - {item.endDate}
            </p>

            <div
              className="overflow-y-auto max-h-32 s8:max-h-40 scrollbar-thin scrollbar-track-gray-400/20 scrollbar-thumb-[#D1FE17]/80 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#D1FE17]/60 xl:max-h-none xl:overflow-visible"
              tabIndex={0}
            >
              <ul className="list-disc space-y-4 ml-5 s8:text-sm sm:text-base md:text-lg text-left">
                {item.summaryPoints.map((point, index) => (
                  <li key={index}>{point}</li>
                ))}
              </ul>
            </div>
          </div>
        </article>
      ))}
    </>
  );
}

export default ExperienceCard;
