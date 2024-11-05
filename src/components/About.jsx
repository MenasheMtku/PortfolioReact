import Title from "../components/CustomUI/Title";
import { Card } from "./ui/card";
const aboutLI = [
  "I graduate software engineer studies At ORT College in 2020.",
  "I am a frontend web developer with knowledge in HTML, CSS JavaScript",
  "In addition, I have experience in React and TailwindCSS.Therefore I can build scalable web applications efficiently and enabling rapid styling.",
  "I love creating beautiful, responsive websites that are both functional and user-friendly.",
  "When I'm not coding, you can find me probebly running orwatching Manchester United football game",
];

const skills = [
  { title: "Javascript", src: "./javascript.svg", alt: "javascript" },
  { title: "React", src: "./react.svg", alt: "react" },
  { title: "Next.js", src: "./nextjs.svg", alt: "nextjs" },
  { title: "TypeScript", src: "./typescript.svg", alt: "typescript" },
  { title: "Tailwind", src: "./tailwind.svg", alt: "tailwind css" },
  { title: "git", src: "./git.svg", alt: "git" },
  { title: "HTML", src: "./html.svg", alt: "html5" },
  { title: "CSS", src: "./css.svg", alt: "css" },
];

export default function About() {
  return (
    <section id="about">
      <div className="mx-auto">
        <Title className="section-title mb-10 text-center text-4xl font-bold">
          About Me
        </Title>
        <div className="grid place-items-center gap-4 p-4 md:grid-cols-2 md:py-10">
          {/* About Text */}
          <div className="rounded-lg p-2 shadow-sm">
            <ul className="space-y-4 text-[16px] leading-relaxed md:text-lg">
              {aboutLI.map((item) => (
                <li className="border-l-4 border-primary pl-4" key={item}>
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* Stack Section */}
          <div className="flex flex-col items-center rounded-lg p-2">
            <p className="mb-6 text-2xl font-semibold">My Stack</p>
            <div className="grid grid-cols-3 gap-4 md:grid-cols-4">
              {skills.map((item) => (
                <Card
                  key={item.title}
                  className="bg-slate-200 p-4 text-slate-800"
                >
                  <img
                    className="mx-auto mb-3 h-12 w-12 grayscale-[70%] duration-200 hover:grayscale-0"
                    src={item.src}
                    alt={item.title}
                  />
                  <p className="text-center text-sm">{item.title}</p>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// export default function About() {
//   return (
//     <section id="about">
//       <Title className="section-title">About Me</Title>
//       <div className="grid md:grid-cols-[60%_40%] gap-2 p-2 mx-0 my-4  justify-center place-items-center place-self-center">
//         <div className="about-p-container p-4">
//           <code>
//             <ul className="about-list">
//               {aboutLI.map(item => {
//                 return (
//                   <li className="p-2 max-w-[700px] text-[1.1rem]" key={item}>
//                     {item}
//                   </li>
//                 );
//               })}
//             </ul>
//           </code>
//         </div>
//         <div className="stack p-4 flex flex-col">
//           <p className="text-center p-3">My Stack</p>
//           <div className="grid grid-cols-3 gap-6  py-4 mt-5">
//             {skills.map(item => {
//               return (
//                 <div key={item.title} className="items-center justify-center">
//                   <img className=" size-12 mx-auto" src={item.src} />
//                   <p className="text-center py-1 px-2">{item.title}</p>
//                 </div>
//               );
//             })}
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }
