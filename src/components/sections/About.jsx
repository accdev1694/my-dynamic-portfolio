import ImageCard from "../ImageCard";

const About = () => {
  return (
    <section
      id="my-story"
      className=" text-gray-400 h-screen flex flex-col-reverse md:flex-row items-center justify-center md:justify-between relative px-8 md:px-56 pb-12"
    >
      <div className="md:w-[70%] justfy-left md:mr-18 text-center md:text-right items-center">
        <h3 className="text-xs">
          Hello,{" "}
          <span className="text-white font-bold text-xl md:text-2xl">I AM</span>
        </h3>
        <h1 className=" text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-[var(--color-accent-dark)] to-[var(--color-accent)] md:pb-2">
          Oloche Aboje
        </h1>
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
      </div>
      <div className="p-px bg-gradient-to-r from-[var(--color-accent)] to-[var(--color-accent-dark)]  rounded-xl md:ml-18 w-[70%] md:w-[30%] justify-center m-auto">
        <ImageCard url={"../../src/assets/images/my-photo.png"} width={"bg-gray-900/95 rounded-xl"} alt="My Photo"/>
      </div>
    </section>
  );
};

export default About;
