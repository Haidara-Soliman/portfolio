import { useState } from "react";
import { FaBars, FaMoon } from "react-icons/fa";
import { IoClose, IoMoon } from "react-icons/io5";
import { MdSunny } from "react-icons/md";
import { Link as ScrollLink } from "react-scroll";
import "./NavBar.css";
export const NavBar = ({ items, mode, changeMode }) => {
  const [showNav, setShowNav] = useState(true);
  const ShowNav = () => {
    const nav = document.querySelector(".navmenue");
    if (showNav == true) {
      nav.classList.add("show");
    } else if (showNav == false) {
      nav.classList.remove("show");
    }
  };
  return (
    <nav
      id="navigat"
      className=" w-[89%] flex justify-between md:ml-[70px] md:mr-[70px] mr-[25px] ml-[25px] pt-[40px] font-pop fixed top-[0] rounded-[5px] z-[5] "
    >
      <h2 className=" text-[24px] text-[#1D2130] font-semibold">Haidara</h2>
      <ul className="navmenue w-[100%]  flex flex-col gap-3 absolute top-[-200px] transition-normal duration-[0.7s] transition-all md:top-[0]  items-center justify-center md:relative md:gap-[24px] md:flex md:flex-row">
        {items.map((item, index) => {
          return (
            <li key={index}>
              <ScrollLink
                key={index}
                to={item}
                smooth
                spy
                className="cursor-pointer"
                activeClass="link-active"
                offset={-85}
              >
                {item}
              </ScrollLink>
            </li>
          );
        })}
      </ul>
      <button
        onClick={() => {
          changeMode((prev) => (prev == "light" ? "dark" : "light"));
          console.log(mode);
          const a = document.querySelector("#root");
          if (mode == "dark") {
            a.classList.remove("light");
            a.classList.add("dark");
          } else {
            a.classList.remove("dark");
            a.classList.add("light");
          }
        }}
      >
        {mode == "light" ? (
          <MdSunny className="cursor-pointer text-[#eee]" />
        ) : (
          <IoMoon className="cursor-pointer" />
        )}
      </button>
      <button className="md:hidden w-[25px] h-[36px]">
        {showNav == true ? (
          <FaBars
            className={`cursor-pointer w-[20px] h-[20px] ${
              mode == "light" ? "iconColor" : ""
            }`}
            onClick={() => {
              setShowNav(!showNav);
              ShowNav();
            }}
          />
        ) : (
          <IoClose
            className={`cursor-pointer w-[20px] h-[20px] ${
              mode == "light" ? "iconColor" : ""
            }`}
            onClick={() => {
              setShowNav(!showNav);
              ShowNav();
            }}
          />
        )}
      </button>
    </nav>
  );
};
