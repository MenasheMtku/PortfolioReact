// import { useState } from "react";
// import reactLogo from "./assets/react.svg";
// import viteLogo from "/vite.svg";
import "./App.css";

import About from "./components/About";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";
import Welcome from "./components/Welcome";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  // const [count, setCount] = useState(0);

  return (
    <div>
      <Navbar />
      <Welcome />
      <About />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
