import React from "react";
import { motion } from "framer-motion";

type Props = {};

function Projects({}: Props) {
  const projects = [1, 2, 3, 4, 5];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className="h-screen relative flex flex-col overflow-hidden text-left md:flex-row max-w-full justify-evenly mx-auto items-center z-0"
    >
      <h3 className="absolute top-24 uppercase tracking-[20px] mr-[-20px] text-gray-500 text-2xl">
        Projects
      </h3>

      <div className="relative w-full flex overflow-x-scroll overflow-y-hidden snap-x snap-mandatory z-20 scrollbar scrollbar-track-gray-400/20 scrollbar-thumb-[#F7AB0A]/80">
        {projects.map((project, i) => (
          <div
            key={i}
            className="w-screen flex-shrink-0 snap-center flex flex-col space-y-5 items-center justify-center p-20 md:p-44 h-screen  "
          >
            <motion.img
              initial={{ y: -200, opacity: 0 }}
              transition={{ duration: 1.2 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              src="https://cdn.sanity.io/images/ltuexkre/production/af7ca99b5a796d0698cf9121a4a0795b5022b6be-666x375.png"
              alt=""
            />

            <div className="space-y-10 px-0 md:px-10 max-w-6xl">
              <h4 className="s8:text-xl 12pro:text-2xl sm:text-4xl font-semibold text-center">
                <span className="underline decoration-[#F7AB0A]/50">
                  Project {i + 1} of {projects.length}:
                </span>{" "}
                ChatGPT clone
              </h4>

              <p className="s8:text-base 12pro:text-lg md:text-left text-center">
                ChaseGPT is a modern and responsive UI for ChatGPT. V1 recreates
                vanilla UI using new technologies such as React.js, Firebase,
                TypeScript, OpenAI API, Next.js, Tailwind,SWR, and libraries
                like React Select and Hot Toast Notifications.
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Background stripe */}
      <div className="absolute w-full 12pro:top-[30%] sm:top-[25%] bg-[#F7AB0A]/10 left-0 s8:h-[300px] 12pro:h-[400px] sm:h-[500px] -skew-y-12" />
    </motion.div>
  );
}

export default Projects;
