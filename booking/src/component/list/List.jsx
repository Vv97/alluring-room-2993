import React from "react";
import Navbar from "../Navbar/Navbar";
import Header from "../header/Header";
import Footer from "../footer/Footer";

const List = () => {
  return (
    <div>
      <Navbar type="List" />
      <Header />
      <Footer type="List" />
    </div>
  );
};

export default List;
