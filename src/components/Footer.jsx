import React from "react";
import { FaLinkedin } from "react-icons/fa";
import { SiGithub } from "react-icons/si";

export default function Footer() {
  const currentDate = new Date();
  const year = currentDate.getFullYear();

  return (
    <div className="h-32 w-full bg-foreGround p-8 text-backGround">
      <footer className="mx-auto flex h-full max-w-[var(--max-width)] items-center justify-between px-4">
        <div className="flex w-full flex-col items-center justify-between gap-4 sm:flex-row sm:gap-0">
          <div className="text-xl font-medium">
            <p>&copy; {year} Menashe Mtku</p>
          </div>
          <div className="flex gap-6 text-2xl">
            <a
              href="https://www.linkedin.com/in/menashe-mtku/"
              target="_blank"
              className="duration-300 hover:text-primary"
            >
              <FaLinkedin size={30} />
            </a>
            <a
              href="https://github.com/MenasheMtku"
              target="_blank"
              className="duration-300 hover:text-primary"
            >
              <SiGithub size={30} />
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
