import React from "react";

import "./Home.css";
import Presentation from "../../components/presentation/Presentation";
import Services from "../../components/services/Services";
import PersonalService from "../../components/personal-services/PersonalService";
import Footer from "../../components/footer/Footer";

const Home = () => {
  return (
    <div className="home">
      <Presentation />
      <Services />
      <PersonalService />
      <Footer />
    </div>
  );
};

export default Home;
