import React from "react";
import Banner from "../Banner/Banner";
import cardData from "../data/data.json";
import Card from "../Sections/Card";
import MeetTheTeam from "../Sections/MeetTHeTeam";
import Collection from "./Category";

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <Collection />
      <MeetTheTeam></MeetTheTeam>
    </div>
  );
};

export default Home;
