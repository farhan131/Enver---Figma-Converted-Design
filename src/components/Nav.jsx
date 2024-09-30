import { useId, useState } from "react";
import logo from "/logo.png";
import { HashLink } from "react-router-hash-link";

const navItems = [
  {
    active: true,
    name: "Home",
    link: "/",
  },
  {
    active: false,
    name: "Services",
    link: "#services",
  },
  {
    active: false,
    name: "Our Projects",
    link: "#projects",
  },
  {
    active: false,
    name: "About Us",
    link: "#about",
  },
];

const Nav = () => {
  const [showMobileNav, setShowMobileNav] = useState(false);
  return (
    <nav className="md:flex justify-between py-8 md:py-12 relative z-10">
      <div className="flex justify-between">
        <div className="flex items-center">
          <img src={logo} alt="" className="me-2" />
          <h1 className="text-3xl lg:text-4xl font-bold">Enver</h1>
        </div>
        <button
          className="block md:hidden px-2"
          onClick={() => setShowMobileNav(!showMobileNav)}
        >
          <img src="/Sort.png" alt="" />
        </button>
      </div>
      <div id="nav" className={`${showMobileNav ? null : "hidden"} flex md:grow justify-between mt-5 md:mt-0 bg-[#777] md:bg-transparent px-10 md:px-0 py-5 md:py-0 rounded-md`}>
        <div className="flex justify-center md:mx-auto">
          <ul className="flex gap-5 lg:gap-10">
            {navItems.map((navItem, i) => (
              <li
                key={navItem.name}
                className={`flex items-center justify-center text-[16px] lg:text-[18px] hover:text-[#5454D4] ${
                  navItem.active ? "text-[#5454D4]" : "text-[#ffffffb3]"
                }`}
              >
                <HashLink smooth to={navItem.link}>
                  {navItem.name}
                </HashLink>
              </li>
            ))}
          </ul>
        </div>
        <button className="border rounded-md px-6 lg:px-10 py-1 lg:py-2 text-[14px] lg:text-[16px] text-white border-white hover:text-[#aaa] hover:border-[#aaa]">
          <HashLink to={"#contact"} smooth>
            Contact Us
          </HashLink>
        </button>
      </div>
    </nav>
  );
};

export default Nav;
