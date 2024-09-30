import React from "react";

const Section3 = () => {
  return (
    <div id="projects" className="mt-52">
      <div className="relative">
        <img
          src="/Group 162526.png"
          alt=""
          className="absolute right-0 top-10 z-[10]"
        />
        <div className="section-3-gradient-1"></div>
      </div>
      <div className="relative z-10">
        <h2 className="text-4xl md:text-5xl font-black mb-24">
          Our Awesome Portfolio
        </h2>
        <div className="hidden md:block">
          <div className="flex justify-between">
            <div className="flex h-[50vh]">
              <img
                src="/Group 162508.png"
                alt=""
                className="object-contain self-start"
              />
            </div>
            <div className="flex h-[50vh] ">
              <img
                src="/Group 162509.png"
                alt=""
                className="object-contain self-center"
              />
            </div>
            <div className="flex h-[50vh]">
              <img
                src="/Group 162510.png"
                alt=""
                className="object-contain self-end"
              />
            </div>
          </div>
          <div className="flex gap-x-2 justify-center mt-10">
            <div className="w-4 h-2 bg-[#5454D4] rounded-full cursor-pointer"></div>
            <div className="size-2 bg-[#121213] rounded-full cursor-pointer"></div>
            <div className="size-2 bg-[#121213] rounded-full cursor-pointer"></div>
          </div>
        </div>
      </div>
      <div className="block md:hidden">
        <img
          src="/Group 162508.png"
          alt=""
          className="object-contain self-start"
        />
        <div className="carousel-nav my-10 flex justify-center gap-x-2">
          <div className="size-10 bg-[#FFFFFF33] rounded-full flex justify-center items-center">
            <img src="/chevron-right.png" alt="" />
          </div>
          <div className="size-10 bg-[#5454D4] rounded-full flex justify-center items-center">
            <img src="/Icon7.png" alt="" />
          </div>
        </div>
      </div>
      <div className="relative">
        <img
          src="/Vector 13.png"
          alt=""
          className="absolute left-[-5%] top-[-5%] z-[10]"
        />
      </div>
    </div>
  );
};

export default Section3;
