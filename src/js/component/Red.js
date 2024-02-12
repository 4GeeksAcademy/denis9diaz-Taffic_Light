import React from "react";

const Red = ({active, onClick}) => {
  return <div className={`redLight shine ${active ? "active" : ""}`} onClick={onClick}></div>;
};

export default Red;
