import React from "react";
import Navbar from "../shared/Navbar";
import Banner from "./Banner";

const Home = () => {
  return (
    <div className="max-w-7xl mx-auto">
      <Navbar></Navbar>
      <Banner></Banner>
    </div>
  );
};

export default Home;
