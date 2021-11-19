import React from "react";
import WhiteKey from "./WhiteKey";
import BlackKey from "./BlackKey";
import WhiteKeyMiddleC from "./WhiteKeyMiddleC";
import "./Octave.css";

const Octave = (props) => {
  if (props.MiddleC) {
    return (
      <div className="octave">
        <WhiteKeyMiddleC datanote={"C" + props.octave} />
        <BlackKey datanote={"Db" + props.octave} />
        <WhiteKey datanote={"D" + props.octave} />
        <BlackKey datanote={"Eb" + props.octave} />
        <WhiteKey datanote={"E" + props.octave} />
        <WhiteKey datanote={"F" + props.octave} />
        <BlackKey datanote={"Gb" + props.octave} />
        <WhiteKey datanote={"G" + props.octave} />
        <BlackKey datanote={"Ab" + props.octave} />
        <WhiteKey datanote={"A" + props.octave} />
        <BlackKey datanote={"Bb" + props.octave} />
        <WhiteKey datanote={"B" + props.octave} />
      </div>
    );
  } else {
    return (
      <div className="octave">
        <WhiteKey datanote={"C" + props.octave} />
        <BlackKey datanote={"Db" + props.octave} />
        <WhiteKey datanote={"D" + props.octave} />
        <BlackKey datanote={"Eb" + props.octave} />
        <WhiteKey datanote={"E" + props.octave} />
        <WhiteKey datanote={"F" + props.octave} />
        <BlackKey datanote={"Gb" + props.octave} />
        <WhiteKey datanote={"G" + props.octave} />
        <BlackKey datanote={"Ab" + props.octave} />
        <WhiteKey datanote={"A" + props.octave} />
        <BlackKey datanote={"Bb" + props.octave} />
        <WhiteKey datanote={"B" + props.octave} />
      </div>
    );
  }
};

export default Octave;
