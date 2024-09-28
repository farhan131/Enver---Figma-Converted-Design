import { useId, useState } from "react";
import logo from "/logo.png";
import rectangle from "/Rectangle.png";
import rectangle2 from "/Group.png";
import serviceicon1 from "/Icon.png";
import serviceicon2 from "/Icon2.png";
import serviceicon3 from "/Icon3.png";
import serviceicon4 from "/Icon4.png";
import serviceicon5 from "/Icon5.png";
import serviceicon6 from "/Icon6.png";
import "./App.css";

const navItems = [
  {
    active: true,
    name: "Home",
  },
  {
    active: false,
    name: "Services",
  },
  {
    active: false,
    name: "Our Projects",
  },
  {
    active: false,
    name: "About Us",
  },
];

const servicesItems = [
  {
    icon: serviceicon1,
    name: "Development",
    desc: "Create a platform with the best and coolest quality from us.",
  },
  {
    icon: serviceicon2,
    name: "UI/UX Designer",
    desc: "We provide UI/UX Design services, and of course with the best quality.",
  },
  {
    icon: serviceicon3,
    name: "Graphik Designer",
    desc: "We provide Graphic Design services, with the best designers.",
  },
  {
    icon: serviceicon4,
    name: "Motion Graphik",
    desc: "Create a platform with the best and coolest quality from us.",
  },
  {
    icon: serviceicon5,
    name: "Photography",
    desc: "We provide UI/UX Design services, and of course with the best quality",
  },
  {
    icon: serviceicon6,
    name: "Videography",
    desc: "We provide Graphic Design services, with the best designers.",
  },
];

function App() {
  const navItemIds = useId();
  return (
    <div className="bg-[#19191B] text-white">
      <div className="container mx-auto">
        {/* nav */}
        <nav className="flex justify-between py-12 relative z-10 ">
          <div className="flex items-center">
            <img src={logo} alt="" className="me-2" />
            <h1 className="text-4xl font-bold">Enver</h1>
          </div>
          <div className="grow flex justify-center">
            <ul className="flex gap-10">
              {navItems.map((navItem, i) => (
                <li
                  key={navItemIds + i}
                  className={`flex items-center justify-center text-[18px] hover:text-[#5454D4] ${
                    navItem.active ? "text-[#5454D4]" : "text-[#ffffffb3]"
                  }`}
                >
                  {navItem.name}
                </li>
              ))}
            </ul>
          </div>
          <button className="border rounded-md px-10 py-2 text-[16px]">
            Contact Us
          </button>
        </nav>
        {/* hero */}
        <div className="flex mt-20 h-[70vh]">
          <div className="w-1/2 ">
            <div className="relative z-10 mt-10">
              <h2 className="text-[5rem] leading-[84px] font-black mb-6">
                Build Your Awesome Platform
              </h2>
              <p className="text-lg text-[#e8e6e3b3] mb-14 w-3/4 leading-7">
                Enver studio is a digital studio that offers several services
                such as UI/UX Design to developers, we will provide the best
                service for those of you who use our services.
              </p>
              <button className="px-5 py-3 border rounded font-bold flex items-center bg-[#5454D4] border-[#5454D4]">
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
          <div className="w-1/2">
            <div className="relative w-3/4 mx-auto h-full">
              <img
                src="/Vector 13.png"
                alt=""
                className="absolute top-8 left-[-25%]"
              />
              <img
                src="/Group 162526.png"
                alt=""
                className="absolute right-0 top-[-5%]"
              />
              <img src={rectangle} alt="" className="absolute top-[65px]" />
              <img src={rectangle2} alt="" className="absolute left-[25px]" />
              <img
                src="/Group 162527.png"
                alt=""
                className="absolute bottom-0 left-[-35%]"
              />
              <img
                src="/add.png"
                alt=""
                className="absolute bottom-0 right-[-10%]"
              />
            </div>
            <div className="relative">
              <div className="col-2-gradient"></div>
            </div>
          </div>
        </div>
        {/* section 1 */}
        <div className="mt-36">
          <div className="flex mb-10">
            <h2 className="text-5xl font-black leading-tight">
              Why Enver Is The Best Choice?
            </h2>
            <p className="text-[#e8e6e3b3] leading-8 text-lg">
              Watch this one minute video so you understand why you should use
              our services!
            </p>
          </div>
          <iframe
            src="https://www.youtube.com/embed/yRPTQTlafxw?si=LDwcSXD3Rjvi8I-C"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerpolicy="strict-origin-when-cross-origin"
            allowfullscreen
          ></iframe>
        </div>
        {/* section 2 */}
        <div className="mt-32">
          <div className="relative ">
            <div className="section-2-gradient-1"></div>
            <div className="section-2-gradient-2"></div>
            <img
              src="/Group 162527.png"
              alt=""
              className="absolute left-20 top-[-5%]"
            />
            <h2 className="text-5xl font-black text-center mb-24 w-1/2 mx-auto">
              The Service We Provide For You
            </h2>
            <img
              src="/add.png"
              alt=""
              className="absolute right-20 top-10 rotate-[61deg]"
            />
            <img
              src="/add.png"
              alt=""
              className="absolute left-0 bottom-[-10%] rotate-[61deg]"
            />

            <div className="flex flex-wrap gap-y-20">
              {servicesItems.map((serviceItem) => (
                <div className="w-1/3 px-10 flex flex-col items-center text-center">
                  <img src={serviceItem.icon} className="pb-5" alt="" />
                  <h3 className="pb-5 text-bold text-2xl">
                    {serviceItem.name}
                  </h3>
                  <p className="text-lg text-[#e8e6e3b3]">{serviceItem.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
        {/* section 3 */}
        <div className="mt-28">
          <h2 className="text-5xl font-black mb-16">Our Awesome Portfolio</h2>
          <div className="flex justify-between">
            <div className="flex h-[50vh]">
              <img
                src="/Group 162508.png"
                alt=""
                className="object-contain h-3/4 self-start"
              />
            </div>
            <div className="flex h-[50vh] ">
              <img
                src="/Group 162509.png"
                alt=""
                className="object-contain h-3/4 self-center"
              />
            </div>
            <div className="flex h-[50vh]">
              <img
                src="/Group 162510.png"
                alt=""
                className="object-contain h-3/4 self-end"
              />
            </div>
          </div>
        </div>
        {/* contact */}
        <div className="mt-28 flex justify-between h-[30vh] items-center">
          <h2 className="text-5xl font-black w-2/3">
            Contact us for the service you want to use
          </h2>
          <button className="px-10 py-3 border rounded font-bold bg-[#5454D4] border-[#5454D4]">
            Contact Us
          </button>
        </div>
        {/* footer */}
        <div className="mt-28 flex justify-between items-center py-10">
          <div className="flex items-center">
            <img src="/logo.png" alt="" className="me-5" />
            <span className="text-3xl font-black">Enver</span>
          </div>
          <div className="flex gap-10">
            <ul className="flex gap-10">
              <li>Support</li>
              <li>Privacy Policy</li>
              <li>Terms and Conditions</li>
            </ul>
          </div>
          <p>&copy; 2020 Enver, All Rights Reserved</p>
        </div>
      </div>
    </div>
  );
}

export default App;
