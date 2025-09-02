import { GoArrowUpRight } from "react-icons/go";
import Card from "../Card/Card";
import { Link, Outlet } from "react-router-dom";

const MyProjects = () => {
  const projects = [
    {
      id: "1",
      title: "EduPress",
      langs: "Html-Css",
      imag: "/portfolio/public/img/EduPress.jpg",
    },
    {
      id: "2",
      title: "Stories and interviews",
      langs: "Reactjs-Tailwind",
      imag: "/portfolio/public/img/Interviews.jpg",
    },
  ];
  return (
    <section
      name="Projects"
      className="mt-[90px] md:mr-[70px] md:ml-[70px] mr-[25px] ml-[25px]"
    >
      <div className="flex flex-col items-center gap-9 md:flex md:flex-row md:justify-between md:h-[146px] md:items-end">
        <div className="flex flex-col gap-2">
          <span className="text-xl font-medium text-[#0C96E2]">Portfolio</span>
          <h1 className="md:text-[40px] text-[30px] font-semibold text-[#1D2130] md:w-[362px]">
            My Creative Works Latest
            <span className="text-[#0C96E2]">Projects</span>
          </h1>
        </div>
        <button>
          <Link
            to={"https://github.com"}
            className="relative flex justify-evenly items-center w-[163px] md:w-[155px] h-[50px] border-none text-[15px] font-medium bg-[#0c96e2] border-[6px] text-[#eee] cursor-pointer font-[Manrope] rounded-[8px]"
          >
            View Github
            <GoArrowUpRight className="w-[20px] h-5 text-[#eee]" />
          </Link>
        </button>
      </div>
      <div className="md:mt-[56px] md:flex md:flex-wrap md:flex-row md:gap-[50px] md:justify-center flex flex-col items-center mt-[40px] gap-[25px]">
        {projects.map((item, id) => {
          return (
            <Card
              key={id}
              id={item.id}
              title={item.title}
              langs={item.langs}
              imag={item.imag}
            />
          );
        })}
      </div>
    </section>
  );
};
export default MyProjects;
