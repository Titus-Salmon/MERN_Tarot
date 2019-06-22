import React from "react";

const component1c = props => {
  console.log("===>[Component1c.js] rendering...");
  return (
    <div>
      <div className="container1">
        <h3>(3) Get Reading</h3>
        <button id="getReading" onClick={props.clicked}>
          Get Reading
        </button>

        <div id="readingDiv">
          <ul id="readingUl" />
        </div>
      </div>
    </div>
  );
};

export default component1c;
