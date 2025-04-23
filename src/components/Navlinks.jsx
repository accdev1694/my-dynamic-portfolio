const Navlinks = ({title, href}) => {
  return (
    <>
      <a
        className="tracking-[2px] hover:text-gray-500 md:hover:text-white py-0.5 transition-all duration-300 ease-in-out"
        href={href}
      >
        {title}
      </a>
    </>
  );
};

export default Navlinks;
