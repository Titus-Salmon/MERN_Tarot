import React from "react";
import './Comp1_style.css';

const component1b = (props) => {
  return (
    <div>
      <div className="container1">
        <h3>(2) Shuffle Deck</h3>
        <div id="shuffDiv" onClick={props.selectCard}/>
        <div id="selectDiv"></div>
        {props.children}
      </div>
      <button id="shuffle" onClick={props.clicked}>Shuffle</button>
    </div>
  );
};

export default component1b;
