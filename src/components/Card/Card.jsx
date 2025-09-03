import { Link, useNavigate } from "react-router-dom";

const Card = ({ id, title, langs, imag }) => {
  // here we write the array of project details information
  const navigate = useNavigate();
  const goToDetails = () => {
    navigate(`/ProjectDetails.jsx/${id}`);
  };
  return (
    <div className="md:w-[370px] md:h-[320px] md:flex md:flex-col md:gap-8 rounded-x flex flex-col ">
      <img src={imag} className="rounded-lg h-[220px] object-contain" />
      <div className="parent md:flex justify-between items-end flex gap-[15px]">
        <div className="demo md:flex md:flex-col gap-[11px]">
          <h2 className="text-[22px] font-semibold text-[#1D2130]">{title}</h2>
          <p className="text-[16px] font-normal text-[#1D2130]">{langs}</p>
        </div>
        <Link onClick={() => goToDetails()}>
          <img
            src="/portfolio/img/ShowDemo.svg"
            className="md:w-[35px] md:h-[35px] w-7 h-7"
          />
        </Link>
      </div>
    </div>
  );
};

export default Card;
