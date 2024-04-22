import herobanner from "../assets/herobanner.jpg";
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const Hero = () => {
  useEffect(() => {
    Aos.init({
      offset: 200,
      duration: 500,
      easing: "ease-in-sine",
    });
  }, []);

  return (
    <section
      id="hero"
      className="w-full py-10 mx-auto h-fit flex md:flex-row flex-col justify-between items-center gap-10"
    >
      <div className="md:pl-56 flex flex-col justify-center items-center md:gap-10 gap-6 p-10">
        <h1
          data-aos="zoom-in"
          className="text-2xl uppercase font-regular text-slate-400 text-center"
        >
          ComfortZone
        </h1>
        <h1
          data-aos="zoom-in"
          data-aos-delay="200"
          className="md:text-8xl text-6xl font-bold text-centern text-blue-900"
        >
        FITNESS  CLASSES
        </h1>
        <button
          data-aos="zoom-in"
          data-aos-delay="400"
          className="px-8 py-4 bg-slate-600 hover:bg-slate-900 text-white font-semibold cursor-pointer rounded-lg"
        >
          BOOK NOW
        </button>
      </div>

      <div className="flex justify-items-end items-end" >
        <img data-aos="zoom-in" data-aos-delay="600" src={herobanner} alt="hero banner" width={1500} height={800} className="bg-cover bg-center" />
      </div>
    </section>
  );
};

export default Hero;
