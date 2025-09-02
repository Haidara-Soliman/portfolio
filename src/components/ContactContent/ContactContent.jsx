const ContactContent = ({ img, title, content }) => {
  return (
    <div className="md:flex md:flex-row md:gap-5 flex flex-col gap-[15px] flex-wrap">
      <img src={img} className="w-[62px] h-[56px] rounded-lg " />
      <div className="md:flex md:flex-col md:gap-2">
        <p className="text-[#92929D] text-base font-normal font-[Inter]">
          {title}
        </p>
        <h3 className="text-base font-medium font-[Inter] text-[#1D2130]">
          {content}
        </h3>
      </div>
    </div>
  );
};

export default ContactContent;
