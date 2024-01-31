import React from "react";
import Header from "../Header/Header";
import StickyHeader from "../Header/StickyHeader";
import Footer from "../Footer/Footer";
import Router from "../../router/Router";

const Layout = () => {
  return (
    <div>
      {/* <StickyHeader /> */}
      <Header />
      <Router />
      <Footer />
    </div>
  );
};

export default Layout;
