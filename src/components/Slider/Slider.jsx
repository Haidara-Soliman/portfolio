import Card from "../Card/Card";

const Slider = () => {
  const projects = [
    {
      id: "1",
      title: "EduPress",
      langs: "Html-Css",
      imag: "/portfolio/img/EduPress.jpg",
    },
    {
      id: "2",
      title: "Stories and interviews",
      langs: "Reactjs-Tailwind",
      imag: "/portfolio/img/Interviews.jpg",
    },
  ];
  return (
    <>
      <section className="slider md:mr-[70px] md:ml-[70px] mr-[25px] ml-[25px] mt-[90px] md:flex md:flex-col gap-14">
        <div className="title flex md:justify-between md:flex-row flex-col gap-6 items-center">
          <div>
            <span className="text-xl font-medium text-[#0C96E2]">
              Portfolio
            </span>
            <p className="md:text-[40px] text-[30px] font-semibold text-[#1D2130] md:w-[362px]">
              The Best <span className="text-[#0C96E2]">Projects</span>
            </p>
          </div>
          <div className="btns flex gap-2">
            <button>
              <img src="/portfolio/img/leftarrow.svg" alt="" />
            </button>
            <button>
              <img src="/portfolio/img/rightarrow.svg" alt="" />
            </button>
          </div>
        </div>
        <div className="cards md:flex gap-[50px] flex-wrap md:gap-[50px] md:justify-center">
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
    </>
  );
};

export default Slider;
