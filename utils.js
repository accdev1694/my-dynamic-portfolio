export const getImgUrl = (path) => {
  return new URL(`${path}`, import.meta.url).href;
};

export const projects = [
  {
    title: "BLOG",
    image: getImgUrl("/assets/images/projects/blog.png"),
    url: "https://abojeonline.com/",
    description:
      "Built with React to showcase my skills and teach programming to aspiring developers",
    tools: ["Tailwind", "React", "Firebase"],
    icon: "✍️",
  },
  {
    title: "ECOMMERCE",
    image: getImgUrl("/assets/images/projects/ecommerce.png"),
    url: null,
    description:
      "An in-progress e-commerce site for African foods, showcasing my web development skills.",
    tools: ["Tailwind", "React", "Firebase"],
    icon: "🛒",
  },
  {
    title: "PORTFOLIO",
    image: getImgUrl("/assets/images/projects/portfolio.png"),
    url: "https://olochesportfolio.netlify.app/",
    description:
      "A showcase of my projects and experience, reflecting my technical abilities and brand.",
    tools: ["Tailwind", "React", "Emailjs"],
    icon: "🧑‍💻",
  },
  {
    title: "TRAINING PAGE",
    image: getImgUrl("/assets/images/projects/landing-page.png"),
    url: "https://techpivotlandingpage.netlify.app/",
    description:
      "A clean, responsive page designed to promote my tech bootcamp, highlighting my skills.",
    tools: ["HTML", "CSS", "Javascript"],
    icon: "🎯",
  },
];
