import { FaFacebookF, FaGithub, FaLinkedinIn } from "react-icons/fa";
import { Link } from "react-router-dom";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="md:mt-[94px] flex flex-row justify-between border-t border-solid border-[#BEC0BF] md:ml-[68px] md:mr-[72px] mr-[25px] mt-[32px] ml-[25px] pt-8 pb-[40px] gap-2">
      <p className="font-[Inter] font-normal text-base text-[#1D2130]">
        @ 2026. All Rights Reserved
      </p>
      <p className="font-[Inter] font-normal text-base text-[#1D2130]">
        Develpoment by Haidara
      </p>
      <div className="flex md:gap-4 gap-2.5">
        <Link to={"https://www.facebook.com/share/15p2aQqUgs/"}>
          <FaFacebookF className="icons-style" />
        </Link>
        <Link
          to={
            "https://www.linkedin.com/in/haidara-soliman-638a50223?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
          }
        >
          <FaLinkedinIn className="icons-style" />
        </Link>

        <Link to={"https://github.com/Haidara-Soliman"}>
          <FaGithub className="icons-style" />
        </Link>
      </div>
    </footer>
  );
};

export default Footer;
