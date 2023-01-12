import React from "react";
import image from "../../assets/op.png";
import "./Accueil.css";

export const Accueil = () => {
  return (
    <div className="divimg">
      <img src={image} className="imgop" alt="imgop" />
    </div>
  );
};
