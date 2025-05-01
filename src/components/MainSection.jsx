import About from "./sections/About";
import Contacts from "./sections/Contacts";
import Projects from "./sections/Projects";
import Skills from "./sections/Skills";

const MainSection = () => {
  return <div className=" bg-[--var(color-bg)] px-8 md:px-56 z-60">
    <About />
    <Skills />
    <Projects />
    <Contacts />
    
    
    
  </div>;
};

export default MainSection;
