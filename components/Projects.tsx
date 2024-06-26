import React from "react";
import { motion } from "framer-motion";
import { useRef } from "react";

type Props = {};

type Project = {
  imageUrl: string;
  title: string;
  description: string;
  link: string;
};

const projectsList: Project[] = [
  {
    imageUrl: "/project_thumbnails/chasegpt_demo.gif",
    title: "ChatGPT Clone (ChaseGPT)",
    description: "A modern, responsive full-stack web app inspired by ChatGPT.",
    link: "https://www.chasegpt.com/",
  },
  {
    imageUrl: "/project_thumbnails/image_generator.gif",
    title: "ChatGPT AI Image Generator",
    description:
      "A full-stack web app that utilizes the microservices architecture to generate images based on user prompts.",
    link: "https://image.chasegpt.com/",
  },
  {
    imageUrl: "/project_thumbnails/weather_app.gif",
    title: "ChatGPT Powered Weather App",
    description:
      "A comprehensive weather app with AI-powered weather forecasts.",
    link: "https://chasegpt-ai-weather-app.vercel.app/",
  },
  {
    imageUrl: "/project_thumbnails/chunespot_demo.gif",
    title: "Spotify Clone (ChuneSpot)",
    description:
      "A full-stack music streaming app with authentication, built-in audio player, uploads, likes, search, payments and subscriptions.",
    link: "https://www.chunespot.com/",
  },
  {
    imageUrl: "/project_thumbnails/tweepia_demo.gif",
    title: "Twitter Clone (Tweepia)",
    description:
      "A full-stack Twitter-inspired web app that features user authentication, real-time microblogging, image uploads, and hot toast notifications.",
    link: "https://www.tweepia.com/",
  },
  {
    imageUrl: "/project_thumbnails/ngflix_demo.gif",
    title: "Netflix-Inspired Site",
    description:
      "A pure client-side rendering movie and TV show information site with real-time data, search functionality, video player, similar shows, and pagination.",
    link: "https://ng-flix-jade.vercel.app/",
  },
  {
    imageUrl: "/project_thumbnails/spacex_clone_demo.gif",
    title: "SpaceX Clone",
    description:
      "A detailed replication of the official SpaceX website, created using pure HTML, CSS, and JavaScript.",
    link: "https://spacex-clone-kappa.vercel.app/",
  },
  {
    imageUrl: "/project_thumbnails/instagramapp_demo.gif",
    title: "Instagram Clone",
    description:
      "A full-stack web app inspired by Instagram. It includes features such as real-time updates, image uploads, and guest login.",
    link: "https://instagramapp-mauve.vercel.app/",
  },
  {
    imageUrl: "/project_thumbnails/golang_bookings_demo.gif",
    title: "Go Web App for Bookings (Bookings)",
    description:
      "A fast loading full-stack website for bookings and reservations. Built without using any front-end frameworks.",
    link: "https://golangbookings.jayzhou.work/",
  },
  {
    imageUrl: "/project_thumbnails/supabolo_demo.gif",
    title: "E-commerce Site (Supabolo Clothing)",
    description:
      "An e-commerce site with a minimalist design that features authentication, advanced state management, and Stripe integration for payments.",
    link: "https://supabolo.com/",
  },
];

function Projects({}: Props) {
  const projects = projectsList;
  const projectListRef = useRef<HTMLDivElement>(null);

  const scrollProjectList = (direction: "left" | "right") => {
    if (projectListRef.current) {
      projectListRef.current.scrollBy({
        top: 0,
        left: direction === "left" ? -window.innerWidth : window.innerWidth,
        behavior: "smooth",
      });
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className="h-screen relative flex flex-col overflow-hidden text-left md:flex-row max-w-full justify-evenly mx-auto items-center z-0 "
    >
      <h3 className="absolute top-24 uppercase tracking-[20px] mr-[-20px] text-gray-500 text-2xl landscape:s8:hidden">
        Projects
      </h3>

      <button
        onClick={() => scrollProjectList("left")}
        className="absolute left-20 z-30 text-white text-4xl hidden md:block"
      >
        &lt;
      </button>

      <div
        ref={projectListRef}
        className="relative w-full flex overflow-x-scroll overflow-y-hidden snap-x snap-mandatory z-20 scrollbar scrollbar-track-gray-400/20 scrollbar-thumb-[#F7AB0A]/80"
      >
        {projects.map((project, i) => (
          <div
            key={i}
            className="w-screen flex-shrink-0 snap-center flex flex-col space-y-3 sm:space-y-5 items-center justify-center p-4 sm:p-8 md:p-20 lg:p-44 h-screen"
          >
            <a
              href={projects[i].link}
              target="_blank"
              rel="noopener noreferrer"
            >
              <motion.img
                initial={{ y: -100, opacity: 0 }}
                transition={{ duration: 1 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                src={projects[i].imageUrl}
                alt=""
                className="max-w-[200px] max-h-[200px] portrait:max-w-[350px] portrait:max-h-[300px] sm:max-w-[150px] sm:max-h-[150px] md:max-w-[300px] md:max-h-[300px] lg:max-w-[400px] lg:max-h-[400px] xl:max-w-[500px] xl:max-h-[500px] 2xl:max-w-[600px] 2xl:max-h-[600px] object-cover"
              />
            </a>
            <div className="space-y-3 sm:space-y-5 px-2 sm:px-4 md:px-10 max-w-6xl">
              <a
                href={projects[i].link}
                target="_blank"
                rel="noopener noreferrer"
              >
                <h4 className="text-lg sm:text-xl md:text-2xl lg:text-4xl font-semibold text-center">
                  <span className="underline decoration-[#F7AB0A]/50">
                    Project {i + 1} of {projects.length}:
                  </span>{" "}
                  {projects[i].title}
                </h4>
              </a>

              <p className="text-sm sm:text-base md:text-lg text-center">
                {projects[i].description}
              </p>
            </div>
          </div>
        ))}
      </div>

      <button
        onClick={() => scrollProjectList("right")}
        className="absolute right-20 z-30 text-white text-4xl hidden md:block"
      >
        &gt;
      </button>

      {/* Background stripe */}
      <div className="absolute w-full 12pro:top-[30%] sm:top-[25%] bg-[#F7AB0A]/10 left-0 s8:h-[300px] 12pro:h-[400px] sm:h-[500px] -skew-y-12" />
    </motion.div>
  );
}

export default Projects;
