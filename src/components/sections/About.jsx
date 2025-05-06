import ContactBtn from "../ContactBtn";
import Description from "../Description";
import HeadingOne from "../HeadingOne";
import ImageCard from "../ImageCard";
import NextPageBtn from "../NextPageBtn";

const About = () => {
  const text = `I started out in architecture, but
          when I discovered web development, everything clicked. Coding quickly
          became more than a skill; it became the space where I feel most
          focused, creative, and at home. I can’t imagine doing anything else,
          and that passion drives everything I build.`;

  return (
    <section
      id="about-me"
      className="relative min-h-screen flex flex-col-reverse gap-8 items-center justify-center lg:justify-between lg:flex-row lg:mt-6 "
    >
      <div className="lg:w-[60%]  justfy-center text-center lg:text-right items-center">
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
        <Description text={text} />
        <div className="flex flex-col sm:flex-row mt-12 gap-4 w-full">
          <NextPageBtn
            addClass="w-[100%]"
            text=">>> Checkout My Skills"
            next="#my-skills"
          />
          <ContactBtn addClass="w-[100%]" />
        </div>
      </div>
      <div className="bubble w-[40%] md:w-[30%] bg-gradient-to-r from-[var(--color-accent-dark)] to-[var(--color-accent)] rounded-full">
        <ImageCard
          url={"/assets/images/my-photo.png"}
          classNames=""
          alt="My Photo"
        />
      </div>
    </section>
  );
};

export default About;
