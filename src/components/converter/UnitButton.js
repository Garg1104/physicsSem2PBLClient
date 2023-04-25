import React from "react";

function UnitButton({ text , onClick}) {
  return <button className="btn unitSelectorBtn" onClick={onClick}>{text}</button>;
}

export default UnitButton;
