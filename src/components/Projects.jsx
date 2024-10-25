import Title from "./CustomUI/Title";

import { FaExternalLinkAlt, FaGithubSquare } from "react-icons/fa";
import "react-lazy-load-image-component/src/effects/blur.css";
import projects from "../_data/projects";

export default function Projects() {
  return (
    <section id="projects">
      <div className="mx-auto">
        <Title className="mb-10 text-center text-4xl font-bold">
          My Projects
        </Title>
        <div className="grid gap-8 px-8 sm:grid-cols-2 md:py-10 lg:grid-cols-3">
          {projects.map((item) => (
            <div
              key={item.id}
              className="transform overflow-hidden rounded-2xl bg-stone-200 shadow-lg dark:bg-stone-500"
            >
              <picture>
                <div className="h-48">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="h-full w-full object-cover"
                  />
                </div>
              </picture>
              <div className="flex flex-col gap-2 p-6">
                <h3 className="mb-2 text-xl font-semibold">{item.title}</h3>
                <p className="mb-4">{item.description}</p>
                <div className="flex justify-between">
                  <a
                    href={item.siteUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex gap-2 rounded-md bg-foreGround p-2 font-semibold text-backGround hover:bg-nature_2"
                  >
                    Live <FaExternalLinkAlt size={20} />
                  </a>
                  <a
                    href={item.codeUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex gap-2 rounded-md bg-foreGround p-2 font-semibold text-backGround hover:bg-nature_2"
                  >
                    Code <FaGithubSquare size={20} />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// <div
//   key={item.id}
//   className="group relative overflow-hidden rounded-lg shadow-lg"
// >

//   <LazyLoadImage
//     effect="blur"
//     src={item.image}
//     className="h-full w-full object-cover grayscale-[96%] transition-transform duration-300"
//     alt={item.title}
//     loading="lazy"
//   />

//   <div className="absolute inset-0 flex flex-col items-center justify-evenly bg-black bg-opacity-90 p-4 text-center opacity-0 transition-opacity duration-700 ease-in-out group-hover:opacity-100">
//     <h3 className="mb-2 text-[1.3rem] font-semibold text-primary md:text-2xl">
//       {item.title}
//     </h3>
//     <p className="mb-4 max-w-[340px] text-sm leading-relaxed text-nature_3 md:text-[1.1rem]">
//       {item.description}
//     </p>
//     <div className="flex w-full justify-evenly">
//       <a
//         href={item.siteUrl}
//         target="_blank"
//         rel="noopener noreferrer"
//       >
//         <Button className="rounded-lg bg-nature_1 px-4 py-2 text-accent transition-colors duration-200 hover:bg-accent hover:text-primary">
//           <FaLink className="text-[1.2rem] md:text-[1.6rem]" />
//         </Button>
//       </a>
//       <a
//         href={item.codeUrl}
//         target="_blank"
//         rel="noopener noreferrer"
//       >
//         <Button className="rounded-lg bg-nature_1 px-4 py-2 text-accent transition-colors duration-200 hover:bg-accent hover:text-primary">
//           <FaCode className="text-[1.2rem] md:text-[1.6rem]" />
//         </Button>
//       </a>
//     </div>
//   </div>
// </div>
