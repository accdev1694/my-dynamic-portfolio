import ContactBtn from "../ContactBtn";
import HeadingOne from "../HeadingOne";
import { projects } from "../../../utils";
import Description from "../Description";

const Projects = () => {
  const text = `Here’s a selection of projects that reflect my growth. My personal
          portfolio, a blog. I've also built a landing page for a tech training.
          I am also working on an e-commerce platform for African foods.`

  return (
    <section
      id="my-works"
      className="relative min-h-screen lg:pt-12 flex flex-col-reverse lg:flex-row items-center justify-center lg:justify-between gap-6  lg:gap-18"
    >
      <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-2 gap-2 md:gap-4 lg:w-[50%] rounded-[5px]">
        {projects.map((project, index) => (
          <div
            className="cursor-pointer flex flex-col bg-gray-700/50 p-2 sm:p-4  items-center text-center rounded-[16px] hover:bg-gray-700 hover:text-white transition duration-300 ease-in-out opacity-60 hover:opacity-100 h-full"
            key={index}
          >
            <h3 className="flex gap-1 text-[10px] sm:text-[12px]  font-bold text-[var(--color-accent-dark)]">
              <div className="bubble">{project.icon}</div> {project.title}
            </h3>
            <a href={project.url} target="_blank">
              <img
                src={project.image}
                className="rounded-lg border border-gray-600 my-2 "
                alt={project.title}
              />
            </a>

            <p className="text-[8px] sm:text-[10px] text-gray-300 mt-1 tracking-[1px]">
              {project.description}
            </p>
            <div className="flex mt-2">
              {project.tools.map((tool, ind) => {
                return (
                  <p
                    key={ind}
                    className="text-[0.45em] sm:mx-1 px-[2px] rounded-[2px] tracking-widest text-gray-500 font-bold "
                  >
                    {tool}
                  </p>
                );
              })}
            </div>
          </div>
        ))}
      </div>
      <div className="flex flex-col lg:w-[50%] text-center items-center lg:items-left lg:justify-left lg:text-left lg:gap-2">
        <h3 className="text-[0.5em]  tracking-[1px] sm:text-[0.6em] mb-1 text-white w-full">
          Blog | Landing Page | Ecommerce Site | Portfolio
        </h3>
        <div className="w-full">
          <HeadingOne text="My Projects" />
        </div>

        <Description text={text} />
        <div className="flex md:flex-col md:gap-4 gap-2 md:mt-6 mt-2 w-full">
          <ContactBtn addClass="w-full" />
        </div>
      </div>
    </section>
  );
};

export default Projects;
