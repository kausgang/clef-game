import React from "react";
import FClef from "./FClef";
import GClef from "./GClef";

// const Clef = () => {
//   return (
//     <div>
//       <GClef />
//       <FClef />
//     </div>
//   );
// };

class Clef extends React.Component {
  render() {
    return (
      <div>
        <GClef />
        <FClef />
      </div>
    );
  }
}
export default Clef;
