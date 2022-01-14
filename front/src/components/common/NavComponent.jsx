import React from "react";
import styled from "styled-components";
import Responsive from "./Responsive";

const NavBlock = styled.nav`
  padding: 2rem 0;
  width: 100%;
  height: 40px;
  position: fixed;
  top: 0;
  box-shadow: 0px 2px 3px rgba(0, 0, 0, 0.08);
  z-index: 999;
  background: #fff;
`;

const NavWrapper = styled(Responsive)`
  display: flex;
  justify-content: space-between;
  line-height: 40px;

  .title {
    display: flex;
    align-items: center;
    font-size: 2.5rem;
    font-weight: 700;
  }
  .contents {
    display: flex;
    align-items: center;
  }
`;

const Title = styled.div``;
const Contents = styled.div``;
const Item = styled.div`
  padding: 0 1rem;
  font-size: 1.8rem;
`;

const NavComponent = () => {
  return (
    <NavBlock>
      <NavWrapper>
        <Title
          className="title"
          onClick={() => {
            window.scrollTo(0, 0);
          }}
        >
          SungHyun's Portfolio
        </Title>
        <Contents className="contents">
          <Item>Intro</Item>
          <Item>Skills</Item>
          <Item>Projects</Item>
        </Contents>
      </NavWrapper>
    </NavBlock>
  );
};

export default NavComponent;
