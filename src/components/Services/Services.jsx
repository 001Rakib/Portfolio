import SectionHeader from "../../utils/sectionHeader/SectionHeader";
import ServiceCard from "../../utils/serviceCard/ServiceCard";

const Services = () => {
  const serviceInfo = [
    {
      title: "Full-Stack Web Development",
      description: [
        "Build dynamic and interactive web applications using the MERN stack (MongoDB, Express.js, React.js, Node.js)",
        `Develop custom solutions tailored to clients' specific requirements, whether it's an e-commerce platform, social network, or enterprise application.`,
      ],
    },
    {
      title: "Custom Web Application Development",
      description: [
        "Create custom web applications from scratch based on clients' business needs and specifications.",
        `Develop scalable and maintainable solutions that grow with clients' businesses, utilizing React for the frontend and Node.js for the backend.`,
      ],
    },
    {
      title: "Frontend Development",
      description: [
        "Design and develop responsive user interfaces (UI) using React.js.",
        `Implement state management solutions like Redux or Context API to manage complex application states.`,
      ],
    },
  ];
  return (
    <div className="max-w-screen-xl mx-auto">
      <SectionHeader sectionTitle={"Services"}></SectionHeader>
      <div className="flex gap-10 flex-grow my-10">
        {serviceInfo.map((service) => (
          <ServiceCard
            key={service.title}
            cardTitle={service.title}
            description={service.description}
          ></ServiceCard>
        ))}
      </div>
    </div>
  );
};

export default Services;
