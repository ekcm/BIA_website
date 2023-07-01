import React from "react";
import NavBar from "../components/Navbar/Navbar";
import Main from "../components/Main/Main";
import Body from "../components/Body/Body";
import Card from "../components/Card/Card";
import Sig from "../components/Signature/Sig";

export default function Home() {

  const card = [
    {
      title: "Members",
      text: "The largest student club for data analytics and data science with 1,500 student members"
    },
    {
      title: "Workshops",
      text: "Conducted 16 curriculum workshops, averaging 60 participants per workshop! Find out more about our curriculum workshops here!"
    },
    {
      title: "Projects",
      text: "Carried out our 8th iteration of Data Associate Programme (DAP), our flagship Data Science program. Learn more about our projects here!"
    },
    {
      title: "Partners",
      text: "Partnered with 16 companies to enhance our events and workshops! Reach out to us here for a partnership!"
    },
  ];

  return React.createElement(
    "div",
    {},
    <NavBar />,
    <Main />,
    <Body />,
    <Sig />
  );
// }

};

