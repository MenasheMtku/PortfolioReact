export default function Projects() {
  return (
    <section id="section-project" className="section projects">
      <div>
        <h2 className="section-heading">My Projects</h2>
      </div>
      <div className="projects-main-container">
        <div className="project-container project-card">
          <div className="project-image">
            <img
              src="img/movie_app_v_2_2023-05-24_005535.png"
              alt="Movie_App"
              loading="lazy"
            />
          </div>
          <div className="project-info">
            <h3 className="proj-title">Movie App</h3>
            <p className="proj-summary">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quas
              ratione vel inventore labore commodi modi quos culpa aut saepe!
              Alias!
            </p>
            <div className="proj-links">
              <a href="#" target="_blank" className="project-link">
                Check it Out
              </a>
              <a
                href="https://github.com/MenasheMtku/movie-app"
                target="_blank"
                rel="noreferrer"
                className="project-link"
              >
                <i className="fab fa-github"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
