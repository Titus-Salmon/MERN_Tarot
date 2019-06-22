import React from "react";

const component1a = props => {
  console.log("===>[Component1a.js] rendering...");
  return (
    <div>
      <div className="container1">
        <h3>(1) Select Deck Format</h3>
        <select id="deckSelect" onChange={props.changed}>
          <option value="fullDeck">Major & Minor Arcana</option>
          <option value="majorDeck">Major Arcana</option>
          <option value="minorDeck">Minor Arcana</option>
        </select>
      </div>
    </div>
  );
};

export default component1a;
