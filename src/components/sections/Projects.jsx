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
      <div className="grid grid-cols-2 gap-6 border border-gray-700 p-6 w-[50%] rounded-[5px]">
        {projects.map((project, index) => (
          <div
            className="cursor-pointer flex flex-col bg-gray-700/50 p-4 h-45 items-center text-center rounded-[4px] hover:bg-gray-700 hover:text-white transition duration-300 ease-in-out"
            key={index}
          >
            <h3 className=" text-[10px] font-bold text-[var(--color-accent-dark)]">
              {project.title}
            </h3>
            <a href={project.url} target="_blank">
              <img
                src={project.image}
                className="rounded-xl border-1 border-gray-600 my-1"
                alt={project.title}
              />
            </a>

            <p className="text-[8px] text-gray-400 mt-2">
              {project.description}
            </p>
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
