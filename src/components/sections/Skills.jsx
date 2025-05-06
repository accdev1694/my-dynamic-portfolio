import HeadingOne from "../HeadingOne";
import ImageCard from "../ImageCard";
import ContactBtn from "../ContactBtn";
import NextPageBtn from "../NextPageBtn";
import Description from "../Description";

const Skills = () => {
  const text = `I began my front-end journey with a bootcamp with the University of
          Birmingham, where I built a strong base in HTML, CSS, JavaScript, and
          React. I then took the Harvard’s CS50 Python course. I have continued to build several projects to consolidate my skills in web development 
          and creating real value through great user experiences.`;
          
  return (
    <section
      id="my-skills"
      className="relative min-h-screen flex flex-col items-center justify-center gap-6 sm:gap-12 text-center lg:pt-12"
    >
      <div className="">
        <HeadingOne text="Skills" />
        <Description text={text} />

        <div className="border border-gray-700 rounded-xl flex flex-col lg:flex-row lg:items-center lg:justify-center lg:gap-6 mt-6 sm:mt-12 w-full p-2 sm:p-6">
          <div className="flex flex-col lg:w-[50%]">
            <h3 className="text-xs font-bold text-[var(--color-accent-dark)]">
              WEB DESIGN SKILLS
            </h3>
            <div className="grid grid-cols-4 gap-6 bg-gray-700/50 p-2 rounded-xl mt-2">
              {/* IU/UX Design Skill */}
              <div className="flex flex-col items-center mt-1 gap-2">
                <ImageCard
                  alt="Ux Design"
                  classNames="bubble-slow w-10 p-[0.4em] sm:p-2 border-1 border-gray-600 hover:bg-gray-800  transition-all duration-300 ease-in-out"
                  url="/assets/images/skills/uiux.png"
                />
                <p className="text-[0.5em] sm:text-[0.7em] text-center">UI/UXD</p>
              </div>

              {/* Figma Skill */}
              <div className="flex flex-col items-center mt-1 gap-2">
                <ImageCard
                  alt="Figma Logo"
                  classNames="bubble w-10 p-[0.4em] sm:p-2 rounded-full border-1 border-gray-600 hover:bg-gray-800 transition-all duration-300 ease-in-out"
                  url="/assets/images/skills/figma.png"
                />
                <p className="text-[0.5em] sm:text-[0.7em] text-center">Figma</p>
              </div>

              {/* Framer */}
              <div className="flex flex-col items-center mt-1 gap-2">
                <ImageCard
                  alt="Framer Logo"
                  classNames="bubble-slow w-10 p-[0.4em] sm:p-2 bg-gray-700 rounded-full border-1 border-gray-600 hover:bg-gray-800 transition-all duration-300 ease-in-out"
                  url="/assets/images/skills/framer.png"
                />
                <p className="text-[0.5em] sm:text-[0.7em] text-center">Framer</p>
              </div>

              {/* Webflow Skill */}
              <div className="flex flex-col items-center mt-1 gap-2">
                <ImageCard
                  alt="WebFlow Logo"
                  classNames="bubble w-10 border-1 p-[0.4em] sm:p-2 bg-gray-700 rounded-full border-1 border-gray-600 hover:bg-gray-800 transition-all duration-300 ease-in-out"
                  url="/assets/images/skills/webflow.png"
                />
                <p className="text-[0.5em] sm:text-[0.7em] text-center">Webflow</p>
              </div>
            </div>
          </div>
          <div className="flex flex-col lg:w-[50%] mt-2 lg:mt-0">
            <h3 className="text-xs font-bold text-[var(--color-accent-dark)]">
              WEB DEVELOPMENT SKILLS
            </h3>
            <div className="grid grid-cols-4 bg-gray-700/50 gap-6 p-2 rounded-xl mt-2">
              {/* Firebase Skill */}
              <div className="flex flex-col items-center mt-1 gap-2">
                <ImageCard
                  alt="Firebase Logo"
                  classNames="bubble-slow w-10 p-[0.4em] sm:p-2 border-1 border-gray-600 hover:bg-gray-800 transition-all duration-300 ease-in-out"
                  url="/assets/images/skills/firebase.png"
                />
                <p className="text-[0.5em] sm:text-[0.7em] text-center">Firebase</p>
              </div>

              {/* React Skill */}
              <div className="flex flex-col items-center mt-1 gap-2">
                <ImageCard
                  alt="Firebase Logo"
                  classNames="bubble w-10 p-[0.4em] sm:p-2 border-1 border-gray-600 hover:bg-gray-800 rounded-full  transition-all duration-300 ease-in-out"
                  url="/assets/images/skills/react.png"
                />
                <p className="text-[0.5em] sm:text-[0.7em] text-center">React</p>
              </div>

              {/* Tailwind Skill */}
              <div className="flex flex-col items-center mt-1 gap-2">
                <ImageCard
                  alt="Firebase Logo"
                  classNames="bubble-slow w-10 p-[0.4em] sm:p-2 border-1 border-gray-600 hover:bg-gray-800 rounded-full transition-all duration-300 ease-in-out"
                  url="/assets/images/skills/tailwind.png"
                />
                <p className="text-[0.5em] sm:text-[0.7em] text-center">Tailwind</p>
              </div>

              {/* Python Skill */}
              <div className="flex flex-col items-center mt-1 gap-2">
                <ImageCard
                  alt="Firebase Logo"
                  classNames="bubble w-10 p-[0.4em] sm:p-2 rounded-full border-1 border-gray-600 hover:bg-gray-800 transition-all duration-300 ease-in-out"
                  url="/assets/images/skills/python.png"
                />
                <p className=" text-[0.5em] sm:text-[0.7em] text-center">Python</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col sm:flex-row justify-between gap-2 w-full">
        <NextPageBtn
          addClass="sm:w-[50%]"
          text=">>> Checkout My Projects"
          next="#my-works"
        />
        <ContactBtn addClass="w-full sm:w-[50%]" />
      </div>
    </section>
  );
};

export default Skills;
