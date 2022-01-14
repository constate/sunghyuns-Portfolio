import React, { useEffect } from "react";
import NavComponent from "../../components/common/NavComponent";
import AOS from "aos";
import "../../libs/aos/aos.css";

const NavContainer = () => {
  useEffect(() => {
    AOS.init({
      once: true,
    });
  });
  return (
    <>
      <NavComponent />
    </>
  );
};

export default NavContainer;
