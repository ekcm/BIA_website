import React from "react";
import NavBar from "../components/Navbar/Navbar";
// import Body from "../components/Body/Body";
import Sig from "../components/Signature/Sig";
import GetInvolvedMain from "../components/GetInvolvedMain/GetInvolvedMain";
import GetInvolvedBody from "../components/GetInvolvedBody/GetInvolvedBody";

export default function GetInvolved() {
  return React.createElement(
    "div",
    {},
    <NavBar />,
    <GetInvolvedMain />,
    <GetInvolvedBody/>,
    <Sig />
  );
};