import React, { useEffect } from "react";
import styled from "styled-components";
import Responsive from "../common/Responsive";
import AOS from "aos";
import "../../libs/aos/aos.css";

const SkillsBlock = styled.section`
  width: 100%;
  height: auto;
  padding-bottom: 10rem;
  background-color: #f9c41d;
  text-align: center;
`;

const SkillsWrap = styled(Responsive)`
  margin: 0 auto;
  padding-top: 2rem;
  width: 100%;
  max-width: 1140px;
  text-align: center;
  box-sizing: border-box;
`;

const SkillsTitle = styled.h2`
  margin: 0 auto;
  font-size: 5rem;
  font-weight: 700;
  font-family: "Noto Sans", sans-serif;
  margin-bottom: 3rem;
`;

const Skill = styled.div`
  width: 250px;
  height: 100px;
  margin: 1rem;
  border: 1px solid white;
  border-radius: 10px;
  background: #fff;
  box-shadow: 1rem 1rem 1rem 0 rgb(68 68 68 / 20%);
  line-height: 100px;
  color: #f4623a;
  font-weight: 700;
  font-family: 'Noto Sans', sans-serif;
}
`;

const SkillsComponent = () => {
  // useEffect(() => {
  //   AOS.init({
  //     duration: 2000,
  //   });
  // });
  return (
    <>
      <SkillsBlock>
        <SkillsTitle>SKILLS</SkillsTitle>
        <SkillsWrap>
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              fontSize: "3rem",
              justifyContent: "center",
            }}
          >
            <Skill
              data-aos="flip-up"
              data-aos-duration="900"
              data-aos-delay="300"
            >
              HTML
            </Skill>
            <Skill
              data-aos="flip-up"
              data-aos-duration="1000"
              data-aos-delay="500"
            >
              CSS
            </Skill>
            <Skill
              data-aos="flip-up"
              data-aos-duration="1200"
              data-aos-delay="700"
            >
              JavaScript
            </Skill>
            <Skill
              data-aos="flip-up"
              data-aos-duration="1400"
              data-aos-delay="900"
            >
              React
            </Skill>
            <Skill
              data-aos="flip-up"
              data-aos-duration="1800"
              data-aos-delay="1100"
            >
              JQuery
            </Skill>
            <Skill
              data-aos="flip-up"
              data-aos-duration="2200"
              data-aos-delay="1300"
            >
              Node.js
            </Skill>
            <Skill
              data-aos="flip-up"
              data-aos-duration="2600"
              data-aos-delay="1500"
            >
              GitHub
            </Skill>
            <Skill
              data-aos="flip-up"
              data-aos-duration="3000"
              data-aos-delay="1700"
            >
              MongoDB
            </Skill>
          </div>
        </SkillsWrap>
      </SkillsBlock>
    </>
  );
};

export default SkillsComponent;
