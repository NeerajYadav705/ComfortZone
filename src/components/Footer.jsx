import React from "react";
import { FaArrowUp, FaCopyright } from "react-icons/fa";
import { Link } from "react-scroll";

const Footer = () => {
  return (
    <>
      <section className="bg-black w-full text-white p-3 flex justify-center items-center gap-4">
        <FaCopyright className="size-6 text-white" />
        <h1 className="text-white text-center font-semibold text-sm">
          Copyright 2024, Comfort Zone, All Rights Reserved
        </h1>
      </section>
      {/* scroll button */}
      <div
        id="icon-box"
        className="bg-slate-200 text-black p-3 rounded-full hover:bg-slate-300 cursor-pointer fixed lg:bottom-6 right-6 bottom-6"
      >
        <Link to="hero" spy={true} offset={-100} smooth={true}>
        <FaArrowUp className="w-[35px] h-[35px]" />
        </Link>
      </div>
    </>
  );
};

export default Footer;
