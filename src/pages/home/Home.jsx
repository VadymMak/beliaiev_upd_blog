import React from "react";

import "./Home.css";
import Presentation from "../../components/presentation/Presentation";
import Services from "../../components/services/Services";

const Home = () => {
  return (
    <div className="home">
      <Presentation />
      <Services />
    </div>
  );
};

export default Home;
