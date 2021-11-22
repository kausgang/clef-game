import React from "react";
import Piano from "./components/Piano";
// import Clef from "./components/Clef";
import "./App.css";

// import Vex from "vexflow";

class App extends React.Component {
  findKey = (key) => {
    console.log(key);
  };

  render() {
    return (
      <div>
        <Piano />
      </div>
    );
  }
}

export default App;
