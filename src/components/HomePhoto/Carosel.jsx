// import Image from "../../assets/PXL_20240213_064333141.PORTRAIT-removebg-preview.png";
import { Player } from "@lottiefiles/react-lottie-player";
import { Typewriter } from "react-simple-typewriter";
const Carosel = () => {
  return (
    <div className="max-w-screen-xl mx-auto px-10 flex gap-10">
      <div>
        <Player
          autoplay
          loop
          src="https://lottie.host/e6d3deca-fbb4-4c0e-bf1d-ab079d02527c/RGvsXhHJuD.json"
          style={{ height: "500px", width: "500px" }}
        ></Player>
      </div>
      <div className="font-roboto-condense mt-[15%] pl-8">
        <h1 className="text-gray-500 ml-36 text-xl">Hi, I am Rakib Hasan</h1>
        <div>
          <h1 className="text-6xl">
            I am a{" "}
            <mark
              style={{
                backgroundImage:
                  "linear-gradient(120deg, rgba(255, 200, 53, 0.8) 0, rgba(255, 200, 53, 0.8) 100%)",
                backgroundRepeat: "no-repeat",
                backgroundPosition: "0 80%",
                backgroundSize: "100% 0.25em",
                backgroundColor: "transparent",
              }}
            >
              <Typewriter words={["Frontend Web"]} loop />
            </mark>
          </h1>
        </div>
        <h1 className="text-6xl ml-32">Developer</h1>
        <button className="text-white bg-cyan-500 px-4 py-2 rounded-md mt-3 ml-44">
          Download CV
        </button>
      </div>
    </div>
  );
};

export default Carosel;
