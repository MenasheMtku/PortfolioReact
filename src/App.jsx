import React from "react";
// Components
import Footer from "./components/Footer";
import Navbar from "./components/Navbar/Navbar";
// components
import About from "./components/About";
import Contact from "./components/Contact/Contact";
import Projects from "./components/Projects";
import Hero from "./components/Hero";

const App = () => {
  return (
    <>
      <div className="mx-auto max-w-[var(--max-width)]">
        <Navbar />
        <Hero />
        <About />
        <Projects />
        <Contact />
      </div>
      <Footer />
    </>
  );
};

export default App;
