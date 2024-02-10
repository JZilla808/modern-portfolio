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
    imageUrl: "path_to_spacex_clone_image.png", // Replace with actual image path
    title: "SpaceX Clone",
    description:
      "A detailed replication of the official SpaceX website, created using pure HTML, CSS, and JavaScript.",
    link: "https://spacex-clone-kappa.vercel.app/",
  },
  {
    imageUrl: "path_to_instagram_clone_image.png", // Replace with actual image path
    title: "Instagram Clone",
    description:
      "A full-stack web app inspired by Instagram. It includes features such as real-time updates, image uploads, and guest login.",
    link: "https://instagramapp-mauve.vercel.app/",
  },
  {
    imageUrl: "path_to_go_web_app_image.png", // Replace with actual image path
    title: "Go Web App for Bookings (Bookings)",
    description:
      "A fast loading full-stack website for bookings and reservations. Built without using any front-end frameworks.",
    link: "https://golangbookings.jayzhou.work/",
  },
  {
    imageUrl: "path_to_ecommerce_site_image.png", // Replace with actual image path
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
      className="h-screen relative flex flex-col overflow-hidden text-left md:flex-row max-w-full justify-evenly mx-auto items-center z-0"
    >
      <h3 className="absolute top-24 uppercase tracking-[20px] mr-[-20px] text-gray-500 text-2xl">
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
            className="w-screen flex-shrink-0 snap-center flex flex-col space-y-5 items-center justify-center p-20 md:p-44 h-screen  "
          >
            <a
              href={projects[i].link}
              target="_blank"
              rel="noopener noreferrer"
            >
              <motion.img
                initial={{ y: -200, opacity: 0 }}
                transition={{ duration: 1.2 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                src={projects[i].imageUrl}
                alt=""
                style={{
                  maxWidth: "500px",
                  maxHeight: "500px",
                  objectFit: "cover",
                }}
              />
            </a>
            <div className="space-y-10 px-0 md:px-10 max-w-6xl">
              <a
                href={projects[i].link}
                target="_blank"
                rel="noopener noreferrer"
              >
                <h4 className="s8:text-xl 12pro:text-2xl sm:text-4xl font-semibold text-center">
                  <span className="underline decoration-[#F7AB0A]/50">
                    Project {i + 1} of {projects.length}:
                  </span>{" "}
                  {projects[i].title}
                </h4>
              </a>

              <p className="s8:text-base 12pro:text-lg md:text-left text-center">
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
