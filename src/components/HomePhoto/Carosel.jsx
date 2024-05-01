import Image from "../../assets/PXL_20240213_064333141.PORTRAIT-removebg-preview.png";
import { Typewriter } from "react-simple-typewriter";
const Carosel = () => {
  return (
    <div className="max-w-screen-xl mx-auto px-10 flex">
      <div>
        <img className="" src={Image} alt="" />
      </div>
      <div className="font-roboto-condense mt-[15%] pl-8">
        <h1 className="text-gray-500 ml-36">Hi, I am Rakib Hasan</h1>
        <div>
          <h1 className="text-6xl">
            I am a <Typewriter words={["Frontend Web"]} loop />
          </h1>
        </div>
        <h1 className="text-6xl ml-28">Developer</h1>

        <button className="text-white bg-cyan-500 px-4 py-2 rounded-md mt-3 ml-44">
          Download CV
        </button>
      </div>
    </div>
  );
};

export default Carosel;
