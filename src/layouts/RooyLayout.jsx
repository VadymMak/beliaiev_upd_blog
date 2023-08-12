import React from "react";
import { Outlet } from "react-router-dom";
import Header from "../components/navigation/Header";

import "./RootLayout.css";

const RooyLayout = () => {
  return (
    <div className="root-container">
      <Header />
      <main>
        <Outlet />
      </main>
    </div>
  );
};

export default RooyLayout;
