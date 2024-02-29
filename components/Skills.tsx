import React from "react";
import { motion } from "framer-motion";
import Skill from "./Skill";

type Props = {};
// TODO: Add a list of skills, including the skill name, icon path and proficiency level
const skillList = [
  {
    name: "JavaScript",
    iconPath:
      "https://images.g2crowd.com/uploads/product/image/social_landscape/social_landscape_96102ac6497377cd53da621075fe828e/sanity.png",
    proficiency: "90%",
  },
  {
    name: "HTML",
    iconPath:
      "https://images.g2crowd.com/uploads/product/image/social_landscape/social_landscape_96102ac6497377cd53da621075fe828e/sanity.png",
    proficiency: "90%",
  },
  {
    name: "CSS",
    iconPath:
      "https://images.g2crowd.com/uploads/product/image/social_landscape/social_landscape_96102ac6497377cd53da621075fe828e/sanity.png",
    proficiency: "90%",
  },
  {
    name: "React",
    iconPath:
      "https://images.g2crowd.com/uploads/product/image/social_landscape/social_landscape_96102ac6497377cd53da621075fe828e/sanity.png",
    proficiency: "85%",
  },
  {
    name: "TypeScript",
    iconPath:
      "https://images.g2crowd.com/uploads/product/image/social_landscape/social_landscape_96102ac6497377cd53da621075fe828e/sanity.png",
    proficiency: "85%",
  },
  {
    name: "Angular",
    iconPath:
      "https://images.g2crowd.com/uploads/product/image/social_landscape/social_landscape_96102ac6497377cd53da621075fe828e/sanity.png",
    proficiency: "75%",
  },
  {
    name: "Vue",
    iconPath:
      "https://images.g2crowd.com/uploads/product/image/social_landscape/social_landscape_96102ac6497377cd53da621075fe828e/sanity.png",
    proficiency: "85%",
  },
  {
    name: "Git",
    iconPath:
      "https://images.g2crowd.com/uploads/product/image/social_landscape/social_landscape_96102ac6497377cd53da621075fe828e/sanity.png",
    proficiency: "90%",
  },
  {
    name: "Node.js",
    iconPath:
      "https://images.g2crowd.com/uploads/product/image/social_landscape/social_landscape_96102ac6497377cd53da621075fe828e/sanity.png",
    proficiency: "70%",
  },
  {
    name: "Express.js",
    iconPath:
      "https://images.g2crowd.com/uploads/product/image/social_landscape/social_landscape_96102ac6497377cd53da621075fe828e/sanity.png",
    proficiency: "70%",
  },
  {
    name: "React Native",
    iconPath:
      "https://images.g2crowd.com/uploads/product/image/social_landscape/social_landscape_96102ac6497377cd53da621075fe828e/sanity.png",
    proficiency: "65%",
  },
  {
    name: "MongoDB",
    iconPath:
      "https://images.g2crowd.com/uploads/product/image/social_landscape/social_landscape_96102ac6497377cd53da621075fe828e/sanity.png",
    proficiency: "60%",
  },
  {
    name: "Python",
    iconPath:
      "https://images.g2crowd.com/uploads/product/image/social_landscape/social_landscape_96102ac6497377cd53da621075fe828e/sanity.png",
    proficiency: "70%",
  },
  {
    name: "Go",
    iconPath:
      "https://images.g2crowd.com/uploads/product/image/social_landscape/social_landscape_96102ac6497377cd53da621075fe828e/sanity.png",
    proficiency: "60%",
  },
  {
    name: "Rust",
    iconPath:
      "https://images.g2crowd.com/uploads/product/image/social_landscape/social_landscape_96102ac6497377cd53da621075fe828e/sanity.png",
    proficiency: "60%",
  },
  {
    name: "Solidity",
    iconPath:
      "https://images.g2crowd.com/uploads/product/image/social_landscape/social_landscape_96102ac6497377cd53da621075fe828e/sanity.png",
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
      <h3 className="absolute top-24 uppercase tracking-[20px] mr-[-20px] text-gray-500 text-2xl">
        Skills
      </h3>

      <h3 className="absolute top-36 uppercase tracking-[3px] text-gray-500 text-sm">
        Hover over a skill for current proficiency
      </h3>

      <div className="grid grid-cols-4 gap-5">
        {skillList.map((skill, index) => (
          <Skill
            key={index}
            name={skill.name}
            iconPath={skill.iconPath}
            proficiency={skill.proficiency}
          />
        ))}

        {/* <Skill />
        <Skill />
        <Skill />
        <Skill />
        <Skill />
        <Skill />
        <Skill />
        <Skill />
        <Skill />
        <Skill />
        <Skill />
        <Skill />
        <Skill />
        <Skill /> */}
      </div>
    </motion.div>
  );
}

export default Skills;
