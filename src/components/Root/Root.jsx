import { NavBar } from "../NavBar/NavBar";
import AboutMe from "../AboutMe/AboutMe";
import Home from "../Home/Home";
import EduExp from "../EduExp/EduExp";
import Risk from "../Risk/Risk";
import MyProjects from "../MyProjects/MyProjects";
import Contact from "../Contact/Contact";
import Footer from "../Footer/Footer";
import { useState } from "react";

const Root = () => {
  const [mode, setMode] = useState("dark");
  return (
    <>
      <NavBar
        items={["Home", "About me", "Education", "Projects", "Contact"]}
        mode={mode}
        changeMode={setMode}
      />
      <Home />
      <AboutMe />
      <EduExp />
      {/* <Risk /> */}
      <MyProjects />
      <Contact />
      <Footer />
    </>
  );
};

export default Root;
