// import Resume from "/public/Files/Resume.pdf";
import { useEffect, useState } from "react";
import HaidaraSoliman from "/public/Files/Haidara Soliman.pdf";

// Typewriter component
function Typewriter({ text, speed }) {
  const [displayedText, setDisplayedText] = useState("");

  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      setDisplayedText((prev) => prev + text.charAt(index));
      index++;
      if (index >= text.length) {
        clearInterval(interval);
      }
    }, speed);

    // Cleanup on unmount
    return () => clearInterval(interval);
  }, [text, speed]);

  return <span>{displayedText}</span>;
}

const Home = () => {
  return (
    <>
      <section
        name="Home"
        className="flex flex-col items-center mr-[25px] ml-[25px] justify-between pt-[110px] gap-[50px] md:flex md:flex-row md:ml-[70px] md:mr-[70px] border-dashed border-b-[1px] border-l-[#1D2130] pb-[100px] relative"
      >
        <div className="max-w-[645px] flex flex-col gap-[40px]">
          <div className="max-w-[562px]">
            <p className="w-[100px]  h-[42px]">
              <span className="text-[#0C96E2] text-[20px]">Welcome</span>
            </p>
            <h1 className="typing text-[#1D2130] font-[700] text-[24px] md:text-[55px]">
              <span className="font-[300]">HEY ! </span>
              <Typewriter
                text="I ’m Haidara , SoftwareEngineer & junior Frontend
              Dev"
                speed={100}
              />
            </h1>
          </div>
          <div className="flex flex-col gap-[35px]">
            <p className="font-[400] text-base font-[inter]">
              I am a trainee in B4F in tartous cohoret I have good experience in
              web development and can help you choose the right design for your
              website while providing full technical support.
            </p>
            <button className="btns w-[155px] h-[50px] border-none text-[15px] rounded-[8px] font-semibold bg-[#0c96e2] border-[6px] text-[#eee] cursor-pointer ">
              <a href={HaidaraSoliman} download="resume">
                Download Cv
              </a>
            </button>
          </div>
        </div>
        <img
          src="/portfolio/img/personalImage.JPG"
          className="shadow-xl/40 rounded-[9px] w-[385px] h-[444px] z-[2]"
        />
        <img
          src="/portfolio/img/dot.svg"
          className="w-[22px] h-[22px] absolute left-[50%] md:top-[98%] top-[99%]"
        />
      </section>
    </>
  );
};

export default Home;
