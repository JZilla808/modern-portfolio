import React from "react";
import { motion } from "framer-motion";

type Props = {};

export default function BackgroundCircles({}: Props) {
  return (
    <motion.div
      initial={{
        scale: 0.1,
        opacity: 0,
      }}
      animate={{
        scale: [0.5, 1.2, 2, 3.5, 1],
        opacity: [0.1, 0.3, 0.5, 0.8, 1],
        borderRadius: ["20%", "30%", "50%", "80%", "20%"],
      }}
      transition={{
        duration: 3,
      }}
      className="relative flex justify-center items-center"
    >
      <div className="absolute border border-[#333333] rounded-full h-[200px] w-[200px] mt-52 animate-ping" />
      <div className="absolute border border-[#333333] rounded-full h-[300px] w-[300px] mt-52 animate-pulse" />
      <div className="absolute border border-[#333333] rounded-full h-[500px] w-[500px] mt-52 " />
      <div className="rounded-full border border-[#F7AB0A] opacity-20 h-[650px] w-[650px] absolute mt-52 animate-pulse " />
      <div className="absolute border border-[#333333] rounded-full h-[800px] w-[800px] mt-52 " />
    </motion.div>
  );
}
