import { FaArrowUpLong } from "react-icons/fa6";
import FlexEdu from "../FlexEdu/FlexEdu";
import { Link } from "react-scroll";
import Risk from "../Risk/Risk";

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
        <div className="parent md:flex md:flex-row md:gap-[90px] md:mt-[88px] md:justify-between mt-[30px] flex flex-col gap-[90px] justify-between">
          <FlexEdu />
          <FlexEdu />
        </div>
        <button className="bg-[#0C96E2] w-[50px] h-[50px] rounded-[12px] absolute right-[2%] md:bottom-[44%] bottom-[25%] ">
          <Link to="Home" duration={500} smooth={true}>
            <FaArrowUpLong className="cursor-pointer text-[#fff] absolute right-[17px] bottom-[17px] w-[17px] h-[17px]" />
          </Link>
        </button>
        <Risk />
      </section>
    </>
  );
};

export default EduExp;
