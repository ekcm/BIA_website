import React from "react";
import NavBar from "../components/Navbar/Navbar";
import Main from "../components/Main/Main";
import Body from "../components/Body/Body";
import Sig from "../components/Signature/Sig";

export default function Home() {
  return (
    <div>
      <NavBar />
      <Main />
      <Body />
      <Sig />
    </div>
  );
};

