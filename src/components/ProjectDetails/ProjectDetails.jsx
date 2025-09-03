import { useState } from "react";
import { NavBar } from "../NavBar/NavBar";
import Footer from "../Footer/Footer";
import MyProjects from "../MyProjects/MyProjects";
import ProjectInfo from "../ProjectInfo/ProjectInfo";
import { useParams } from "react-router-dom";
import Home from "../Home/Home";

const ProjectDetails = () => {
  const details = [
    {
      id: "1",
      title: "EduPress",
      date: "24-12-2024",
      langs: "Html-Css",
      fram: "",
      content:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi in eaque ipsa, veritatis quae obcaecati officiis fugiat necessitatibus sit similique laboriosam optio aspernatur, natus ipsum nemo sed cum! Quaerat, et? ",
      img: "/portfolio/img/EduPress.jpg",
      library: "",
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
      {/* <Home /> */}
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
      {/* <Home /> */}
      <Footer />
    </>
  );
};

export default ProjectDetails;
