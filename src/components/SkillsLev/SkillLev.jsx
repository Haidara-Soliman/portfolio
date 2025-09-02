import { HiChatBubbleBottomCenter } from "react-icons/hi2";

const SkillLev = ({ lang, val, cost }) => {
  return (
    <div className="md:flex md:flex-col md:gap-[4px] flex flex-col gap-4">
      <div className="md:flex md:justify-between relative">
        <h3 className="font-semibold text-[#1D2130] text-2xl">{lang}</h3>
        <p className="font-[Inter] text-[#fff] md:text-[10px] text-[8px] font-[400] z-10 absolute md:right-[-3px] md:top-1 top-[26px] right-[3px]">
          {cost}
        </p>
        <div
          className={`absolute md:right-[-10px] right-[0px] top-[20px] md:top-0`}
        >
          <HiChatBubbleBottomCenter
            className={`md:w-[42px] w-[28px] h-[30px] text-[#0C96E2] `}
          />
        </div>
      </div>
      <input className="text-[#0C96E2]" type="range" value={val} readOnly />
    </div>
  );
};

export default SkillLev;
