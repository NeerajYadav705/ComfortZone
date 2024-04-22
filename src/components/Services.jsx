import React from "react";
import phi1 from "../assets/phi1.png";
import phil2 from "../assets/phil2.png";
import phil3 from "../assets/phil3.png";

import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const Services = () => {
  useEffect(() => {
    Aos.init({
      offset: 200,
      duration: 500,
      easing: "ease-in-sine",
    });
  }, []);
  return (
    <>
      <section className="w-full bg-slate-500 py-20 z-10">
        <h1
          data-aos="zoom-in"
          data-aos-delay="200"
          className="text-white md:text-6xl text-5xl font-semibold text-center pb-32"
        >
          OUR SERVICES
        </h1>
      </section>
      <section id="services">
        <div className="w-full flex flex-col justify-center items-center bg-slate-900 h-fit">
          <div className="md:w-[85%] w-full mx-auto flex md:flex-row flex-col justify-center items-center md:gap-6 gap-20 md:p-20 p-10 mt-[-200px] z-20">
            <div
              data-aos="slide-up"
              data-aos-delay="400"
              className="flex flex-col justify-center items-center gap-6"
            >
              <img src={phi1} alt="" width={300} height={300} />
              <h1 className="text-4xl text-white font-semibold">
                Bodybuilding
              </h1>
              <p className="text-lg text-slate-300 text-center">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Cupiditate, velit.
              </p>
              <button className="px-6 py-3 bg-slate-500 text-white font-semibold transform hover:scale-105 transition-transform duration-300 cursor-pointer rounded-lg">
                View More
              </button>
            </div>
            <div
              data-aos="slide-up"
              data-aos-delay="400"
              className="flex flex-col justify-center items-center gap-6"
            >
              <img src={phil2} alt="" width={300} height={300} />
              <h1 className="text-4xl text-white font-semibold">
                Cardio Classes
              </h1>
              <p className="text-lg text-slate-300 text-center">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Cupiditate, velit.
              </p>
              <button className="px-6 py-3 bg-slate-500 text-white font-semibold transform hover:scale-105 transition-transform duration-300 cursor-pointer rounded-lg">
                View More
              </button>
            </div>
            <div
              data-aos="slide-up"
              data-aos-delay="400"
              className="flex flex-col justify-center items-center gap-6"
            >
              <img src={phil3} alt="" width={300} height={300} />
              <h1 className="text-4xl text-white font-semibold">
                Weight Lifting
              </h1>
              <p className="text-lg text-slate-300 text-center">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Cupiditate, velit.
              </p>
              <button className="px-6 py-3 bg-slate-500 text-white font-semibold transform hover:scale-105 transition-transform duration-300 cursor-pointer rounded-lg">
                View More
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Services;
