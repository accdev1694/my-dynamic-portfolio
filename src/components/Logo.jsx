const Logo = ({ href }) => {
  return (
    <div className="flex items-center gap-2">
      <img
        className="w-6 lg:w-8 rounded-full border border-solid border-gray-600 shadow"
        src={"/favicon.png"}
        alt="My Photo"
      />
      <a
        className=" font-bold hover:text-white transition-all duration-300 ease-in-out lg:text-lg"
        href={href}
      >
        Portfoli
        <span className="text-[var(--color-accent)] transition-colors transition-all duration-300 ease-in-out">
          O
        </span>
      </a>
    </div>
  );
};

export default Logo;
