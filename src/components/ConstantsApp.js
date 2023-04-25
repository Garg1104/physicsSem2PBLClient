// Import react and Hooks
import React from "react";

// Import Components
import Header from "./Header";
import MainContent from "./constants/MainContent";

const App = () => {
  return (
    <div className="mainContainer">
      <Header title="Constants"/>
      <MainContent />
    </div>
  )
};

export default App;
