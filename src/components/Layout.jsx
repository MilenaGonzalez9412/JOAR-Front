import React from "react";
import NavBar from "./NavBar";
import Footer from "./Footer";

const Layout = props => {
  return (
    <>
      <NavBar
        companyName="JOAR"
        features="Caracteristicas"
        pricing="Precios"
        support="Soporte"
        enterprise="Productos"
      />
      {props.children}
      <Footer />
    </>
  );
};

export default Layout;
