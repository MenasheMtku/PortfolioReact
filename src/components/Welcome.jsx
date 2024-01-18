import me from "../assets/MyPhoto.png";

export default function Welcome() {
  return (
    <section id="section-home" className="section">
      <div className="hero-content">
        <div className="section-1">
          <h1 className="s-1">Hi, I am Menashe👋🏽</h1>
          <h2 className="s-2">
            <span className="front">F</span>ront En
            <span className="end">d</span>
            Web Developer
          </h2>
          <p className="s-4">
            I Specialize In Web Development For Freelancers And Buisnesses.
          </p>
          <a href="#section-project" className="btn-cv">
            Go To Projects
          </a>
        </div>
        <div className="section-2">
          <img src={me} alt="profile_image" />
        </div>
      </div>
    </section>
  );
}
