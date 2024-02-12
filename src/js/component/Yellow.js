import React from "react";

const Yellow = ({active, onClick}) => {
  return <div className={`yellowLight shine ${active ? "active" : ""}`} onClick={onClick}></div>;
};

export default Yellow;
