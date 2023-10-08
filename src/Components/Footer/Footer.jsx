import React from "react";
import logo from "../../assets/images/logo.png";

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <div className="px-5">
        <hr />
      <div className="d-flex align-items-center justify-content-between px-5">
        <img src={logo} style={{width: 6 + "rem"}} alt="logo" />
        <div>
          <p className="text-secondary badge">Copyright 	&copy; {year} All Rights Reserved</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
