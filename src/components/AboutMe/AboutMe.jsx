import SkillLev from "../SkillsLev/SkillLev";

const AboutMe = () => {
  const w = [
    { lang: "html", val: "100", cost: "100%" },
    { lang: "CSS", val: "100", cost: "100%" },
    { lang: "JS", val: "100", cost: "100%" },
    { lang: "React", val: "100", cost: "100%" },
  ];
  return (
    <section
      name="About me"
      className=" md:flex md:flex-row md:justify-between md:ml-[70px] md:mr-[70px] md:mt-[50px] flex flex-col mt-[50px] ml-[25px] mr-[25px] items-center"
    >
      <img
        src="/portfolio/img/Group 1000001803.png"
        className="md:max-w-[420px]"
      />
      <div className="md:flex md:flex-col gap-[40px] justify-between md:max-w-[598px] mt-[50px]">
        <div className="md:flex md:flex-col md:gap-[12px] ">
          <h1 className="w-[210px] font-semibold text-[#1D2130] text-[40px]">
            About Me
          </h1>
          <p className="text-lg font-normal mt-[25px]">
            Lorem ipsum dolor sit amet consectetur. Tristique amet sed massa
            nibh lectus netus in. Aliquet donec morbi convallis pretium. Turpis
            tempus pharetra
          </p>
        </div>

        <div className="md:flex md:flex-col md:gap-[19px] mt-[25px]">
          {w.map((item, index) => {
            return (
              <SkillLev
                key={index}
                lang={item.lang}
                val={item.val}
                pos={item.pos}
                cost={item.cost}
              />
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
