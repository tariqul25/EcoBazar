import React from "react";
import Navbar from "../pages/shared/Navbar";
import { Outlet } from "react-router";
import Footer from "../pages/shared/Footer";

const RootLayout = () => {
  return (
    <div className="poppins-regular">
      <Navbar />
      <div className="min-h-[calc(100vh-289px)]">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};

export default RootLayout;
