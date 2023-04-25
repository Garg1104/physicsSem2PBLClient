// Import React and Hooks
import React, { useState, useEffect } from "react";

// Import Components
import ListItem from "./ListItem";

const MainContent = () => {
  const [constants, setConstants] = useState([]);

  useEffect(() => {
    fetch(
      "https://physicssem2pblserver-production.up.railway.app/api/constants",
      {
        "Content-Type": "application/json",
      }
    )
      .then((res) => res.json())
      .then((data) => setConstants(data));
  }, []);

  if (!constants.length) {
    return <div className="introduction">Could Not Fetch Data</div>;
  }
  return (
    <>
      <div className="introduction">
        Some constants used in physics are listed below:
      </div>
      <div className="mainContent">
        <div className="mainContentContainer">
          <ul>
            {constants[0].map((constant) => {
              return <ListItem key={constant._id} val={constant} />;
            })}
          </ul>
        </div>
      </div>
    </>
  );
};

export default MainContent;
