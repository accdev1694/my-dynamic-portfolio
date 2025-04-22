const Navlinks = ({title, href}) => {
  return (
    <>
      <a
        className="hover:text-white py-0.5 text-xs transition-all duration-300 ease-in-out"
        href={href}
      >
        {title}
      </a>
    </>
  );
};

export default Navlinks;
