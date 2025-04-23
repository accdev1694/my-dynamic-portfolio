import { useEffect } from "react";
import Navlinks from "./Navlinks";
import Logo from "./Logo";

const Navbar = ({ menuOpen, setMenuOpen }) => {
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setMenuOpen(false);
      }
    };
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [setMenuOpen]);

  return (
    // navbar component
    <nav className="fixed top-10 w-full z-40 text-gray-500 ">
      {/* navbar container */}
      <div className="max-w-7.5xl mx-auto px-36">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Logo href="#about-me"/>
          {/* Hamburger menu for Mobile view */}
          <div
            onClick={() => {
              setMenuOpen(!menuOpen);
            }}
            className="w-7 h-5 relative cursor-pointer z-40 md:hidden"
          >
            {`${menuOpen ? "✖" : "☰"}`}
          </div>
          {/* Navbar links for Desktop view */}
          <div
            onClick={() => setMenuOpen(false)}
            className={`${
              menuOpen
                ? "flex gap-2 absolute top-18 flex-col text-right bg-[#10100040] p-3 rounded-[10px] right-4"
                : "hidden md:flex items-center space-x-6 "
            }`}
          >
            <Navlinks
              menuOpen={menuOpen}
              setMenuOpen={setMenuOpen}
              title="myStory"
              href="#about-me"
            />
            <Navlinks
              menuOpen={menuOpen}
              setMenuOpen={setMenuOpen}
              title="mySkills"
              href="#my-skills"
            />
            <Navlinks
              menuOpen={menuOpen}
              setMenuOpen={setMenuOpen}
              title="myWorks"
              href="#my-works"
            />
            <Navlinks
              menuOpen={menuOpen}
              setMenuOpen={setMenuOpen}
              title="myContacts"
              href="#my-contacts"
            />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
