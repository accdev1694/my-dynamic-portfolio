import ContactBtn from "../ContactBtn";
import HeadingOne from "../HeadingOne";
import ImageCard from "../ImageCard";
import NextPageBtn from "../NextPageBtn";


const About = () => {
  return (
    <section
      id="about-me"
      className="relative min-h-screen  flex flex-col-reverse lg:flex-row items-center justify-center lg:justify-between gap-4 lg:gap-0"
    >
      <div className="lg:w-[60%] justfy-center text-center lg:text-right items-center">
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
        <p className="leading-4 text-gray-500 mt-2 text-xs tracking-[1px]">
          I started out in architecture, drawn to design and structure — but
          when I discovered web development, everything clicked. Coding quickly
          became more than a skill; it became the space where I feel most
          focused, creative, and at home. I can’t imagine doing anything else,
          and that passion drives everything I build.
        </p>
        <div className="flex flex-col mt-8 gap-4">          
          <NextPageBtn addClass="w-[100%]" text=">>> Checkout My Skills" next="#my-skills"/>
          <ContactBtn addClass="w-[100%]"/>
        </div>
      </div>
      <div className="bubble w-[50%] md:w-[40%] bg-gradient-to-r from-[var(--color-accent-dark)] to-[var(--color-accent)] rounded-full">
        <ImageCard
          url={"../../src/assets/images/my-photo.png"}
          classNames=""
          alt="My Photo"
        />
      </div>
    </section>
  );
};

export default About;
