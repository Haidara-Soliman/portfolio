import { useState } from "react";
import { NavBar } from "../NavBar/NavBar";
import Footer from "../Footer/Footer";
import ProjectInfo from "../ProjectInfo/ProjectInfo";
import { useParams } from "react-router-dom";
import Slider from "../Slider/Slider";
import Carousel from "react-multi-carousel";
import Card from "../Card/Card";

const ProjectDetails = () => {
  const details = [
    {
      id: "1",
      title: "EduPress",
      date: "15-09-2024",
      langs: "Html-CssPure",
      fram: "#NA",
      content: "Edupress is a website for ",
      img: "/portfolio/img/EduPress.jpg",
      library: "#NA",
    },
    {
      id: "2",
      title: "Stories and interviews",
      date: "24-12-2024",
      langs: "Html-Css",
      fram: "Reactjs,Tailwindcss",
      content: "this is my first project",
      img: "/portfolio/img/Interviews.jpg",
      library: "React-router-dom , react-icons",
    },
  ];
  const responsive = {
    desktop: { breakpoint: { max: 3000, min: 1024 }, items: 2 },
    tablet: { breakpoint: { max: 1024, min: 464 }, items: 1 },
    mobile: { breakpoint: { max: 464, min: 0 }, items: 1 },
  };
  const [mode, setMode] = useState("dark");
  let { id } = useParams();
  console.log(id);
  // const project = details.find((p) => p.id === id);

  return (
    <>
      <NavBar
        items={["Home", "About me", "Education", "Projects", "Contact"]}
        mode={mode}
        changeMode={setMode}
      />

      {details.map((item, index) => {
        return (
          item.id == id && (
            <ProjectInfo
              key={index}
              title={item.title}
              date={item.date}
              langs={item.langs}
              fram={item.fram}
              content={item.content}
              image={item.img}
              library={item.library}
            />
          )
        );
      })}
      {/* <Slider /> */}
      <div className="mr-[69px] ml-[69px]">
        <Carousel responsive={responsive}>
          {details.map((item, id) => {
            return (
              <Card
                key={id}
                id={item.id}
                title={item.title}
                langs={item.langs}
                imag={item.img}
              />
            );
          })}
        </Carousel>
      </div>
      <Footer />
    </>
  );
};

export default ProjectDetails;
