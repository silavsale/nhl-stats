import React from "react";
import { Avatar } from "@rmwc/avatar";
import logo from "./nhl-icon.png";
// import logo from "./nhl-logo-png-transparent-png.png";
// import logo from "./nhl-logo-vector-21.png";
import "@rmwc/avatar/styles";
// import "./Logo.scss"; // Tell webpack this JS file uses this image

function Logo() {
  // Import result is the URL of your image
  return (
    <>
      <Avatar src={logo} name="NHL" size="large" interactive />
    </>
  );

  //   <img className="logo" src={logo} alt="NHL" />;
}
export default Logo;
