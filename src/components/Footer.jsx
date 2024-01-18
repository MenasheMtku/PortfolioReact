export default function Footer() {
  return (
    <footer id="main-footer">
      <div className="footer-content container">
        <p>&copy; 2023 Menashe Mtku</p>
        <div className="social">
          <a
            href="https://www.linkedin.com/in/menashe-mtku/"
            target="_blank"
            rel="noreferrer"
          >
            <i className="fab fa-linkedin"></i>
          </a>
          <a
            href="https://github.com/MenasheMtku"
            target="_blank"
            rel="noreferrer"
          >
            <i className="fab fa-github"></i>
          </a>
          <a href="">
            <i className="fab fa-facebook"></i>
          </a>
        </div>
        <a href="#" className="btt">
          {" "}
          <i className="fas fa-chevron-up"></i>{" "}
        </a>
      </div>
    </footer>
  );
}
