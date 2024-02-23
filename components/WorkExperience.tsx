import React from "react";
import { motion } from "framer-motion";
import ExperienceCard from "./ExperienceCard";

type Props = {};

// TODO: Update work experience, add employer logos in square format
const experienceItems = [
  {
    employerLogo: "/experiences/cnc.jpg",
    title: "IT Specialist",
    text: "CNC Motors",
    startDate: "Feb 2013",
    endDate: "Mar 2015",
    summaryPoints: [
      "Managed company's IT infrastructure, improving system efficiency by 30%.",
      "Provided technical support and training to staff, enhancing overall tech literacy.",
    ],
  },
  {
    employerLogo: "/experiences/ark.webp",
    title: "System Administrator",
    text: "Ark Information Consulting",
    startDate: "Mar 2015",
    endDate: "Jun 2016",
    summaryPoints: [
      "Administered network and system operations, ensuring 99.9% uptime.",
      "Implemented data backups and security protocols, reducing data loss incidents.",
    ],
  },
  {
    employerLogo: "/experiences/surefire.png",
    title: "Manager/System Administrator",
    text: "Eastern Spice Inc.",
    startDate: "Jun 2016",
    endDate: "Jun 2018",
    summaryPoints: [
      "Oversaw IT systems and managed a team of 5, improving workflow efficiency.",
      "Enhanced system security and performed regular maintenance, ensuring smooth operations.",
    ],
  },
  {
    employerLogo: "/experiences/gesoo.jpg",
    title: "UX/UI Designer",
    text: "Gesoo.com",
    startDate: "Jun 2018",
    endDate: "Jul 2020",
    summaryPoints: [
      "Designed intuitive user interfaces, increasing user engagement by 40%.",
      "Collaborated with developers to implement designs, ensuring consistency and functionality.",
    ],
  },
  {
    employerLogo: "/experiences/carinfo.png",
    title: "Co-founder",
    text: "Car Information Station",
    startDate: "Mar 2020",
    endDate: "Oct 2021",
    summaryPoints: [
      "Co-founded a media company serving top car dealerships in LA, specializing in music and car video production.",
      "Led the creative direction, including logo design, beat production, video shooting, and editing.",
    ],
  },
  {
    employerLogo: "/experiences/surefire2.png",
    title: "Founder & CEO",
    text: "Surefire Production",
    startDate: "Oct 2021",
    endDate: "Present",
    summaryPoints: [
      "Founded and operate a multimedia and web production company, specializing in music, beats, and web solutions for clients.",
      "Successfully managed projects and client relations, achieving a 95% client satisfaction rate with innovative and creative solutions.",
    ],
  },
];

function WorkExperience({}: Props) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 2 }}
      className="h-screen relative flex flex-col overflow-hidden text-left md:flex-row max-w-full px-10 justify-evenly mx-auto items-center "
    >
      <h3 className="absolute s8:top-16 12pro:top-20 sm:top-24 uppercase tracking-[20px] mr-[-20px] text-gray-500 text-2xl">
        Experience
      </h3>

      <div className="w-full flex s8:mt-20 12pro:mt-16 space-x-5 overflow-x-scroll p-10 snap-x snap-mandatory scrollbar scrollbar-track-gray-400/20 scrollbar-thumb-[#F7AB0A]/80">
        {/* <ExperienceCard />
        <ExperienceCard />
        <ExperienceCard />
        <ExperienceCard /> */}
        <ExperienceCard experienceItems={experienceItems} />
      </div>
    </motion.div>
  );
}

export default WorkExperience;
