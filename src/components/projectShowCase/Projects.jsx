import ProjectCard from "../../utils/ProjectCard/ProjectCard";
import SectionHeader from "../../utils/sectionHeader/SectionHeader";
import bistroBoss from "../../assets/bistro-boss-restaurant.png";
import brandShop from "../../assets/screencapture-a-10-brand-shop-web-app-2024-05-05-12_20_01.png";

const Projects = () => {
  const projectImages = [
    {
      name: "Restaurant Website Project",
      image: bistroBoss,
      altText: "Restaurant Website",
    },
    {
      name: "E-commerce Website Project",
      image: brandShop,
      altText: "E-commerce Website",
    },
  ];
  return (
    <div className="max-w-screen-xl mx-auto my-10">
      <SectionHeader sectionTitle={"PROJECTS"}></SectionHeader>
      <div className="grid gap-5 grid-cols-2 my-10">
        {projectImages.map((images) => (
          <ProjectCard
            key={images.name}
            projectName={images.name}
            image={images.image}
            altText={images.altText}
          ></ProjectCard>
        ))}
      </div>
    </div>
  );
};

export default Projects;
