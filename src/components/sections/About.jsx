import { getImgUrl } from "../../../utils";

const About = () => {
  return (
    <section
      id="my-story"
      className="text-gray-400 min-h-screen flex flex-col items-end justify-between relative px-10 py-36 md:p-36"
    >
      <div className="w-[70%] justfy-left mr-18">
        <h3 className="text-1xl ">
          Hello, <span className="text-white font-bold text-1xl md:text-3xl">I Am</span>
        </h3>
        <h1 className="text-3xl md:text-5xl text-[var(--color-accent)] font-bold">
          Oloche Aboje
        </h1>
        <h2 className="text-3xl">
          <span className="text-white font-bold text-1xl md:text-3xl">Front End</span> Developer
        </h2>
        <p className="leading-6 text-gray-400 mt-8 text-sm tracking-[2px]">I started out in architecture, drawn to design and structure — but when I discovered web development, everything clicked. Coding quickly became more than a skill; it became the space where I feel most focused, creative, and at home. I can’t imagine doing anything else, and that passion drives everything I build.</p>
      </div>
      <img className="p-2 bg-gray-500/10 rounded-xl shadow-xl-white ml-18 w-[30%]" src={getImgUrl("../../src/assets/images/my-photo.png")} alt="" />
    </section>
  );
};

export default About;
