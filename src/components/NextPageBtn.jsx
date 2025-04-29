const NextPageBtn = ({next, nextPage, addClass}) => {
    return ( 
        <a className={`${addClass} text-center border border-[var(--color-accent)] text-gray-400 text-xs md:text-sm py-3 rounded-md hover:bg-[var(--color-accent)] hover:text-white font-bold transition duration-300 ease-in-out`} href={nextPage}>{next}</a>
     );
}
 
export default NextPageBtn;