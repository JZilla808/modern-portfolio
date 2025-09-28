import { Cursor, useTypewriter } from "react-simple-typewriter";

import BackgroundCircles from "./BackgroundCircles";
import Link from "next/link";
import React from "react";

type Props = {};

export default function Hero({}: Props) {
  const [text, count] = useTypewriter({
    words: [
      "Hi, The Name's Jay Zhou",
      "Guy-who-loves-Coffee.tsx",
      "<ButLovesToCodeMore />",
    ],
    loop: true,
    delaySpeed: 2000,
  });

  return (
    <div className="h-screen flex flex-col space-y-8 items-center justify-center text-center overflow-hidden">
      <BackgroundCircles />
      <img
        className="relative 
      h-36 w-36 mx-auto rounded-full object-cover
      "
        src="/portrait-circle-50.png"
        alt="Portrait"
      />
      <div className="z-20">
        <h2 className="text-sm uppercase text-gray-500 pb-2 tracking-[15px]  ">
          Software Engineer
        </h2>
        <h1 className="s8:text-xl 12pro:text-2xl sm:text-3xl md:text-5xl lg:text-6xl font-semibold s8:px-7 sm:px-10">
          <span>{text}</span>
          <Cursor cursorColor="#d3fe4f" />
        </h1>
        <div className="pt-5">
          <Link href="#about">
            <button className="heroButton">About</button>
          </Link>
          <Link href="#skills">
            <button className="heroButton">Skills</button>
          </Link>
          <Link href="#projects">
            <button className="heroButton">Projects</button>
          </Link>
          <div className="skill-container hidden landscape:max-h-[500px]:lg:block lg:block portrait:md:block">
            <Link href="#experience">
              <button className="heroButton">Experience</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
