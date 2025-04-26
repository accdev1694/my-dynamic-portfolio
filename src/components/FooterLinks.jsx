import { getImgUrl } from "../../utils";
import ImageCard from "./ImageCard";

const FooterLinks = () => {
  return (
    <div className="flex gap-2">
      <a
        href="https://github.com/accdev1694?tab=repositories"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img
          src="../../src/assets/images/contact/github.png"
          className="w-4"
          alt="Github Logo"
        />
      </a>
      <a
        href="https://abojeonline.com/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img
          src="../../src/assets/images/contact/hashnode.png"
          className="w-4"
          alt="Hashnode Logo"
        />
      </a>
      <a
        href="https://www.linkedin.com/in/ao111/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img
          src="../../src/assets/images/contact/linkedin.png"
          className="w-4"
          alt="Linkedin Logo"
        />
      </a>
      <a
        href="mailto:diloch111@gmail.com"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img
          src="../../src/assets/images/contact/mail.png"
          className="w-4"
          alt="Gmail Logo"
        />
      </a>
    </div>
  );
};

export default FooterLinks;
