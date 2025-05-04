const ContactBtn = ({addClass}) => {
  return (
      <a className={`${addClass} bg-[var(--color-accent)] text-white font-bold text-xs md:text-sm py-3 rounded-md hover:bg-transparent transition duration-300 ease-in-out w-[35%] border border-[var(--color-accent)] hover:border-[var(--color-accent)] text-center`} href="#my-contacts">ContactMe</a>
  );
};

export default ContactBtn;
