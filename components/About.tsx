import React from "react";
import { motion } from "framer-motion";

type Props = {};

export default function About({}: Props) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 2 }}
      className="flex flex-col relative h-screen text-center md:text-left md:flex-row max-w-7xl sm:px-10 s8:px-6 justify-evenly mx-auto items-center"
    >
      <h3 className="absolute top-24 uppercase tracking-[20px] mr-[-20px] text-gray-500 text-2xl landscape:s8:hidden portrait:s8:hidden">
        About
      </h3>

      <motion.img
        initial={{
          x: -200,
          opacity: 0,
        }}
        transition={{
          duration: 1,
        }}
        whileInView={{ x: 0, opacity: 1 }}
        viewport={{ once: true }}
        src="/portraitFull.jpg"
        className="-mb-20 mt-12 md:mb-0 md:mt-10 flex-shrink-0 sm:w-56 sm:h-56 rounded-full object-cover  md:rounded-lg s8:w-48 s8:h-48 md:w-64 md:h-96 xl:w-[500px] xl:h-[600px]"
      />

      <div className="space-y-10 px-0 md:px-10">
        <h4 className="s8:text-2xl 12pro:text-3xl sm:text-4xl font-semibold">
          Here is a{" "}
          <span className="underline decoration-[#F7AB0A]/50">little</span>{" "}
          background
        </h4>
        <p className="s8:text-sm 12pro:text-base text-justify">
          Greetings, I&apos;m Jay, a Los Angeles-based full stack developer and
          music producer with a burning passion for leveraging technology to
          empower artists. 🌟 As a US citizen, I&apos;m fully authorized to work
          in the United States and am eager to contribute my skills to
          innovative and forward-thinking teams. Driven by the desire to make a
          difference, I&apos;ve honed my skills in a wide array of languages and
          frameworks, including HTML, CSS, JavaScript, TypeScript, Python, Go,
          Rust, React, Next.js, and more. My unique blend of technical expertise
          and creative vision allows me to craft innovative solutions that
          bridge the gap between art and technology. 💻🎵 With a keen eye for
          detail and a commitment to excellence, I&apos;m ready to contribute my
          skills to a forward-thinking team and create groundbreaking digital
          experiences. Let&apos;s collaborate and bring your vision to life! 🚀
        </p>
      </div>
    </motion.div>
  );
}
