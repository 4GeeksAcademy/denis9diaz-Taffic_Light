import React from "react";

const Green = ({active, onClick}) => {
  return <div className={`greenLight ${active ? "active" : ""}`} onClick={onClick}></div>;
};

export default Green;

