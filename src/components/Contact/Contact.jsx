import { IoSend } from "react-icons/io5";
import Title from "../../components/ui/Title";
import Button from "../ui/Button";
// icons
import { FaLinkedin } from "react-icons/fa";
import { SiGithub } from "react-icons/si";
import { FaWhatsapp } from "react-icons/fa";

const formInput =
  "w-full rounded-md border border-foreGround p-4 transition-all duration-300 ease-in-out focus:ring-2 focus:ring-blue-500 placeholder:text-foreGround text-[18px] text-black shadow-lg bg-stone-200 dark:bg-stone-600 border-black border-[2px] ";

export default function Contact() {
  return (
    <section id="contact" className="py-0">
      <div className="container mx-auto max-w-3xl px-6">
        <Title className="mb-8 text-center text-3xl font-bold">
          Contact Me
        </Title>
        <div className="grid grid-cols-1 gap-4 py-5 md:grid-cols-[10%_90%]">
          <div className="flex items-center justify-center gap-4 p-0 md:flex-col md:justify-start">
            <a
              href="https://www.linkedin.com/in/menashe-mtku/"
              target="_blank"
              className="duration-300 hover:text-blue-500"
            >
              <FaLinkedin size={30} />
            </a>

            <a
              href="https://github.com/MenasheMtku"
              target="_blank"
              className="duration-300"
            >
              <SiGithub size={30} />
            </a>
            <a
              href={`https://wa.me/0542661126`}
              target="_blank"
              rel="noopener noreferrer"
              className="duration-300 hover:text-green-600"
            >
              <FaWhatsapp size={30} />
            </a>
          </div>
          <form
            className="grid grid-cols-1 gap-6"
            method="post"
            data-netlify="true"
            data-netlify-recaptcha="true"
            action="https://api.web3forms.com/submit"
          >
            <input
              type="hidden"
              name="access_key"
              value="cc4e4606-baba-4acc-a294-aa153b23575e"
            />

            <input
              id="name"
              type="text"
              name="name"
              placeholder="Your Name"
              className={formInput}
            />

            <input
              id="email"
              type="email"
              name="email"
              required
              placeholder="Email Address"
              className={formInput}
            />

            <textarea
              id="message"
              name="message"
              rows="6"
              placeholder="Write your message..."
              className={formInput + " resize-none"}
            ></textarea>

            <div className="text-center">
              <Button
                type="submit"
                className="flex w-full items-center justify-center gap-2 rounded-xl bg-blue-600 px-5 py-3 font-semibold text-white transition-all duration-300 ease-in-out hover:bg-blue-700 md:w-max"
              >
                Send
                <IoSend className="ml-2" />
              </Button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}

{
  /* <section id="contact">
      <Title>Contact Me</Title>
      <div className="mx-auto max-w-[700px] items-center p-[0.8rem]">
        <form
          className="grid grid-cols-1 gap-4"
          method="post"
          data-netlify="true"
          data-netlify-recaptcha="true"
          action="https://api.web3forms.com/submit"
        >
          <div className={classes.formGroup}>
            <input
              type="hidden"
              name="access_key"
              value="cc4e4606-baba-4acc-a294-aa153b23575e"
            />

            <input
              id="name"
              type="text"
              name="name"
              placeholder="Your Name"
              className={formInput}
            />

            <input
              id="email"
              type="email"
              name="email"
              required
              placeholder="Email Address"
              className={formInput}
            />

            <textarea
              name="message"
              rows="6"
              id="message"
              type="text"
              placeholder="Write message.."
              className={`${formInput}` + " resize-none"}
            ></textarea>

            <Button
              type="submit"
              className="mx-auto inline-flex w-[25%] items-center justify-center gap-2 rounded-md border-[1px] border-nature_3 bg-accent p-4 font-semibold text-nature_3 duration-300 ease-in md:mx-0"
            >
              Send
              <IoSend />
            </Button>
          </div>
        </form>
      </div>
    </section> */
}
