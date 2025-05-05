const Navlinks = ({title, href}) => {
  return (
    <>
      <a
        className="tracking-wide md:text-[0.6em] lg:text-[0.8em] hover:text-gray-500 md:hover:text-white py-0.5 transition-all duration-300 ease-in-out"
        href={href}
      >
        {title}
      </a>
    </>
  );
};

export default Navlinks;
