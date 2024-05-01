import Image from "../../assets/PXL_20240213_064333141.PORTRAIT-removebg-preview.png";
const Carosel = () => {
  return (
    <div className="max-w-screen-xl mx-auto px-10 flex">
      <div>
        <img className="" src={Image} alt="" />
      </div>
      <div className="font-roboto-condense text-center mt-[15%] pl-8">
        <h1 className="text-gray-500">Hi, I am Rakib Hasan</h1>
        <div className="text-6xl py-2 text-gray-700">
          <h1>I am a Frontend Web </h1>
          <h1>Developer</h1>
        </div>
        <button className="text-white bg-cyan-500 px-4 py-2 rounded-md mt-3">
          Download CV
        </button>
      </div>
    </div>
  );
};

export default Carosel;
