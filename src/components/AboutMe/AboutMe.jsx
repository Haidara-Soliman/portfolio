import SkillLev from "../SkillsLev/SkillLev";
import "./AboutMe.css";
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
      <div className="imgs w-[85%] md:w-[40%] relative h-[80vh]">
        <img src="/portfolio/img/ReactPh.png" alt="" />
        <img src="/portfolio/img/CssPh.png" alt="" />
        <img src="/portfolio/img/FigmaPh.png" alt="" />
        <img src="/portfolio/img/HtmlPh.png" alt="" />
        <img src="/portfolio/img//GithubPh.png" alt="" />
      </div>
      <div className="md:flex md:flex-col gap-[40px] justify-between md:max-w-[50%] w-[100%] mt-[50px]">
        <div className="md:flex md:flex-col md:gap-[12px] ">
          <h1 className="w-[210px] font-semibold text-[#1D2130] text-[40px]">
            About Me
          </h1>
          <p className="text-lg font-normal mt-[25px]">
            {/* I have designed and implemented many websites in different
            languages, and I have good experience in both back-end and front-end
            development. I have worked with several languages such as HTML5,
            CSS3, Tailwind, React , nodejs , mongodb .. etc and I have provided
            various services on remote programming platforms as a freelancer.. */}
            Strategic , motivated software engineer with paractical experience
            in Software Engineering Passionate about building scalable
            applications, learning new technologies, and contributing to team
            success. All combined with persistence to provide services with the
            best quality and to grow professionally .
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
