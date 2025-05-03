import ContactBtn from "../ContactBtn";
import HeadingOne from "../HeadingOne";
import NextPageBtn from "../NextPageBtn";
import { projects } from "../../../utils";
import ImageCard from "../../components/ImageCard";

const Projects = () => {
  return (
    <section
      id="my-works"
      className="relative min-h-screen pt-12 flex flex-col md:flex-row items-center justify-center md:justify-between gap-12"
    >
      <div className="grid grid-cols-2 gap-6  p-6 w-[50%] rounded-[5px]">
        {projects.map((project, index) => (
          <div
            className="cursor-pointer flex flex-col bg-gray-700/50 p-4 h-45 items-center text-center rounded-[16px] hover:bg-gray-700 hover:text-white transition duration-300 ease-in-out opacity-60 hover:opacity-100"
            key={index}
          >
            <h3 className="flex gap-1 text-[10px] font-bold text-[var(--color-accent-dark)]">
              <div className="bubble">{project.icon}</div> {project.title}
            </h3>
            <a href={project.url} target="_blank">
              <img
                src={project.image}
                className="rounded-xl border border-gray-600 my-2 "
                alt={project.title}
              />
            </a>

            <p className="text-[8px] text-gray-300 mt-1 tracking-[1px]">
              {project.description}
            </p>
            <div className="flex gap-1 mt-2">
              {project.tools.map((tool, ind) => {
                return (
                  <p
                    key={ind}
                    className="text-[0.45em] mx-1 px-[2px] rounded-[2px] tracking-widest text-gray-500 font-bold border-b-1 border-b-gray-600"
                  >
                    {tool}
                  </p>
                );
              })}
            </div>
          </div>
        ))}
      </div>
      <div className="flex flex-col w-[50%]  md:text-left">
        <h3 className="text-xs mb-1 text-white">
          Blog | Landing Page | Ecommerce Site | Portfolio
        </h3>
        <HeadingOne text="My Projects" />
        <p className="leading-4 md:leading-6 text-gray-500 text-xs tracking-[1px] mt-2">
          Here’s a selection of projects that reflect my growth as a developer.
          From launching my personal portfolio to showcase both creative and
          technical work, to writing and teaching through my blog, each project
          has been an intentional step forward in sharpening my skills and
          exploring new technologies. I've also built a high-converting landing
          page for a tech training platform aimed at career changers, where I
          focused on clarity, visual hierarchy, and responsive design.
          Currently, I am working on a culturally-rich e-commerce platform for
          African food products.
        </p>
        <div className="flex gap-4 mt-4">
          <ContactBtn addClass="w-[35%]" />
          <NextPageBtn
            text=">>> Checkout My Contacts"
            next="#my-contacts"
            addClass="w-[65%]"
          />
        </div>
      </div>
    </section>
  );
};

export default Projects;
