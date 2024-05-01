import Carosel from "../../components/HomePhoto/Carosel";
import Navbar from "../../components/navbar/Navbar";

const Home = () => {
  return (
    <div className="bg-orange-100 h-[100vh]">
      <Navbar></Navbar>
      <Carosel></Carosel>
    </div>
  );
};

export default Home;
