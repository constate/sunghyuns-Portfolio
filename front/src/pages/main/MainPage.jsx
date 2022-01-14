import React from "react";
import NavContainer from "../../containers/common/NavContainer";
import IntroContainer from "../../containers/intro/IntroContainer";
import SkillsContainer from "../../containers/skills/SkillsContainer";
import ProjectsContainer from "../../containers/projects/ProjectsContainer";
import FooterContainer from "../../containers/common/FooterContainer";

const MainPage = () => {
  return (
    <>
      <NavContainer />
      <IntroContainer />
      <SkillsContainer />
      <ProjectsContainer />
      <FooterContainer />
    </>
  );
};

export default MainPage;
