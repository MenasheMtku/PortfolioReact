import React, { useState, useEffect } from "react";
import { useContext } from "react";
import { ThemeContext } from "../../context/ThemeContext";
import { push as Menu } from "react-burger-menu";
import { IoMoonSharp } from "react-icons/io5";
import { LuSunMoon } from "react-icons/lu";
import ThemeToggle from "../ui/ThemeToggle";
// import styles from "./Navbar.module.css";
import "./Navbar.css";

const links = [
  { id: 1, title: "Home", href: "#home" },
  { id: 2, title: "About", href: "#about" },
  { id: 3, title: "Projects", href: "#projects" },
  { id: 4, title: "Contact", href: "#contact" },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeLink, setActiveLink] = useState("home");

  const handleStateChange = (state) => {
    setIsOpen(state.isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  useEffect(() => {
    const sections = links.map((link) => document.querySelector(link.href));

    const observerOptions = {
      root: null, // Observe the viewport
      rootMargin: "0px",
      threshold: 0.6, // Trigger when 60% of the section is visible
    };

    const observerCallback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const id = entry.target.getAttribute("id");
          if (id) setActiveLink(id);
        }
      });
    };

    const observer = new IntersectionObserver(
      observerCallback,
      observerOptions,
    );

    sections.forEach((section) => {
      if (section) observer.observe(section);
    });
    // Handle the case when scrolled to the top (Home section)
    const handleScroll = () => {
      if (window.scrollY === 0) {
        setActiveLink("home");
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      sections.forEach((section) => {
        if (section) observer.unobserve(section);
      });
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <div className="fixed left-0 right-0 top-0 z-50 flex h-[var(--nav-height)] max-w-[100%] bg-backGround p-4 text-foreGround">
        <nav className="mx-auto flex w-full max-w-[var(--max-width)] items-center justify-center px-4 align-baseline md:justify-between">
          <a
            href="#contact"
            className="w-full text-2xl font-bold md:text-[2rem]"
          >
            Hire Me <span className="text-primary/80">.</span>
          </a>
          <div className="mr-8 bg-none px-4 text-backGround">
            <ThemeToggle />
          </div>
          {/* Burger Menu for mobile */}
          <div className="md:hidden">
            <Menu
              right
              width={"280px"}
              isOpen={isOpen}
              onStateChange={handleStateChange}
              className="bg-accent text-foreGround md:hidden"
            >
              {links.map((item) => (
                <a
                  key={item.id}
                  href={item.href}
                  className={`menu-item mt-3 w-full p-4 text-[1.4rem] font-semibold text-nature_3 ${
                    activeLink === item.href.slice(1) ? "text-primary" : ""
                  }`}
                  onClick={() => {
                    setActiveLink(item.href.slice(1));
                    closeMenu(); // Close menu after selecting link
                  }}
                >
                  {item.title}
                </a>
              ))}
            </Menu>
          </div>

          <div
            className={`md:flex md:items-center ${
              isOpen ? "block" : "hidden"
            } md:block`}
          >
            <ul className="flex w-full justify-evenly gap-5 font-semibold md:w-auto md:items-center md:justify-center md:gap-6 md:text-[1.2rem] lg:gap-10 lg:text-[1.4rem]">
              {links.map((item) => {
                return (
                  <li key={item.id} className="">
                    <a
                      href={item.href}
                      className={`hidden md:block ${
                        activeLink === item.href.slice(1)
                          ? "text-primary duration-300 ease-out"
                          : ""
                      }`}
                    >
                      {item.title}
                    </a>
                  </li>
                );
              })}
            </ul>
          </div>
        </nav>
      </div>
    </>
  );
};

export default Navbar;
