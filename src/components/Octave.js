import React from "react";
import WhiteKey from "./WhiteKey";
import BlackKey from "./BlackKey";
import WhiteKeyMiddleC from "./WhiteKeyMiddleC";
import "./Octave.css";

class Octave extends React.Component {
  render() {
    if (this.props.MiddleC) {
      return (
        <div className="octave">
          <WhiteKeyMiddleC datanote={"C" + this.props.octave} />
          <BlackKey datanote={"Db" + this.props.octave} />
          <WhiteKey datanote={"D" + this.props.octave} />
          <BlackKey datanote={"Eb" + this.props.octave} />
          <WhiteKey datanote={"E" + this.props.octave} />
          <WhiteKey datanote={"F" + this.props.octave} />
          <BlackKey datanote={"Gb" + this.props.octave} />
          <WhiteKey datanote={"G" + this.props.octave} />
          <BlackKey datanote={"Ab" + this.props.octave} />
          <WhiteKey datanote={"A" + this.props.octave} />
          <BlackKey datanote={"Bb" + this.props.octave} />
          <WhiteKey datanote={"B" + this.props.octave} />
        </div>
      );
    } else {
      return (
        <div className="octave">
          <WhiteKey datanote={"C" + this.props.octave} />
          <BlackKey datanote={"Db" + this.props.octave} />
          <WhiteKey datanote={"D" + this.props.octave} />
          <BlackKey datanote={"Eb" + this.props.octave} />
          <WhiteKey datanote={"E" + this.props.octave} />
          <WhiteKey datanote={"F" + this.props.octave} />
          <BlackKey datanote={"Gb" + this.props.octave} />
          <WhiteKey datanote={"G" + this.props.octave} />
          <BlackKey datanote={"Ab" + this.props.octave} />
          <WhiteKey datanote={"A" + this.props.octave} />
          <BlackKey datanote={"Bb" + this.props.octave} />
          <WhiteKey datanote={"B" + this.props.octave} />
        </div>
      );
    }
  }
}

export default Octave;
