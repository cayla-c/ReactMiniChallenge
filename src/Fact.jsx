import React from "react";
// TO DO: Create a Fact Functional component which returns a div in the format below

// NOTE: In order to maintain CSS styling, do not alter the existing tags or their classNames
const Fact = (props) => {
  return (
    <div className="factCard">
      <h1>{props.animal}</h1>
      {/* TODO: Attach an onClick event to the button */}
      <button
        value={props.animal}
        onClick={props.handleFavoriteClick}>
        Click to favorite
      </button>
      <img src={props.link} width="600" height="400" />
      <h3>{props.fact}</h3>
    </div>
  );
};

export default Fact;
