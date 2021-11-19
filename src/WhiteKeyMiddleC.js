import React from "react";

const WhiteKeyMiddleC = (props) => {
  return (
    <div id={props.datanote} className="key middleC" datanote={props.datanote}>
      {/* <span className="hints">C</span> */}
      <audio
        data-key={props.datanote}
        src={"MP3/" + props.datanote + ".mp3"}
      ></audio>
    </div>
  );
};

export default WhiteKeyMiddleC;
