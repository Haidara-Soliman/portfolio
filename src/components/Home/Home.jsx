import Resume from "/public/Files/Resume.pdf";

const Home = () => {
  return (
    <>
      <section
        name="Home"
        className="flex flex-col items-center mr-[25px] ml-[25px] justify-between pt-[100px] gap-[50px] md:flex md:flex-row md:ml-[70px] md:mr-[70px] border-dashed border-b-[1px] border-l-[#1D2130] pb-[100px] relative"
      >
        <div className="max-w-[645px] flex flex-col gap-[40px]">
          <div className="max-w-[562px]">
            <p className="w-[100px]  h-[42px]">
              <span className="text-[#0C96E2]">Welcome</span>
            </p>
            <h1 className="text-[#1D2130] font-[700] text-[55px]">
              <span className="font-[300]">HEY!</span> I’m Haidara , Frontend
              Developer
            </h1>
          </div>
          <div className="flex flex-col gap-[35px]">
            <p className="font-[400] text-base font-[inter]">
              I’m Tanvir, a creative Product Designer. I’ve been helping
              businesses to solve their problems with my design for 2 years.
            </p>
            <button className="w-[155px] h-[50px] border-none text-[15px] font-semibold bg-[#0c96e2] border-[6px] text-[#eee] cursor-pointer ">
              <a href={Resume} download="resume">
                Download Cv
              </a>
            </button>
          </div>
        </div>
        <img
          src="/portfolio/img/person.png"
          className="w-[385px] h-[444px] z-[2]"
        />
        <img
          src="/portfolio/img/dot.svg"
          className=" w-[22px] h-[22px] absolute left-[50%] md:top-[98%] top-[99%]"
        />
      </section>
    </>
  );
};

export default Home;
