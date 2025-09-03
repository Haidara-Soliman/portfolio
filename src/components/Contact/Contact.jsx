import ContactContent from "../ContactContent/ContactContent";
import "./Contact.css";
const Contact = () => {
  return (
    <section
      name="Contact"
      className="mt-[90px] md:mr-[70px] md:ml-[70px] mr-[25px] ml-[25px] md:flex md:flex-col md:gap-[56px] flex flex-col gap-[25px]"
    >
      <div className="flex flex-col items-center gap-9 md:flex md:flex-row md:justify-between md:h-[146px] md:items-end">
        <div className="flex flex-col gap-2">
          <p className="text-xl font-medium text-[#0C96E2]">Contact</p>
          <h1 className="md:text-[40px] text-[30px] font-semibold text-[#1D2130]">
            Let’s Discuss Your <span className="text-[#0C96E2]">Project</span>
          </h1>
        </div>
      </div>
      <div className="parent md:flex md:flex-row gap-[60px] justify-between flex flex-col">
        <div className="parent md:flex md:flex-col md:justify-between flex flex-col gap-[25px]">
          <ContactContent
            img={"/portfolio/img/phone.svg"}
            title={"Call me or whatsApp"}
            content={"+963938442232"}
          />
          <ContactContent
            img={"/portfolio/img/Email.svg"}
            title={"Email me"}
            content={"haidarasoliman956@gmail.com"}
          />
          <ContactContent
            img={"/portfolio/img/Location.svg"}
            title={"Address"}
            content={"Syria"}
          />
        </div>
        <form className="md:flex md:flex-row md:flex-wrap md:gap-x-[26] md:gap-y-[24px] md:justify-between flex flex-col gap-3 items-center">
          <input
            type="text"
            placeholder="Full name"
            className="border border-solid border-[#BEC0BF] rounded-lg h-14 text-base font-normal font-[Inter] text-[#92929D] p-3  md:w-[48%] w-[100%]"
          />
          <input
            type="text"
            placeholder="Your email"
            className="border border-solid border-[#BEC0BF] rounded-lg h-14 text-base font-normal font-[Inter] text-[#92929D] p-3  md:w-[48%] w-[100%]"
          />
          <input
            type="text"
            placeholder="Phone number"
            className="border border-solid border-[#BEC0BF] rounded-lg text-base font-normal font-[Inter] text-[#92929D] p-3 h-14 w-[100%]"
          />
          <textarea
            placeholder="Message"
            className="border border-solid border-[#BEC0BF] rounded-lg text-base font-normal font-[Inter] text-[#92929D]  p-3  h-[170px] w-[100%]"
          ></textarea>
          <button className="md:w-[200px] w-[150px] h-[50px] border-none text-[14px] font-[Inter] font-medium bg-[#0c96e2] rounded-[8px] text-[#FFFFFF] cursor-pointer ">
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
