const EduContent = ({ title, content }) => {
  return (
    <div className="md:flex md:gap-[14px] md:flex-col md:ml-[47px] flex flex-col gap-[30px] ml-[30px]">
      <h4 className="text-[#344054] font-medium">{title}</h4>
      <p className="text-[#98A2B3] font-normal text-base h-[72px]">{content}</p>
    </div>
  );
};

export default EduContent;
