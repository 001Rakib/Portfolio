import Contact from "../../components/Contact/Contact";
import Carosel from "../../components/HomePhoto/Carosel";
import Services from "../../components/Services/Services";
import SkiiledTech from "../../components/Skills/SkiiledTech";
import PersonalDetails from "../../components/about/PersonalDetails";
import Navbar from "../../components/navbar/Navbar";
import Projects from "../../components/projectShowCase/Projects";

const Home = () => {
  return (
    <div>
      <div className="bg-orange-100 h-[100vh]">
        <Navbar></Navbar>
        <Carosel></Carosel>
      </div>
      <PersonalDetails></PersonalDetails>
      <SkiiledTech></SkiiledTech>
      <Services></Services>
      <Projects></Projects>
      <Contact></Contact>
    </div>
  );
};

export default Home;
