import About from "./sections/About";
import Contact from "./sections/Contact";
import Projects from "./sections/Projects";
import Skills from "./sections/Skills";

const MainSection = () => {
  return <div className="px-6 lg:px-18 xl:px-36 z-60">
    <About />
    <Skills />
    <Projects />
    <Contact />
    
    
    
  </div>;
};

export default MainSection;
