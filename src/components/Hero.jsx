import React from "react";

import rectangle from "/Rectangle.png";
import rectangle2 from "/Group.png";

const Hero = () => {
  return (
    <div className="flex flex-col md:flex-row gap-y-20 md:gap-y-0 mt-5 md:mt-20">
      <div className="md:w-1/2">
        <div className="relative z-10 md:mt-10 md:pe-20">
          <h2 className="text-[3rem] md:text-[5rem] leading-[72s] md:leading-[84px] font-black mb-6">
            Build Your Awesome Platform
          </h2>
          <p className="text-lg text-[#e8e6e3b3] mb-14 leading-7 font-thin">
            Enver studio is a digital studio that offers several services such
            as UI/UX Design to developers, we will provide the best service for
            those of you who use our services.
          </p>
          <button className="px-6 py-3 border md:rounded font-bold flex items-center bg-[#5454D4] border-[#5454D4]">
            <span className="me-2">Our Services</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="2.5"
              stroke="currentColor"
              className="size-4"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25"
              />
            </svg>
          </button>
        </div>
        <div className="relative">
          <div className="col-1-gradient"></div>
        </div>
      </div>
      <div className="md:w-1/2 h-100vh">
        <div className="relative md:w-3/4 md:mx-auto h-[500px]">
          <img
            src="/Vector 13.png"
            alt=""
            className="absolute md:top-8 md:left-[-25%] w-20"
          />
          <img
            src="/Group 162526.png"
            alt=""
            className="absolute md:right-[-20%] md:top-[-5%] right-0 top-[-10%] w-10"
          />
          <img src={rectangle} alt="" className="absolute top-[65px]" />
          <img src={rectangle2} alt="" className="absolute left-[25px]" />
          <img
            src="/Group 162527.png"
            alt=""
            className="absolute bottom-0 md:left-[-35%] w-20"
          />
          <img
            src="/add.png"
            alt=""
            className="absolute bottom-[15%] right-[-10%] w-10"
          />
        </div>
        <div className="relative">
          <div className="col-2-gradient"></div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
