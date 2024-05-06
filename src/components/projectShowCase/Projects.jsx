import ProjectCard from "../../utils/ProjectCard/ProjectCard";
import SectionHeader from "../../utils/sectionHeader/SectionHeader";
import bistroBoss from "../../assets/bistro-boss-restaurant.png";
import brandShop from "../../assets/screencapture-a-10-brand-shop-web-app-2024-05-05-12_20_01.png";

const Projects = () => {
  const projectDetails = [
    {
      id: 1,
      name: "Restaurant Website Project",
      image: bistroBoss,
      altText: "Restaurant Website",
      techUsed: [
        "ReactJS",
        "Vite",
        "Tailwind",
        "FireBase",
        "MongoDB",
        "Express",
        "JWT Token",
        "TanStack Query",
        "Axios",
        "Stripe",
        "SwiperJs",
      ],
      gitHubLink: "https://github.com/001Rakib/resturant-web",
      LiveLink: "https://bistro-boss-20c29.web.app/",
    },
    {
      id: 2,
      name: "E-commerce Website Project",
      image: brandShop,
      altText: "E-commerce Website",
      techUsed: [
        "ReactJS",
        "Vite",
        "Tailwind",
        "FireBase",
        "MongoDB",
        "Express",
        "SwiperJs",
      ],
      gitHubLink: "https://github.com/001Rakib/brand-shop-website",
      LiveLink: "https://a-10-brand-shop.web.app/",
    },
  ];

  return (
    <div className="max-w-screen-xl mx-auto my-10">
      <SectionHeader sectionTitle={"PROJECTS"}></SectionHeader>
      <div className="grid gap-5 grid-cols-2 my-10">
        {projectDetails.map((details) => (
          <ProjectCard
            key={details.id}
            projectName={details.name}
            image={details.image}
            altText={details.altText}
            techUsed={details.techUsed}
            gitHubLink={details.gitHubLink}
            liveLink={details.LiveLink}
          ></ProjectCard>
        ))}
      </div>
    </div>
  );
};

export default Projects;
