import React from "react";

const Section1 = () => {
  return (
    <div className=" mt-20 md:mt-36">
      <div className="md:flex mb-10">
        <h2 className="text-5xl font-black leading-tight mb-10 md:mb-0">
          Why Enver Is The Best Choice?
        </h2>
        <p className="text-[#e8e6e3b3] leading-8 text-lg">
          Watch this one minute video so you understand why you should use our
          services!
        </p>
      </div>
      <iframe
        src="https://www.youtube.com/embed/yRPTQTlafxw?si=LDwcSXD3Rjvi8I-C"
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerPolicy="strict-origin-when-cross-origin"
        allowFullScreen
      ></iframe>
    </div>
  );
};

export default Section1;
