import React from "react";

const Contact = () => {
  return (
    <div id="contact" className="mt-28 flex flex-col">
      <img src="/add.png" alt="" className="self-end" />
      <div className="md:flex justify-between items-center my-20 ">
        <h2 className="text-5xl font-black md:w-2/3 mb-10 md:mb-0">
          Contact us for the service you want to use
        </h2>
        <button className="px-10 py-3 border rounded font-bold bg-[#5454D4] border-[#5454D4]">
          Contact Us
        </button>
      </div>
      <img src="/Group 162526.png" alt="" className="self-start" />
    </div>
  );
};

export default Contact;
