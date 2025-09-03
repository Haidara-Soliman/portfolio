import { Link } from "react-router-dom";
import Slider from "../Slider/Slider";
import MyProjects from "../MyProjects/MyProjects";

const ProjectInfo = ({ image, title, date, content, langs, fram, library }) => {
  return (
    <>
      <section className="container w-[90%] md:h-[100vh] md:flex md:flex-row md:justify-between md:mr-[69px] md:ml-[69px] flex flex-col items-center gap-[43px] pt-[0px] mr-[25px] ml-[25px] border-dashed border-b-[1px] border-l-[#1D2130]">
        <img
          src={image}
          alt="EduPress"
          className="md:w-[51%] w-[90%] md:h-[400px] object-contain rounded-md h-[220px]"
        />

        <div className="w-[80%] details flex flex-col justify-between gap-4">
          <div className="information flex flex-col gap-0.5">
            <h1 className="text-[28px] font-[600] text-[#1D2130] font-[poppins]">
              {title}
            </h1>
            <p className="text-[14px] font-[500] text-[#A6A6A6] ">{date}</p>
            <p className="text-[18px] font-[400] text-[#1D2130] font-[poppins]">
              {content}
            </p>
          </div>

          <div className="content flex flex-col gap-[12px]">
            <h3 className="text-[18px] font-[400] text-[#1D2130] font-[poppins]">
              Basic Languages : {langs}
            </h3>
            <h3 className="text-[18px] font-[400] text-[#1D2130] font-[poppins]">
              Framwork : {fram}
            </h3>
            <h3 className="text-[18px] font-[400] text-[#1D2130] font-[poppins]">
              Libraries : {library}
            </h3>
          </div>
          <button className="md:w-[163px] w-[150px] h-[51px] border-none text-[14px] font-[Inter] font-medium bg-[#0c96e2] rounded-[8px] text-[#FFFFFF] cursor-pointer ">
            <Link>Github Repo</Link>
          </button>
        </div>
        <div>
          <img
            src="/portfolio/img/dot.svg"
            className=" w-[22px] h-[22px] absolute left-[50%] md:top-[98%] top-[163%]"
          />
        </div>
      </section>
      {/* <MyProjects/> */}
    </>
  );
};

export default ProjectInfo;
