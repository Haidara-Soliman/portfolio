import { FaArrowUpLong } from "react-icons/fa6";
import FlexEdu from "../FlexEdu/FlexEdu";
import { Link } from "react-scroll";
import Risk from "../Risk/Risk";
import "./EduExp.css";

const EduExp = () => {
  return (
    <>
      <section
        name="Education"
        className="md:mr-[70px] md:ml-[70px] mr-[25px] ml-[25px] mt-[50px] relative"
      >
        <div className="md:flex md:flex-col md:w-[678px] md:mr-auto md:ml-auto md:mt-[125px] md:items-center md:gap-[8px]">
          <span className="text-[#0C96E2] font-medium text-xl">
            Education and Experience
          </span>
          <h3 className="text-[40px] font-semibold text-[#282938]">
            Education & Experience
          </h3>
        </div>
        <div className="parent md:flex md:flex-row flex-wrap md:gap-[90px] md:mt-[88px] md:justify-between mt-[30px] flex flex-col gap-[90px] justify-between">
          <FlexEdu
            title={"SoftwareEngineer"}
            desc={
              "Graduated from Lattakia univercity software engineering department"
            }
          />{" "}
          <FlexEdu
            title={"Frontend developer"}
            desc={
              "I have a good experience with Reactjs , tailwind and bootstrap , i help you to convert any design from figma to responsive design with clean code and architecture"
            }
          />
          <FlexEdu
            title={"Backend developer"}
            desc={
              "I have a good experience with express,nodejs , RestfullAPI and mongodb and i developed Many websites using the latest technologies and with optimal performance."
            }
          />{" "}
          <FlexEdu
            title={"Freelancer"}
            desc={
              "I implemented a lot of webpages scalable using Reactjs , tailwind with responsive design and clean code and explained a lot of lessons in databases and problem solving"
            }
          />
        </div>
        <button className="btns bg-[#0C96E2] w-[50px] h-[50px] rounded-[12px] absolute right-[2%] md:bottom-[44%] bottom-[25%] ">
          <Link to="Home" duration={500} smooth={true}>
            <FaArrowUpLong className="arro cursor-pointer absolute right-[17px] bottom-[17px] w-[17px] h-[17px] txt-center" />
          </Link>
        </button>
        <Risk />
      </section>
    </>
  );
};

export default EduExp;
