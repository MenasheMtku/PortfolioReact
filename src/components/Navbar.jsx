// import React from "react";
export default function Navbar() {
  return (
    <header className="header">
      <nav className="nav">
        <a href="/" className="site-title">
          Menashe
        </a>

        <ul>
          <li className="active">
            <a href="#section-home">Home</a>
          </li>
          <li>
            <a href="#section-about">About</a>
          </li>
          <li>
            <a href="#section-project">Projects</a>
          </li>
          <li>
            <a href="#section-contact">contact</a>
          </li>
        </ul>
      </nav>
    </header>
  );
}
