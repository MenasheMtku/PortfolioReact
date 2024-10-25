import React, { useContext, useEffect } from "react";

import { IoMoon } from "react-icons/io5";
import { MdSunny } from "react-icons/md";

import { ThemeContext } from "../../context/ThemeContext";

const ThemeToggle = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);
  const iconSize = 25;

  useEffect(() => {
    document.documentElement.classList.remove("light", "dark");
    document.documentElement.classList.add(theme);
  }, [theme]);

  return (
    <button
      className="rounded-full bg-nature_2 p-2 text-black"
      onClick={toggleTheme}
    >
      {theme === "light" ? (
        <IoMoon size={iconSize} />
      ) : (
        <MdSunny size={iconSize} />
      )}
    </button>
  );
};

export default ThemeToggle;
