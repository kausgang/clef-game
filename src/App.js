import React from "react";
import Piano from "./components/Piano";
import Clef from "./components/Clef";
import "./App.css";

class App extends React.Component {
  render() {
    return (
      <div>
        <div
          style={{
            position: "absolute",
            top: 20,
            width: "90%",
            margin: "20px",
          }}
        >
          <Clef />
        </div>
        <div style={{ position: "absolute", bottom: 0, width: "99%" }}>
          <Piano />
        </div>
      </div>
    );
  }
}

export default App;
