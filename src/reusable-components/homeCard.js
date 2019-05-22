import React, { useState } from "react";
import male from "../images/default-male.png";
import party from "../images/bjp.jpg";
import UpArrow from "../images/arrow-up.svg";
import DownArrow from "../images/arrow-down.svg";
import Circle from "../images/circle.svg";
import Image from "./Image";

function HomeCard(props) {
  return (
    <div className="card_Container d-flex flex-column justify-content-center position-relative">
      <div className={`${props.newClass}`}>
        <div className="card_header darkBackground whiteFontColor">
          {props.most}
        </div>
        <div className="mt-3 d-flex justify-content-between">
          <div className="media_Box d-flex pl-3">
            <div className="mr-3 image_cont">
              <Image src={props.pic} width="85%" className="home_image" />
            </div>
            <div className="media_text">
              BS Yeddyuruppa <br />
              BJP, Sikaripura
            </div>
          </div>
          <div className="progressBox position-relative pr-3">
            <div className="iconBox position-absolute d-flex justify-content-around">
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
                style={{
                  width: props.green,
                  height: "100%",
                  background: "#56FF00"
                }}
              />
              <div
                style={{
                  width: props.red,
                  height: "100%",
                  background: "#FF0005"
                }}
              />
              <div
                style={{
                  width: props.yellow,
                  height: "100%",
                  background: "#FFE526"
                }}
              />
            </div>
          </div>
        </div>
        <div className="mt-3 d-flex justify-content-between">
          <div className="media_Box d-flex pl-3">
            <div className="mr-3 image_cont">
              <Image src={props.pic} width="85%" className="home_image" />
            </div>
            <div className="media_text">
              BS Yeddyuruppa <br />
              BJP, Sikaripura
            </div>
          </div>
          <div className="progressBox position-relative pr-3">
            <div className="iconBox position-absolute d-flex justify-content-around">
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
                style={{
                  width: props.green,
                  height: "100%",
                  background: "#56FF00"
                }}
              />
              <div
                style={{
                  width: props.red,
                  height: "100%",
                  background: "#FF0005"
                }}
              />
              <div
                style={{
                  width: props.yellow,
                  height: "100%",
                  background: "#FFE526"
                }}
              />
            </div>
          </div>
        </div>
        <div className="mt-3 d-flex justify-content-between">
          <div className="media_Box d-flex pl-3">
            <div className="mr-3 image_cont">
              <Image src={props.pic} width="85%" className="home_image" />
            </div>
            <div className="media_text">
              BS Yeddyuruppa <br />
              BJP, Sikaripura
            </div>
          </div>
          <div className="progressBox position-relative pr-3">
            <div className="iconBox position-absolute d-flex justify-content-around">
              <div className="d-flex flex-column justify-content-center align-items-center">
                <img src={UpArrow} width="15" className="smallFont" />
                <span className="smallFont counts">267k</span>
              </div>
              <div className="d-flex flex-column justify-content-center align-items-center">
                <img src={DownArrow} width="15" className="smallFont" />
                <span className="smallFont counts">267kk267k267k267k267k</span>
              </div>
              <div className="d-flex flex-column justify-content-center align-items-center">
                <img src={Circle} width="15" className="smallFont" />
                <span className="smallFont counts">267k267k267k267k267k</span>
              </div>
            </div>
            <div className="progressBar d-flex ">
              <div
                style={{
                  width: props.green,
                  height: "100%",
                  background: "#56FF00"
                }}
              />
              <div
                style={{
                  width: props.red,
                  height: "100%",
                  background: "#FF0005"
                }}
              />
              <div
                style={{
                  width: props.yellow,
                  height: "100%",
                  background: "#FFE526"
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default HomeCard;
