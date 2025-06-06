export const getImgUrl = (path) => {
  return new URL(`${path}`, import.meta.url).href;
};

export const projects = [
  {
    title: "My BLOG",
    image: getImgUrl("/assets/images/projects/blog.png"),
    url: "https://my-blog-cfc41.web.app",
    description:
      "A Blog about Programming and Coding Tutorials",
    tools: ["Tailwind", "React", "Firebase"],
    icon: "✍️",
  },
  {
    title: "ECOMMERCE",
    image: getImgUrl("/assets/images/projects/ecommerce.png"),
    url: null,
    description:
      "An in-progress e-commerce site for African Foods.",
    tools: ["Tailwind", "React", "Firebase"],
    icon: "🛒",
  },
  {
    title: "PORTFOLIO",
    image: getImgUrl("/assets/images/projects/portfolio.png"),
    url: "https://olochesportfolio.netlify.app/",
    description:
      "A showcase of some projects and experience.",
    tools: ["CSS", "React", "Emailjs"],
    icon: "🧑‍💻",
  },
  {
    title: "PROJECT-BTA",
    image: getImgUrl("/assets/images/projects/bta.png"),
    url: "https://olochesportfolio.netlify.app/",
    description:
      "Website for an NGO for underpriviledged Children",
    tools: ["TailwindCSS","React", "Firebase"],
    icon: "🎯",
  },
];
