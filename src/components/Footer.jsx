const Footer = () => {
    return ( <div className="fixed bottom-0 left-0 right-0 border-t border-gray-700/40 h-12 flex items-center justify-center bg-[var(--color-bg)] text-gray-500 text-xs gap-2">
        <p>
        &copy; {new Date().getFullYear()} All rights reserved.
      </p>
    </div> );
}
 
export default Footer;