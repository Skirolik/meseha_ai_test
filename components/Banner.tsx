import Image from "next/image";
import banner from "../images/Rferm.png";
import Popup from "reactjs-popup";

const Banner = () => {
  return (
    <div className=" flex flex-col space-y-2 py-16 md:space-y-4 h-[65vh] justify-end lg:pb-12 text-center justify-items-center">
      <div className="absolute w-screen top-0 left-0 h-[600px] -z-10 ">
        <Image src={banner} layout="fill" objectFit="cover" />
      </div>
      <div className="absolute -top-5 left-0 bottom-0 bg-black/60 flex flex-col h-[600px] w-screen -z-10" />
      <h1 className="text-6xl font-bold md:text-7xl lg:text-9xl text-white drop-shadow-lg shadow-black">
        MESEHA
      </h1>
      <h6 className="text-xl  md:text-2xl lg:text-4xl text-white drop-shadow-lg shadow-black">
        India's First AI Earthing Solution
      </h6>

      <div className="justify-center">
        <Popup
          trigger={
            <button className="bg-green-500 text-white cursor-pointer rounded-lg w-32 hover:bg-green-900 justify-center lg:h-14 md:h-8">
              Instructions
            </button>
          }
          position="bottom center"
        >
          <div className="text-center bg-slate-800  text-white w-96 ">
            <h3 className="font-bold underline">Steps 1:</h3>
            <h3 className="font-bold">Enter the Longitude and Latitude</h3>
            <h3 className="font-bold">Or</h3>
            <h3 className="font-bold">
              Use map by clicking on desired location
            </h3>
            <h3 className="font-bold underline">Steps:2</h3>
            <h3 className="font-bold">Submit</h3>
          </div>
        </Popup>
      </div>
    </div>
  );
};

export default Banner;
