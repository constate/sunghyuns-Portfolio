import React from "react";
import styled from "styled-components";

const FooterWrap = styled.footer`
  height: 150px;
  background: #222;
  color: white;
`;

const FooterComponent = () => {
  return (
    <>
      <FooterWrap>FooterComponent</FooterWrap>
    </>
  );
};

export default FooterComponent;
