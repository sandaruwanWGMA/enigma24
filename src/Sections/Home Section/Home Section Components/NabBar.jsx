import React from "react";
import "../Home Section Styles/NavBar.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";

const NavBar = ({ style, scrollToAbout }) => {
  return (
    <nav style={style}>
      <a href="#home">Home</a>
      <a href="#guidelines">Guidelines</a>
      <a href="#contact">Contact Us</a>
      <a onClick={scrollToAbout} href="#more">
        More{" "}
        <FontAwesomeIcon icon={faChevronDown} style={{ fontSize: "0.9em" }} />
      </a>
    </nav>
  );
};

export default NavBar;