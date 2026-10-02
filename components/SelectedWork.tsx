/** Product evidence stays static until a visitor deliberately plays a recorded demo. */
import { useState } from "react";
import Image from "next/image";
import { projects, archive } from "../data/portfolio";
import { Arrow } from "./PortfolioHeader";
export default function SelectedWork() {
  return (
    <section id="work" className="section work">
      <div className="section-heading">
        <h2>
          Selected <em>work</em>
        </h2>
        <p>
          From everyday commerce to applied AI.
          <br />A few things I’ve helped bring to life.
        </p>
      </div>
      {projects.map((project) => (
        <article className="project" key={project.name}>
          <div className="project-media">
            <Image
              src={`/project_stills/${project.image}.jpg`}
              width={1200}
              height={750}
              alt={`${project.name} application interface`}
              sizes="(max-width: 760px) 100vw, 55vw"
              className="project-image"
            />
            <RecordedDemo name={project.name} image={project.image} />
          </div>
          <div className="project-copy">
            <p className="project-category">{project.category}</p>
            <h3>{project.name}</h3>
            <h4>{project.title}</h4>
            <p>{project.description}</p>
            <ul
              className="stack"
              aria-label={`${project.name} technology stack`}
            >
              {project.stack.map((s) => (
                <li key={s}>{s}</li>
              ))}
            </ul>
            <details className="case-notes">
              <summary aria-label={`Read ${project.name} case notes`}>
                Read case notes <span aria-hidden="true">+</span>
              </summary>
              <div>
                <dl>
                  <dt>Role</dt>
                  <dd>{project.role}</dd>
                  <dt>The challenge</dt>
                  <dd>{project.challenge}</dd>
                  <dt>My contribution</dt>
                  <dd>{project.contribution}</dd>
                  <dt>Context</dt>
                  <dd>{project.scope}</dd>
                </dl>
              </div>
            </details>
            <a
              href={
                project.name === "FlippyHop"
                  ? project.url
                  : `/project_thumbnails/${project.image}.mp4`
              }
              target="_blank"
              rel="noopener noreferrer"
              className="text-link"
            >
              {project.name === "FlippyHop"
                ? "Play FlippyHop"
                : "Open recorded demo"}
              <Arrow />
              <span className="sr-only"> (opens in new tab)</span>
            </a>
            {project.name !== "FlippyHop" && (
              <p className="availability">
                Live site unavailable at review; this recording preserves the
                work.
              </p>
            )}
          </div>
        </article>
      ))}
      <details className="archive">
        <summary>
          <span>More projects & experiments</span>
          <span className="archive-count">9 projects</span>
          <span aria-hidden="true">+</span>
        </summary>
        <div className="archive-grid">
          {archive.map(([name, description, image, url]) => (
            <article key={name}>
              <Image
                src={`/project_stills/${image}.jpg`}
                alt={`${name} interface preview`}
                width={600}
                height={375}
                sizes="(max-width: 760px) 90vw, 30vw"
              />
              <h3>{name}</h3>
              <p>{description}</p>
              <a
                className="archive-recording"
                href={`/project_thumbnails/${image}.mp4`}
              >
                Recorded demo <Arrow />
              </a>
              {url ? (
                <a href={url} target="_blank" rel="noopener noreferrer">
                  Original deployment <Arrow />
                  <span className="sr-only"> (opens in new tab)</span>
                </a>
              ) : null}
            </article>
          ))}
        </div>
      </details>
    </section>
  );
}

function RecordedDemo({ name, image }: { name: string; image: string }) {
  const [open, setOpen] = useState(false);
  return (
    <details
      className="demo-disclosure"
      onToggle={(event) => setOpen(event.currentTarget.open)}
    >
      <summary aria-label={`Watch ${name} recorded demo`}>
        Watch recorded demo
      </summary>
      {open && (
        <video
          controls
          playsInline
          preload="none"
          poster={`/project_stills/${image}.jpg`}
          aria-label={`${name} recorded demonstration`}
        >
          <source src={`/project_thumbnails/${image}.mp4`} type="video/mp4" />
          Your browser does not support video.
        </video>
      )}
    </details>
  );
}
