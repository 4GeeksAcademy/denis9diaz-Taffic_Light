import React from "react";

const Yellow = ({active, onClick}) => {
  return <div className={`yellowLight ${active ? "active" : ""}`} onClick={onClick}></div>;
};

export default Yellow;
