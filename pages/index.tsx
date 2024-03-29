import Head from "next/head";
import { Inter } from "next/font/google";
import Header from "../components/Header";
import Hero from "../components/Hero";
import About from "../components/About";
import WorkExperience from "../components/WorkExperience";
import Skills from "../components/Skills";
import Projects from "../components/Projects";
import ContactMe from "../components/ContactMe";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <div className="bg-[rgb(36,36,36)] text-white h-screen snap-y snap-mandatory overflow-y-scroll overflow-x-hidden scroll-smooth z-0 scrollbar scrollbar-track-gray-400/20 scrollbar-thumb-[#F7AB0A]/80">
      <Head>
        <title>Jay&apos;s Portfolio</title>
        <meta
          name="description"
          content="A vibrant and interactive showcase of my skills and projects as a front-end and full-stack developer"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/Javicon.ico" />
      </Head>

      <Header />

      <section id="hero" className="snap-start">
        <Hero />
      </section>

      <section id="about" className="snap-center">
        <About />
      </section>

      <section id="skills" className="snap-start">
        <Skills />
      </section>

      <section id="projects" className="snap-start">
        <Projects />
      </section>

      <section id="experience" className="snap-center">
        <WorkExperience />
      </section>

      <section id="contact" className="snap-start">
        <ContactMe />
      </section>

      {/* back to the top footer */}
      <footer className="sticky bottom-5 w-full cursor-pointer text-gray-300">
        <div className="flex items-center justify-center">
          <Link href="#hero">
            <p className="text-sm uppercase tracking-wider">Back to top</p>
          </Link>
        </div>
      </footer>
    </div>
  );
}
