import image from "../assets/Arbel.jpeg";
import Button from "./ui/Button";

export default function Hero() {
  return (
    <section id="home">
      <header className="flex h-[100dvh] w-full items-start justify-center px-4 pt-[4.5rem] md:items-center md:pt-0">
        <div className="grid w-[var(--max-width)] grid-flow-row grid-cols-1 items-center gap-14 md:grid-cols-[60%_40%] md:gap-8">
          {/* Text Section */}
          <div className="order-1 grid gap-4 pl-4 text-center md:order-[-1] md:text-left">
            <h2 className="text-[1.75rem] font-semibold sm:text-[2rem] lg:text-[2.25rem]">
              Hi, I am Menashe👋🏽
            </h2>
            <h1 className="text-[2rem] font-bold leading-tight sm:text-[2.5rem] lg:text-[3.5rem]">
              Frontend Web Developer
            </h1>
            <p className="text-[1.1rem] sm:text-[1.3rem] lg:text-[1.4rem]">
              I specialize in web development for organizations and businesses.
            </p>
            <>
              <a href="#projects" text="Go To Projects" type="button">
                <Button className="mx-auto flex w-max items-center justify-center rounded-md bg-primary px-[1rem] py-[0.7rem] font-semibold tracking-widest text-accent duration-500 ease-in md:mx-0">
                  Go To Projects
                </Button>
              </a>
            </>
          </div>

          {/* Image Section */}
          <div className="flex justify-center">
            <picture>
              <img
                className="h-[10rem] w-[10rem] rounded-full object-cover shadow-lg md:h-[15rem] md:w-[15rem]"
                src={image}
                alt="profile_image"
              />
            </picture>
          </div>
        </div>
      </header>
    </section>
  );
}
