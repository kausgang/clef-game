import React from "react";
import Piano from "./Piano";
import "./App.css";

class App extends React.Component {
  render() {
    return (
      <div>
        <div style={{ position: "absolute", bottom: 0, width: "99%" }}>
          <Piano />
        </div>
      </div>
    );
  }
}

export default App;
