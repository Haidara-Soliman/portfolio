import EduContent from "../EduContent/EduContent";

const FlexEdu = ({ title, desc }) => {
  return (
    <div className="md:w-[45%] w-[100%] md:flex md:flex-col md:gap-[46px] border-dashed border-l-[2px] border-l-[#344054] relative flex flex-col gap-[50px] justify-between ">
      <img
        src="/portfolio/img/Frame 70.svg"
        className="w-[20px] h-[20px] absolute top-[-0px] left-[-10px] "
      />
      <EduContent title={title} desc={desc} />
    </div>
  );
};

export default FlexEdu;
