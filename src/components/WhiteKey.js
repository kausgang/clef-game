import React from "react";
import "./WhiteKey.css";

class WhiteKey extends React.Component {
  constructor(props) {
    super(props);
    this.keyValue = React.createRef();
  }
  // handleClick = () => {
  //   console.log(this.keyValue.current.id);
  //   // this.props.key = this.keyValue.current.id;
  // };

  render() {
    return (
      <div
        id={this.props.datanote}
        className="key"
        datanote={this.props.datanote}
        ref={this.keyValue}
        // onClick={this.handleClick}
      >
        <audio src={"MP3/" + this.props.datanote + ".mp3"}></audio>
      </div>
    );
  }
}

export default WhiteKey;
