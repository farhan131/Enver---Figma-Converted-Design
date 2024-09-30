import serviceicon1 from "/Icon.png";
import serviceicon2 from "/Icon2.png";
import serviceicon3 from "/Icon3.png";
import serviceicon4 from "/Icon4.png";
import serviceicon5 from "/Icon5.png";
import serviceicon6 from "/Icon6.png";

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

const Section2 = () => {
  return (
    <div id="services" className="mt-36">
      <div className="relative ">
        <div className="section-2-gradient-1"></div>
        <div className="section-2-gradient-2"></div>
        <img
          src="/Group 162527.png"
          alt=""
          className="absolute md:left-20 md:top-[-5%] size-20 top-[-5%]"
        />
        <h2 className="text-5xl font-black text-center mb-24 md:w-1/2 mx-auto">
          The Service We Provide For You
        </h2>
        <img
          src="/add.png"
          alt=""
          className="absolute md:right-20 md:top-10 rotate-[61deg] right-0 top-[8%] size-10"
        />
        <img
          src="/add.png"
          alt=""
          className="absolute left-0 md:bottom-[-10%] bottom-[-4%] rotate-[22deg]"
        />

        <div className="flex flex-wrap gap-y-20">
          {servicesItems.map((serviceItem) => (
            <div key={serviceItem.name} className="md:w-1/3 px-10 flex flex-col items-center text-center">
              <img src={serviceItem.icon} className="pb-5" alt="" />
              <h3 className="pb-5 text-bold text-2xl">{serviceItem.name}</h3>
              <p className="text-lg text-[#e8e6e3b3]">{serviceItem.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Section2;
