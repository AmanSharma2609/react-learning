import React from "react";
import UpArrow from "../images/arrow-up.svg";
import DownArrow from "../images/arrow-down.svg";
import Circle from "../images/circle.svg";

export default function CardProgressBar(props) {
  return (
    <div className="progressBoxCand position-relative mt-2">
      <div className="iconBoxCan position-absolute d-flex justify-content-around">
        <div className="d-flex flex-column justify-content-center align-items-center">
          <img src={UpArrow} width="15" className="smallFont" />
          <span className="smallFont counts">267k</span>
        </div>
        <div className="d-flex flex-column justify-content-center align-items-center">
          <img src={DownArrow} width="15" className="smallFont" />
          <span className="smallFont counts">267k</span>
        </div>
        <div className="d-flex flex-column justify-content-center align-items-center">
          <img src={Circle} width="15" className="smallFont" />
          <span className="smallFont counts">267k</span>
        </div>
      </div>
      <div className="progressBar d-flex ">
        <div
          style={{ width: props.green, height: "100%", background: "#56FF00" }}
        />
        <div
          style={{ width: props.red, height: "100%", background: "#FF0005" }}
        />
        <div
          style={{ width: props.yellow, height: "100%", background: "#FFE526" }}
        />
      </div>
    </div>
  );
}
