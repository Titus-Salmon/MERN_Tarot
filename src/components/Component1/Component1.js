import React from "react";

const component1 = props => {
  return (
    <div>
      <div className="container1">
        <h3>(1) Select Deck Format</h3>
        <select id="deckSelect">
          <option value="fullDeck">Major & Minor Arcana</option>
          <option value="majorDeck">Major Arcana</option>
          <option value="minorDeck">Minor Arcana</option>
        </select>

        <h3>(2) Shuffle Deck</h3>
        {/* <div id="shuffDiv" /> */}

        <button id="shuffle">Shuffle Deck</button>

        <div id="selectDiv" className="flexShuffDiv" />

        <h3>(3) Get Reading</h3>
        <button id="getReading">Get Reading</button>

        <div id="readingDiv">
          <ul id="readingUl" />
        </div>
      </div>
      <h3>{props.crdName}</h3>
      <img src={props.crdImgUp} alt={props.crdImgUp} />
      <p>{props.children}</p>
    </div>
  );
};

export default component1;
