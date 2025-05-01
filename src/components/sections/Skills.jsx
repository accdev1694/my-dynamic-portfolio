import Blur from "../Blur";
import HeadingOne from "../HeadingOne";
import ImageCard from "../ImageCard";
import ContactBtn from "../ContactBtn";
import NextPageBtn from "../NextPageBtn";

const Skills = () => {
  return (
    <section
      id="my-skills"
      className="relative min-h-screen pt-12 flex flex-col items-center justify-center gap-12 text-center"
    >
      <Blur />
      <div className="">
        <HeadingOne text="Skills" />
        <p className="leading-4 md:leading-6 text-gray-500 mt-4 text-xs tracking-[1px]">
          I began my front-end journey with a bootcamp with the University of
          Birmingham, where I built a strong base in HTML, CSS, JavaScript, and
          React. That experience sparked my hunger to go deeper, leading me to
          take the Harvard’s CS50 Python course. Since then, I’ve kept on
          sharpening my front-end skills — focused on writing clean code,
          building intuitive UIs, and creating real value through great user
          experiences.
        </p>

        <div className="border border-gray-700 rounded-xl flex mt-12">
          <div className="flex flex-col w-[50%] p-4">
            <h3 className="text-xs font-bold text-[var(--color-accent-dark)]">
              WEB DESIGN SKILLS
            </h3>
            <div className="grid grid-cols-4 gap-6 bg-gray-700/50 p-2 rounded-xl mt-4">
              {/* IU/UX Design Skill */}
              <div className="flex flex-col items-center mt-1 gap-2">
                <ImageCard
                  alt="Ux Design"
                  classNames="bubble-slow w-10 p-2 border-1 border-gray-600 hover:bg-gray-800  transition-all duration-300 ease-in-out"
                  url="../../src/assets/images/skills/uiux.png"
                />
                <p className="text-[10px] text-center">UI/UXD</p>
              </div>

              {/* Figma Skill */}
              <div className="flex flex-col items-center mt-1 gap-2">
                <ImageCard
                  alt="Figma Logo"
                  classNames="bubble w-10 p-2 rounded-full border-1 border-gray-600 hover:bg-gray-800 transition-all duration-300 ease-in-out"
                  url="../../src/assets/images/skills/figma.png"
                />
                <p className="text-[10px] text-center">Figma</p>
              </div>

              {/* Framer */}
              <div className="flex flex-col items-center mt-1 gap-2">
                <ImageCard
                  alt="Framer Logo"
                  classNames="bubble-slow w-10 p-2 bg-gray-700 rounded-full border-1 border-gray-600 hover:bg-gray-800 transition-all duration-300 ease-in-out"
                  url="../../src/assets/images/skills/framer.png"
                />
                <p className="text-[10px] text-center">Framer</p>
              </div>

              {/* Webflow Skill */}
              <div className="flex flex-col items-center mt-1 gap-2">
                <ImageCard
                  alt="WebFlow Logo"
                  classNames="bubble w-10 border-1 p-2 bg-gray-700 rounded-full border-1 border-gray-600 hover:bg-gray-800 transition-all duration-300 ease-in-out"
                  url="../../src/assets/images/skills/webflow.png"
                />
                <p className="text-[10px] text-center">Webflow</p>
              </div>
            </div>
          </div>
          <div className="flex flex-col w-[50%] p-4">
            <h3 className="text-xs font-bold text-[var(--color-accent-dark)]">
              WEB DEVELOPMENT SKILLS
            </h3>
            <div className="grid grid-cols-4 bg-gray-700/50 gap-6 p-2 rounded-xl mt-4">
              {/* Firebase Skill */}
              <div className="flex flex-col items-center mt-1 gap-2">
                <ImageCard
                  alt="Firebase Logo"
                  classNames="bubble-slow w-10 p-2 border-1 border-gray-600 hover:bg-gray-800 transition-all duration-300 ease-in-out"
                  url="../../src/assets/images/skills/firebase.png"
                />
                <p className="text-[10px] text-center">Firebase</p>
              </div>

              {/* React Skill */}
              <div className="flex flex-col items-center mt-1 gap-2">
                <ImageCard
                  alt="Firebase Logo"
                  classNames="bubble w-10 p-2 border-1 border-gray-600 hover:bg-gray-800 rounded-full  transition-all duration-300 ease-in-out"
                  url="../../src/assets/images/skills/react.png"
                />
                <p className="text-[10px] text-center">React</p>
              </div>

              {/* Tailwind Skill */}
              <div className="flex flex-col items-center mt-1 gap-2">
                <ImageCard
                  alt="Firebase Logo"
                  classNames="bubble-slow w-10 p-2 border-1 border-gray-600 hover:bg-gray-800 rounded-full transition-all duration-300 ease-in-out"
                  url="../../src/assets/images/skills/tailwind.png"
                />
                <p className="text-[10px] text-center">Tailwind</p>
              </div>

              {/* Python Skill */}
              <div className="flex flex-col items-center mt-1 gap-2">
                <ImageCard
                  alt="Firebase Logo"
                  classNames="bubble w-10 p-2 rounded-full border-1 border-gray-600 hover:bg-gray-800 transition-all duration-300 ease-in-out"
                  url="../../src/assets/images/skills/python.png"
                />
                <p className="text-[10px] text-center">Python</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-between gap-4 w-[60%]">
        <NextPageBtn addClass="w-[50%]" text=">>> Checkout My Projects" next="#my-works" />
        <ContactBtn addClass="w-[50%]"/>
      </div>
    </section>
  );
};

export default Skills;
