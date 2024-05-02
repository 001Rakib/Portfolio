import Carosel from "../../components/HomePhoto/Carosel";
import PersonalDetails from "../../components/about/PersonalDetails";
import Navbar from "../../components/navbar/Navbar";

const Home = () => {
  return (
    <div>
      <div className="bg-orange-100 h-[100vh]">
        <Navbar></Navbar>
        <Carosel></Carosel>
      </div>
      <PersonalDetails></PersonalDetails>
    </div>
  );
};

export default Home;
