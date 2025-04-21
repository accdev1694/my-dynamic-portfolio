import { useEffect } from "react";

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
    <nav className="fixed top-0 w-full z-40 bg-[rgba(10,10,10,0.8] backdrop-blur-lg border-b border-white/10 shadow-lg">
      {/* navbar container */}
      <div className="max-w-5xl mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <a className="font-mono text-xl font-bold" href="#home">
            Portfoli<span className="text-orange-700">o</span>
          </a>
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
                ? "flex absolute top-18 flex-col text-center items-center justify-center bg-[#10100040] p-3 rounded-[10px] right-4"
                : "hidden md:flex items-center space-x-8 "
            }`}
          >
            <a
              className="text-gray-300 hover:text-white transition-colors py-0.5"
              href="#home"
            >
              Home
            </a>
            <a
              className="text-gray-300 hover:text-white transition-colors py-0.5"
              href="#about"
            >
              About
            </a>
            <a
              className="text-gray-300 hover:text-white transition-colors py-0.5"
              href="#projects"
            >
              Projects
            </a>
            <a
              className="text-gray-300 hover:text-white transition-colors py-0.5"
              href="#contact"
            >
              Contact
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
