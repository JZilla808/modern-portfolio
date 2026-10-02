import Link from "next/link";
/** Recruiter-facing portfolio: native page scroll, evidence-led work and explicit media playback. */
import Head from "next/head";
import Image from "next/image";
import PortfolioHeader, { Arrow } from "../components/PortfolioHeader";
import SelectedWork from "../components/SelectedWork";
import PortfolioAbout from "../components/PortfolioAbout";
export default function Home() {
  return (
    <>
      <Head>
        <title>Jay Zhou — Frontend & AI Product Engineer</title>
        <meta
          name="description"
          content="Jay Zhou builds thoughtful interfaces and useful AI applications. Explore selected work in QR commerce, conversational AI and interactive web experiences."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="canonical" href="https://portfolio.jayzhou.work/" />
        <link rel="icon" href="/Javicon.ico" />
        <meta
          property="og:title"
          content="Jay Zhou — Thoughtful interfaces. Useful AI."
        />
        <meta
          property="og:description"
          content="Frontend & AI product engineering. Selected work, experience and contact."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://portfolio.jayzhou.work/" />
        <meta
          property="og:image"
          content="https://portfolio.jayzhou.work/social-preview.png"
        />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>
      <a className="skip-link" href="#main">
        Skip to content
      </a>
      <div id="top" className="site-shell">
        <PortfolioHeader />
        <main id="main">
          <section className="hero" aria-labelledby="hero-title">
            <div className="hero-copy">
              <h1 id="hero-title">
                Thoughtful
                <br />
                interfaces.
                <br />
                <em>Useful AI.</em>
              </h1>
              <p>
                I’m Jay Zhou, a frontend &amp; AI product engineer building
                clear, usable experiences for the web.
              </p>
              <div className="hero-actions">
                <a className="button" href="#work">
                  Explore my work <Arrow />
                </a>
                <a className="text-link" href="#contact">
                  Get in touch <Arrow />
                </a>
              </div>
            </div>
            <div className="portrait-composition">
              <Image
                src="/portraitFull.jpg"
                alt="Jay Zhou"
                width={640}
                height={800}
                priority
                sizes="(max-width: 760px) 80vw, 34vw"
                className="portrait"
              />
              <p className="portrait-caption">
                Design-minded.
                <br />
                Product-driven.
              </p>
            </div>
          </section>
          <SelectedWork />
          <PortfolioAbout />
          <section id="contact" className="section contact">
            <h2>
              Let’s build
              <br />
              something <em>useful.</em>
            </h2>
            <div>
              <p>
                Have a product to build, an interface to improve, or an
                engineering role in mind?
              </p>
              <a className="contact-email" href="mailto:contact@jayzhou.work">
                contact@jayzhou.work <Arrow />
              </a>
              <p className="contact-note">
                Email opens your preferred mail app.
              </p>
              <div className="social-links">
                <a
                  href="https://github.com/JZilla808"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  GitHub <Arrow />
                </a>
                <a
                  href="https://www.linkedin.com/in/jay-zhou-1016832ba/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  LinkedIn <Arrow />
                </a>
                <Link href="/resume">
                  Résumé <Arrow />
                </Link>
              </div>
            </div>
          </section>
        </main>
        <footer>
          <p>© {new Date().getFullYear()} Jay Zhou</p>
          <p>Built with care, in California.</p>
          <a href="#top">
            Back to top <Arrow />
          </a>
        </footer>
      </div>
    </>
  );
}
