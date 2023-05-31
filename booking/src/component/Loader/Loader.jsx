import React from "react";
import "./loader.css";

export const Loader = () => {
  return (
    <div className="loader">
      <div className="loaderWrapper">
        <div>
          <h1>Travlo.com</h1>
        </div>
        <div className="three-body">
          <div className="three-body__dot"></div>
          <div className="three-body__dot"></div>
          <div className="three-body__dot"></div>
        </div>
      </div>
    </div>
  );
};
