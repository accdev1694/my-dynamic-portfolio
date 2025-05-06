export const getImgUrl = (path) => {
  return new URL(`${path}`, import.meta.url).href;
};

export const projects = [
  {
    title: "BLOG",
    image: getImgUrl("/assets/images/projects/blog.png"),
    url: "https://abojeonline.com/",
    description:
      "A Blog about programming and tutorials",
    tools: ["Tailwind", "React", "Firebase"],
    icon: "✍️",
  },
  {
    title: "ECOMMERCE",
    image: getImgUrl("/assets/images/projects/ecommerce.png"),
    url: null,
    description:
      "An in-progress e-commerce site for African foods.",
    tools: ["Tailwind", "React", "Firebase"],
    icon: "🛒",
  },
  {
    title: "PORTFOLIO",
    image: getImgUrl("/assets/images/projects/portfolio.png"),
    url: "https://olochesportfolio.netlify.app/",
    description:
      "A showcase of some projects and experience.",
    tools: ["Tailwind", "React", "Emailjs"],
    icon: "🧑‍💻",
  },
  {
    title: "TRAINING PAGE",
    image: getImgUrl("/assets/images/projects/landing-page.png"),
    url: "https://techpivotlandingpage.netlify.app/",
    description:
      "A clean, responsive page for my tech bootcamp.",
    tools: ["HTML", "CSS", "Javascript"],
    icon: "🎯",
  },
];
