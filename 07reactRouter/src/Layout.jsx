import React from "react";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import { Outlet } from "react-router-dom";

function Layout() {
  return (
    <>
      <Header />
      {/* // for dynamically change components we use outlet  */}
      <Outlet/>
      <Footer />
    </>
  );
}

export default Layout;
