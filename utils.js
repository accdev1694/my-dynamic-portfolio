export const getImgUrl = (path) => {
  return new URL(`${path}`, import.meta.url).href;
};

export const projects = [
  {
    title: "Blog",
    image: getImgUrl("./src/assets/images/projects/blog.png"),
    url: "https://abojeonline.com/",
    description:
      "Built with React to showcase my skills and teach programming to aspiring developers",
  },
  {
    title: "Ecommerce",
    image: getImgUrl("./src/assets/images/projects/ecommerce.png"),
    url: null,
    description:
      "An in-progress e-commerce site for African foods, showcasing my web development skills.",
  },
  {
    title: "Portfolio",
    image: getImgUrl("./src/assets/images/projects/portfolio.png"),
    url: null,
    description:
      "A showcase of my projects and experience, reflecting my technical abilities and brand.",
  },
  {
    title: "Training Page",
    image: getImgUrl("./src/assets/images/projects/landing-page.png"),
    url: "https://techpivotlandingpage.netlify.app/",
    description:
      "A clean, responsive page designed to promote my tech bootcamp, highlighting my skills.",
  },
];
