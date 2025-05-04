import About from "./sections/About";
import Contact from "./sections/Contact";
import Projects from "./sections/Projects";
import Skills from "./sections/Skills";

const MainSection = () => {
  return <div className="px-14 lg:px-24 xl:px-42 z-60">
    <About />
    <Skills />
    <Projects />
    <Contact />
    
    
    
  </div>;
};

export default MainSection;
