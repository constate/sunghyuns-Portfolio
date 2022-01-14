import React from "react";
import styled from "styled-components";
import { MdEmail, MdHome, MdPhoneIphone } from "react-icons/md";
import Responsive from "../common/Responsive";

const IntroBlock = styled.header`
  width: 100%;
  height: 650px;
  text-align: center;
  /* position: fixed; */
`;

const IntroWrap = styled(Responsive)`
  margin: 0 auto;
  padding: 5rem 0;
  width: 100%;
  max-width: 1140px;
  /* height: 600px; */
  text-align: center;
  box-sizing: border-box;
`;

const IntroTitle = styled.div`
  font-size: 4rem;
  font-weight: 500;
  font-family: "Noto Sans", sans-serif;
  line-height: 6rem;
`;

const IntroHr = styled.hr`
  width: 5rem;
  margin-top: 2.5rem;
  margin-bottom: 2.5rem;
  border-top: 3px solid #f9c41d;
`;

const IntroDesc = styled.div`
  font-size: 2.5rem;
  line-height: 3rem;
  margin-bottom: 5rem;
  font-family: "GowunDodum-Regular";
`;

const IntroIcon = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;

  & + & {
    margin-top: 1rem;
  }
`;

const IntroIconDesc = styled.span`
  font-size: 2rem;
  color: #fff;
  font-family: "GowunDodum-Regular";
`;

const IntroComponent = () => {
  return (
    <>
      <IntroBlock>
        <IntroWrap>
          <IntroTitle>
            Junior Web developer <br />
            SUNG HYUN KIM
          </IntroTitle>
          <IntroHr />
          <IntroDesc>
            안녕하세요! <br />
            문제 해결을 좋아하는 웹 개발자 김성현 입니다. <br />
            주도적 과제 진행을 좋아하며 항상 새로운 기술 습득에 힘쓰고 있습니다.
          </IntroDesc>
          <div
            style={{
              width: "300px",
              height: "100%",
              padding: "3rem 0",
              borderRadius: "10px",
              backgroundColor: "#222",
              margin: "0 auto",
            }}
          >
            <IntroIcon>
              <IntroIconDesc>김 성 현</IntroIconDesc>
            </IntroIcon>
            <IntroIcon>
              <MdHome size="30" color="#fff" />
              <IntroIconDesc>서울시 금천구</IntroIconDesc>
            </IntroIcon>
            <IntroIcon>
              <MdPhoneIphone size="30" color="#fff" />
              <IntroIconDesc>010-6814-9311</IntroIconDesc>
            </IntroIcon>
            <IntroIcon>
              <MdEmail size="30" color="#fff" />
              <IntroIconDesc>constate93@gmail.com</IntroIconDesc>
            </IntroIcon>
          </div>
        </IntroWrap>
      </IntroBlock>
      <div style={{ position: "relative", top: "3px" }}>
        <svg
          preserveAspectRatio="none"
          width="100%"
          height="100"
          viewBox="0 0 1440 75"
        >
          <path
            d="M456.464 0.0433865C277.158 -1.70575 0 50.0141 0 50.0141V74H1440V50.0141C1440 50.0141 1320.4 31.1925 1243.09 27.0276C1099.33 19.2816 1019.08 53.1981 875.138 50.0141C710.527 46.3727 621.108 1.64949 456.464 0.0433865Z"
            fill="#f9c41d"
            stroke="#f9c41d"
          ></path>
        </svg>
      </div>
    </>
  );
};

export default IntroComponent;
