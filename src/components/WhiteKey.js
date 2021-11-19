import React from "react";
import "./WhiteKey.css";

const WhiteKey = (props) => {
  return (
    <div id={props.datanote} className="key" datanote={props.datanote}>
      <audio src={"MP3/" + props.datanote + ".mp3"}></audio>
    </div>
  );
};

export default WhiteKey;
