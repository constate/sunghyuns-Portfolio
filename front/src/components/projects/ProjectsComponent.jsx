import React, { useEffect } from "react";
import styled from "styled-components";
import Responsive from "../common/Responsive";

const ProjectsBlock = styled.section`
  width: 100%;
  height: 1600px;
  background-color: #eff1f5;
  color: black;
  text-align: center;
`;

const ProjectTitle = styled.h2`
  /* margin: 0 auto; */
  font-size: 5rem;
  font-weight: 700;
  font-family: "Noto Sans", sans-serif;
  padding-top: 10rem;
  padding-bottom: 10rem;
`;

const ProjectWrap = styled(Responsive)`
  /* margin: 0 auto; */
  width: 100%;
  max-width: 1140px;
  text-align: center;
  box-sizing: border-box;
`;

const ProjectItem = styled.article`
  margin: 0 2rem;
  max-width: 1140px;
  height: 500px;
  box-sizing: border-box;
`;

const ProjectItemTitle = styled.h2`
  font-size: 2.5rem;
  font-weight: 700;
  font-family: "GowunDodum-Regular";
  margin-bottom: 1rem;
`;

const ProjectItemDate = styled.p`
  font-size: 2rem;
  font-family: "GowunDodum-Regular";
  margin-bottom: 2rem;
`;

const ProjectItemDesc = styled.p`
  font-size: 2rem;
  text-align: left;
`;

const ProjectsComponent = () => {
  return (
    <>
      <ProjectsBlock>
        <ProjectTitle>PROJECTS</ProjectTitle>
        <ProjectWrap>
          <ProjectItem
            data-aos="fade-up"
            data-aos-duration="2000"
            data-aos-delay="300"
          >
            <ProjectItemTitle>칵테일 파인더(2인 프로젝트)</ProjectItemTitle>
            <ProjectItemDate>2021-12-15 ~ 2021-12-22</ProjectItemDate>
            <ProjectItemDesc>
              칵테일에 대한 정보를 나타내는 웹/모바일 앱으로, 분위기별 테마를
              나누어 칵테일을 추천하고 랜덤한 칵테일을 보여주는 기능을 가지고
              있습니다.
            </ProjectItemDesc>
            <a href="http://cocktaildeployee.s3-website.ap-northeast-2.amazonaws.com/">
              웹 보러가기
            </a>
          </ProjectItem>
        </ProjectWrap>
      </ProjectsBlock>
    </>
  );
};

export default ProjectsComponent;
