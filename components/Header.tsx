import React from "react";
import { SocialIcon } from "react-social-icons";
import { motion } from "framer-motion";
import { useRouter } from "next/router";

type Props = {};

export default function Header({}: Props) {
  const router = useRouter();

  const handleClick = () => {
    router.push("#contact");
  };

  return (
    <header className="sticky top-0 p-5 flex items-start justify-between max-w-7xl mx-auto z-20 xl:items-center">
      <motion.div
        initial={{
          x: -500,
          opacity: 0,
          scale: 0.5,
        }}
        animate={{ x: 0, opacity: 1, scale: 1 }}
        transition={{ duration: 1.5 }}
        className="flex flex-row items-center"
      >
        <SocialIcon
          url="https://github.com/JZilla808"
          fgColor="gray"
          bgColor="transparent"
        />
        <SocialIcon
          url="https://www.linkedin.com/in/jay-zhou-24a33a184"
          fgColor="gray"
          bgColor="transparent"
        />
        <SocialIcon
          url="https://twitter.com/jayzhoupro"
          fgColor="gray"
          bgColor="transparent"
        />
      </motion.div>

      {/* Contact icon */}

      <motion.div
        initial={{
          x: 500,
          opacity: 0,
          scale: 0.5,
        }}
        animate={{
          x: 0,
          opacity: 1,
          scale: 1,
        }}
        transition={{ duration: 1.5 }}
        className="flex flex-row items-center text-gray-300 cursor-pointer"
      >
        <div className="inline-flex items-center" onClick={handleClick}>
          <SocialIcon
            className="cursor-pointer"
            network="email"
            fgColor="gray"
            bgColor="transparent"
          />

          <p className="uppercase hidden md:inline-flex text-sm text-gray-400">
            Get In Touch
          </p>
        </div>
      </motion.div>
    </header>
  );
}
