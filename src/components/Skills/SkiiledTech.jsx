/* eslint-disable react/jsx-key */
import SkillCard from "../../utils/skillCard/SkillCard";
import { FaHtml5 } from "react-icons/fa";
import { FaCss3Alt } from "react-icons/fa6";
import { SiJavascript } from "react-icons/si";
import { FaReact } from "react-icons/fa";
import { RiTailwindCssFill } from "react-icons/ri";
import { IoLogoFirebase } from "react-icons/io5";
import { SiMongodb } from "react-icons/si";
import { FaNodeJs } from "react-icons/fa";
import { SiExpress } from "react-icons/si";
import { SiVite } from "react-icons/si";
import { TbBrandBootstrap } from "react-icons/tb";

const SkiiledTech = () => {
  const skills = [
    {
      skill: "HTML",
      icon: <FaHtml5 className="text-orange-500"></FaHtml5>,
      experience: "1 Year",
    },
    {
      skill: "CSS",
      icon: <FaCss3Alt className="text-blue-600"></FaCss3Alt>,
      experience: "1 Year",
    },
    {
      skill: "Java Script",
      icon: <SiJavascript className="text-yellow-400"></SiJavascript>,
      experience: "1 Year",
    },
    {
      skill: "React",
      icon: <FaReact className="text-blue-500"></FaReact>,
      experience: "1 Year",
    },
    {
      skill: "Tailwind",
      icon: <RiTailwindCssFill className="text-cyan-500"></RiTailwindCssFill>,
      experience: "1 Year",
    },
    {
      skill: "Bootstrap",
      icon: <TbBrandBootstrap className="text-purple-800"></TbBrandBootstrap>,
      experience: "1 Year",
    },
    {
      skill: "Vite",
      icon: <SiVite className="text-purple-700"></SiVite>,
      experience: "1 Year",
    },
    {
      skill: "Firebase",
      icon: <IoLogoFirebase className="text-yellow-400"></IoLogoFirebase>,
      experience: "1 Year",
    },
    {
      skill: "NodeJS",
      icon: <FaNodeJs className="text-lime-600"></FaNodeJs>,
      experience: "6 Month",
    },
    {
      skill: "MongoDB",
      icon: <SiMongodb className="text-green-600"></SiMongodb>,
      experience: "6 Month",
    },
    {
      skill: "Express JS",
      icon: <SiExpress></SiExpress>,
      experience: "6 Month",
    },
  ];

  return (
    <div className="max-w-screen-xl mx-auto my-10">
      <h1 className="text-center text-xl font-bold font-roboto-condense my-4">
        <span className="text-green-500 bg-green-100 px-4 py-2 rounded-md">
          {" "}
          SKILLS
        </span>
      </h1>
      <div className="grid grid-cols-4 gap-4">
        {skills.map((skill) => (
          <SkillCard
            icon={skill.icon}
            title={skill.skill}
            experience={skill.experience}
          ></SkillCard>
        ))}
      </div>
    </div>
  );
};

export default SkiiledTech;
