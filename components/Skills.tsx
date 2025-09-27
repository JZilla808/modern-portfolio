import React from "react";
import { motion } from "framer-motion";
import Skill from "./Skill";

type Props = {};
const skillList = [
  {
    name: "JavaScript",
    iconPath: "/skills/javascript.png",
    proficiency: "90%",
  },
  {
    name: "HTML",
    iconPath: "/skills/html.png",
    proficiency: "90%",
  },
  {
    name: "CSS",
    iconPath: "/skills/css.png",
    proficiency: "90%",
  },
  {
    name: "React",
    iconPath: "/skills/react.png",
    proficiency: "85%",
  },
  {
    name: "TypeScript",
    iconPath: "/skills/typescript.png",
    proficiency: "85%",
  },
  {
    name: "Angular",
    iconPath: "/skills/angular.png",
    proficiency: "75%",
  },
  {
    name: "Vue",
    iconPath: "/skills/vue.png",
    proficiency: "85%",
  },
  {
    name: "Git",
    iconPath: "/skills/git.png",
    proficiency: "90%",
  },
  {
    name: "Node.js",
    iconPath: "/skills/nodejs.png",
    proficiency: "70%",
  },
  {
    name: "Express.js",
    iconPath: "/skills/express.jpg",
    proficiency: "70%",
  },
  {
    name: "React Native",
    iconPath: "/skills/react-native.jpeg",
    proficiency: "65%",
  },
  {
    name: "MongoDB",
    iconPath: "/skills/mongodb.png",
    proficiency: "60%",
  },
  {
    name: "Python",
    iconPath: "/skills/python.ico",
    proficiency: "70%",
  },
  {
    name: "Go",
    iconPath: "/skills/golang.png",
    proficiency: "60%",
  },
  {
    name: "Rust",
    iconPath: "/skills/rust.png",
    proficiency: "60%",
  },
  {
    name: "Solidity",
    iconPath: "/skills/solidity.png",
    proficiency: "50%",
  },
];

function Skills({}: Props) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className="flex relative flex-col text-center md:text-left xl:flex-row max-w-[2000px] xl:px-10 min-h-screen justify-center xl:space-y-0 mx-auto items-center"
    >
      <h3 className="absolute top-24 uppercase tracking-[20px] mr-[-20px] text-gray-500 text-2xl ">
        Skills
      </h3>

      <h3 className="absolute top-36 uppercase tracking-[3px] text-gray-500 text-sm">
        Hover over a skill for more info
      </h3>

      <div className="grid grid-cols-4 sm:grid-cols-5 md:grid-cols-6 lg:grid-cols-7 gap-4 sm:gap-2 mt-20 sm:mt-24 md:mt-28 xl:mt-32 w-full max-w-6xl px-4">
        {skillList.map((skill, index) => (
          <div key={index} className="flex items-center justify-center">
            <Skill
              name={skill.name}
              iconPath={skill.iconPath}
              proficiency={skill.proficiency}
              directionDown={index % 2 === 0}
            />
          </div>
        ))}
      </div>
    </motion.div>
  );
}

export default Skills;
