import ContactBtn from "../ContactBtn";
import HeadingOne from "../HeadingOne";
import ImageCard from "../ImageCard";


const About = () => {
  return (
    <section
      id="about-me"
      className="relative min-h-screen pt-12 flex flex-col-reverse md:flex-row items-center justify-center md:justify-between gap-12 md:gap-0"
    >
      <div className="md:w-[60%] justfy-left md:mr-14 text-center md:text-right items-center">
        <h3 className="text-xs">
          Hello,{" "}
          <span className="text-white font-bold text-xl md:text-2xl">I AM</span>
        </h3>
        <HeadingOne text="Oloche Aboje" />
        <h2 className="text-xs">
          <span className="text-white font-bold text-xl md:text-2xl">
            FRONT END
          </span>{" "}
          Developer
        </h2>
        <p className="leading-4 md:leading-6 text-gray-500 mt-4 text-xs md:text-sm tracking-[1px]">
          I started out in architecture, drawn to design and structure — but
          when I discovered web development, everything clicked. Coding quickly
          became more than a skill; it became the space where I feel most
          focused, creative, and at home. I can’t imagine doing anything else,
          and that passion drives everything I build.
        </p>
        <div className="flex mt-8 gap-4">          
          <a className="w-[65%] text-center border border-[var(--color-accent)] text-gray-400 text-xs md:text-sm py-2 rounded-md hover:bg-[var(--color-accent)] hover:text-white font-bold transition duration-300 ease-in-out" href="#my-skills">{">>>"} Checkout MySkills</a>
          <ContactBtn />
        </div>
      </div>
      <div className="p-px bg-gradient-to-r from-[var(--color-accent)] to-[var(--color-accent-dark)] rounded-xl md:ml-14 w-[70%] md:w-[40%] justify-center">
        <ImageCard
          url={"../../src/assets/images/my-photo.png"}
          className={"bg-gray-900/95 rounded-xl"}
          alt="My Photo"
        />
      </div>
    </section>
  );
};

export default About;
