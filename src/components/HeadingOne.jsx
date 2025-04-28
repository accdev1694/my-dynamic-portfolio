const HeadingOne = ({text}) => {
    return ( <h1 className="inline-block text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-[var(--color-accent-dark)] to-[var(--color-accent)] md:pb-2">
        {text}
      </h1> );
}
 
export default HeadingOne;