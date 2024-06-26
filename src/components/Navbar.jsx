import { useState } from "react";
import { HiMenuAlt3 } from "react-icons/hi";
import { MdClose } from "react-icons/md";
import ThemeSwitch from "./ThemeSwitch";

const Navbar = () => {
  const [dropdown, setDropdown] = useState(false);
  const showDropdown = () => {
    setDropdown(!dropdown);
  };

  return (
    <nav className="w-full lg:h-auto h-[10vh] flex flex-col justify-center items-center fixed z-50 bg-[#f0ebe3] dark:bg-[#1f2937]">
      <div className="w-[95%] h-[10vh] flex justify-between items-baseline pt-2 text-[#12222E] relative">
        <div className="flex justify-between items-center w-full pt-4">
          <p className="w-28 h-5"></p>
          {/* <img src="/logo.png" alt="" className="w-28 h-5" /> */}
          <ThemeSwitch />
        </div>
        {dropdown ? (
          <div
            className="text-2xl cursor-pointer text-[#1f2035] ml-[6px] lg:absolute z-10 top-6 right-0"
            onClick={showDropdown}
          >
            <MdClose className="text-2xl" />
          </div>
        ) : (
          <div
            className="text-2xl cursor-pointer text-[#1f2035] ml-[6px] dark:text-white"
            onClick={showDropdown}
          >
            <HiMenuAlt3 className="text-2xl" />
          </div>
        )}
      </div>
      {dropdown ? (
        <div
          className="w-full h-[100vh] lg:w-[512px] absolute lg:top-0 top-[10vh] lg:right-0 bg-[#f0ebe3] dark:bg-[#1f2937] transition ease-in-out duration-100 "
          onClick={showDropdown}
        >
          <div className="w-full lg:h-full h-[320px] flex flex-col items-baseline pt-8 gap-4 text-[#12222E]">
            <ul className="font-bold text-[22px] px-3 flex flex-col justify-center items-center w-full h-full lg:mt-0 mt-[10vh] gap-y-8">
              <a
                href="#home"
                className="cursor-pointer text-black no-underline hover:text-[#29a587]"
              >
                Home
              </a>
              {/* <a
                href="#services"
                className="cursor-pointer text-black no-underline hover:text-[#29a587]"
              >
                Services
              </a> */}
              <a
                href="#skills"
                className="cursor-pointer text-black no-underline hover:text-[#29a587]"
              >
                Skills
              </a>
              <a
                href="#works"
                className="cursor-pointer text-black no-underline hover:text-[#29a587]"
              >
                Works
              </a>
              <a
                href="#resume"
                className="cursor-pointer text-black no-underline hover:text-[#29a587]"
              >
                Resume
              </a>
              {/* <a
                href="#testimonials"
                className="cursor-pointer text-black no-underline hover:text-[#29a587]"
              >
                Testimonials
              </a> */}
              {/* <a
                href="#pricing"
                className="cursor-pointer text-black no-underline hover:text-[#29a587]"
              >
                Pricing
              </a> */}
              {/* <a
                href="#blog"
                className="cursor-pointer text-black no-underline hover:text-[#29a587]"
              >
                Blog
              </a> */}
              <a
                href="#contact"
                className="cursor-pointer text-black no-underline hover:text-[#29a587]"
              >
                Contact
              </a>
            </ul>
          </div>
        </div>
      ) : null}
    </nav>
  );
};

export default Navbar;
