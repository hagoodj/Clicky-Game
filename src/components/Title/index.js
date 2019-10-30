import React from "react";
import "./style.css";

function Title(props) {
  return (
    <div className="container">
      <h1 className="title">{props.children}</h1>
      <div className="scores">
        Score: {props.currentscore} Best Score: {props.bestscore}
      </div>
    </div>
  )

}

export default Title;
