import "./App.css";
import Medusae from "./medusae/Medusae.jsx";
import "./medusae/medusae.css";
import { siteContent } from "./siteContent.js";

const MY_DEFAULT_CONFIG = {
  cursor: {
    radius: 0.065,
    strength: 3,
    dragFactor: 0.015,
  },
  halo: {
    outerOscFrequency: 2.6,
    outerOscAmplitude: 0.76,
    outerOscJitterStrength: 0.025,
    outerOscJitterSpeed: 0.3,
    radiusBase: 2.4,
    radiusAmplitude: 0.5,
    shapeAmplitude: 0.75,
    rimWidth: 1.8,
    outerStartOffset: 0.4,
    outerEndOffset: 2.2,
    scaleX: 1.3,
    scaleY: 1,
  },
  particles: {
    baseSize: 0.03,
    activeSize: 0.018,
    blobScaleX: 0.7,
    blobScaleY: 0.49,
    rotationSpeed: 0.1,
    rotationJitter: 0.2,
    cursorFollowStrength: 1,
    oscillationFactor: 1,
    colorBase: "#0000ff",
    colorOne: "#4285f5",
    colorTwo: "#eb4236",
    colorThree: "#faba03",
  },
  background: {
    color: "#ffffff",
  },
};

function App() {
  return (
    <div className="app" style={{ backgroundColor: MY_DEFAULT_CONFIG.background.color }}>
      <section className="my-project-overlay" aria-label={siteContent.navLabel}>
        <div className="intro-copy">
          <h1>{siteContent.title}</h1>
          <p>{siteContent.subtitle}</p>
        </div>

        <nav className="project-nav" aria-label={siteContent.projectListLabel}>
          {siteContent.projects.map((project) => (
            <a className="project-card" href={project.href} key={project.title}>
              <span className="project-card__tag">{project.tag}</span>
              <span className="project-card__body">
                <strong>{project.title}</strong>
                <small>{project.description}</small>
              </span>
              <span className="project-card__arrow" aria-hidden="true">
                &rarr;
              </span>
            </a>
          ))}
        </nav>

        <footer className="site-footer">
          <span>{siteContent.footer.copyright}</span>
          {siteContent.footer.icpHref ? (
            <a href={siteContent.footer.icpHref}>{siteContent.footer.icpText}</a>
          ) : (
            <span>{siteContent.footer.icpText}</span>
          )}
        </footer>
      </section>

      <Medusae config={MY_DEFAULT_CONFIG} />
    </div>
  );
}

export default App;
