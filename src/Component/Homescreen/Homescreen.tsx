import React from "react";
import Card from "../Cards/Card";
import Carreers from "../Careers/Carreers";
import Explore from "../Explore/Explore";
import Footer from "../Footer/Footer";
import Hero from "../Hero/Hero";
import Solution from "../Solution/Solution";
import Video from "../Videos/Video";

const Homescreen = () => {
  return (
    <div>
      <Hero />
      <Solution />
      <Video />
      <Explore />
      <br />
      <br />
      <br />
      <br />
      <Card />
      <Carreers />
      <Footer />
    </div>
  );
};

export default Homescreen;
