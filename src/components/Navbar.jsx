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
    <nav
      className="fixed top-0 left-0 bg-[var(--color-bg)] h-12 lg:h-24 lg:pt-10 w-screen z-40 text-gray-500 border-b border-gray-700/40"
    >
      {/* navbar container */}
      <div className="max-w-7.5xl mx-auto px-4 md:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Logo href="#about-me" />
          {/* Hamburger menu for Mobile view */}
          <div
            onClick={() => {
              setMenuOpen(!menuOpen);
            }}
            className="relative cursor-pointer z-60 md:hidden flex justify-end items-center"
          >
            {`${menuOpen ? "✖" : "☰"}`}
          </div>
          {/* Navbar links for Desktop view */}
          <div
            onClick={() => setMenuOpen(false)}
            className={`${
              menuOpen
                ? "fixed inset-0 text-white w-full flex gap-2 absolute bg-gray-800/97 flex-col items-center justify-center z-50"
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
