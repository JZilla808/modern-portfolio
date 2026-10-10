import Link from "next/link";
/** Print-friendly engineering resume uses the same verified content as the portfolio. */
import Head from "next/head";
import { experience, projects } from "../data/portfolio";
import PortfolioHeader from "../components/PortfolioHeader";
export default function Resume() {
  return (
    <>
      <Head>
        <title>Jay Zhou — Engineering Résumé</title>
        <meta
          name="description"
          content="Jay Zhou, frontend and AI product engineer. Professional experience and selected projects."
        />
      </Head>
      <div className="site-shell">
        <PortfolioHeader />
        <main className="resume section">
          <h1>Jay Zhou</h1>
          <p className="resume-subtitle">Frontend &amp; AI Product Engineer</p>
          <p>
            Los Angeles, California · English &amp; Mandarin
            <br />
            <a href="mailto:contact@jayzhou.work">
              contact@jayzhou.work
            </a> ·{" "}
            <a href="https://github.com/JZilla808">github.com/JZilla808</a>
          </p>
          <div className="resume-actions">
            <button className="button" onClick={async () => { await document.fonts.ready; window.print(); }}>
              Print / save as PDF
            </button>
            <Link className="text-link" href="/">
              Back to portfolio
            </Link>
          </div>
          <section className="section">
            <h2>Profile</h2>
            <p>
              Design-minded engineer building responsive product interfaces and
              AI-powered web applications with React, Next.js, TypeScript and
              Node.js. Experience across mobile ordering, payments,
              conversational AI and independent web products.
            </p>
          </section>
          <section className="experience section">
            <h2>Experience</h2>
            {experience.map((e) => (
              <article key={e.company} className="experience-row">
                <p className="dates">{e.dates}</p>
                <div>
                  <h3>{e.company}</h3>
                  <p className="role">{e.role}</p>
                  <p>{e.text}</p>
                </div>
              </article>
            ))}
          </section>
          <section className="section">
            <h2>Selected projects</h2>
            {projects.map((p) => (
              <article className="resume-project" key={p.name}>
                <h3>{p.name}</h3>
                <p>{p.description}</p>
                <p className="dates">{p.stack.join(" · ")}</p>
              </article>
            ))}
          </section>
          <section className="section">
            <h2>Technical focus</h2>
            <p>
              React · Next.js · TypeScript · HTML · CSS · Node.js · Git · OpenAI
              API · Stripe · Firebase · Supabase · AI-assisted development
            </p>
          </section>
        </main>
      </div>
    </>
  );
}
