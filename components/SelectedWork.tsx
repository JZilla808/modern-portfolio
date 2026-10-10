/** Every project shows its recorded demo inline; nothing loads or plays until a visitor presses play. */
import { projects, archive } from "../data/portfolio";
import { Arrow } from "./PortfolioHeader";
import RecordedDemo from "./RecordedDemo";
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
                <span className="case-notes-label">Read case notes</span>
                <span aria-hidden="true">+</span>
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
            {project.name === "FlippyHop" ? (
              <a
                href={project.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-link"
              >
                Play FlippyHop
                <Arrow />
                <span className="sr-only"> (opens in new tab)</span>
              </a>
            ) : (
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
              <RecordedDemo name={name} image={image} compact />
              <h3>{name}</h3>
              <p>{description}</p>
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
