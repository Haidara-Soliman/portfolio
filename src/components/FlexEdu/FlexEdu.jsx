import EduContent from "../EduContent/EduContent";

const FlexEdu = () => {
  return (
    <div className="md:flex md:flex-col md:gap-[46px] border-dashed border-l-[2px] border-l-[#344054] relative flex flex-col gap-[50px] justify-between ">
      <img
        src="/portfolio/public/img/Frame 70.svg"
        className="w-[20px] h-[20px] absolute md:top-[160px] top-[175px] left-[-10px]"
      />
      <img
        src="/portfolio/public/img/Frame 70.svg"
        className="w-[20px] h-[20px] absolute top-[-0px] left-[-10px] "
      />
      <EduContent
        title={"haidara"}
        content={
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur quis vero quisquam, minus, sunt corrupti et, "
        }
      />
      <EduContent
        title={"haidara"}
        content={
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur quis vero quisquam, minus, sunt corrupti et, "
        }
      />
    </div>
  );
};

export default FlexEdu;
