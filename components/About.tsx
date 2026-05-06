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
      <h3 className="absolute top-24 uppercase tracking-[20px] mr-[-20px] text-gray-500 text-2xl hide-mobile-portrait">
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
        src="/portraitFull.png"
        className="-mb-20 mt-12 md:mb-0 md:mt-10 flex-shrink-0 sm:w-56 sm:h-56 rounded-full object-cover  md:rounded-lg s8:w-48 s8:h-48 md:w-64 md:h-96 xl:w-[500px] xl:h-[600px]"
      />

      <div className="space-y-10 px-0 md:px-10">
        <h4 className="s8:text-2xl 12pro:text-3xl sm:text-4xl font-semibold hide-mobile-portrait">
          Here is a{" "}
          <span className="underline decoration-[#D1FE17]/50">little</span>{" "}
          background
        </h4>
        <p className="s8:text-sm 12pro:text-base text-justify">
          I&apos;m Jay, an AI-native product engineer in Los Angeles building
          AI-powered applications and agentic workflows from prototype to
          production. I use Cursor, Windsurf, Claude Code, OpenAI Codex, and
          Google Antigravity in daily development to move faster, explore better
          implementation paths, and tighten feedback loops. My core stack
          includes React, Next.js, TypeScript, Go, Rust, and Python, with a focus
          on rapid prototyping, practical LLM integrations, and polished product
          experiences.
        </p>
      </div>
    </motion.div>
  );
}
