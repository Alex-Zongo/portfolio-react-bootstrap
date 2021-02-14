import React from "react";
import Typed from "react-typed";

function Header() {
  return (
    <div className="header-wrapper">
      <div className="main-info">
        <h1>
          Web Development, Data Sciences(ML) & Engineering Design and Control
        </h1>
        <Typed
          className="typed-text"
          strings={[
            "Web development",
            "Data Science",
            "Machine Learning",
            "Aircraft Design & Control",
          ]}
          typeSpeed={40}
          backSpeed={60}
          loop
        />
        <a href="#" className="btn-main-offer">
          Contact
        </a>
      </div>
    </div>
  );
}

export default Header;
