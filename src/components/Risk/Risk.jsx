import { GoArrowRight } from "react-icons/go";
import { Link } from "react-scroll";

const Risk = () => {
  return (
    <section className="flex md:h-[375px] md:mr-[70px] md:ml-[70px] md:w-[95%] md:mt-[160px] bg-[url('../../../portfolio/img/BgExperience.png')]  bg-cover bg-no-repeat relative mt-[200px] mr-[25px] ml-[25px]">
      <div className="container flex flex-col gap-6 p-[15px] items-center md:flex-row md:gap-8 md:justify-center md:p-[20px]">
        <div className="flex flex-col gap-[15px] md:gap-2.5 h-[135px] md:w-[589px] text-[#FFFFFF]">
          <h1 className="md:text-5xl text-[24px] font-semibold">
            Try me out, risk free!
          </h1>
          <p className="md:text-xl text-[14px] font-normal">
            If you’re not happy with the design after the first draft, I’ll
            refund your deposit, no questions asked
          </p>
        </div>
        <button className="pt-4">
          <Link
            to={"Contact"}
            smooth={true}
            duration={500}
            className="relative flex justify-evenly items-center w-[125px] md:w-[155px] h-[50px] border-none text-[15px] font-semibold bg-[#0c96e2] border-[6px] text-[#eee] cursor-pointer font-[Manrope] rounded-[6px]"
          >
            Contact
            <GoArrowRight className="w-[20px] h-5 text-[#eee]" />
          </Link>
        </button>
      </div>
    </section>
  );
};

export default Risk;
