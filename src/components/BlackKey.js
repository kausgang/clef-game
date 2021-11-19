import React from "react";
import "./BlackKey.css";

const BlackKey = (props) => {
  return (
    <div id={props.datanote} className="key sharp" datanote={props.datanote}>
      <audio
        data-key={props.datanote}
        src={"MP3/" + props.datanote + ".mp3"}
      ></audio>
    </div>
  );
};

export default BlackKey;
