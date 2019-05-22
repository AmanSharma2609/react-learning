import React, { useState, useContext, useRef } from "react";
import { Container, Row, Col } from "reactstrap";
import { Button } from "@material-ui/core";
import { CSSTransition } from "react-transition-group";
import { withRouter } from "react-router-dom";
// import { Link } from 'react-router-dom';
import Input from "../reusable-components/inputTemplate";
import Image from "../reusable-components/Image";
import HomeCard from "../reusable-components/homeCard";
import useWindowSize from "../reusable-components/windowSize";
import male from "../images/default-male.png";
import party from "../images/bjp.jpg";
import Right from "../images/right-arrow.svg";
import Left from "../images/left-arrow.svg";
import "bootstrap/dist/css/bootstrap.min.css";

function HomePage(props) {
  const [counter, setCounter] = useState(0);
  const [green, setGreen] = useState("30%");
  const [red, setRed] = useState("30%");
  const [yellow, setYellow] = useState("40%");
  const [testArray, setArray] = useState([1, 2, 3, 4, 5, 6]);
  const size = useWindowSize();
  const scroller = useRef(null);
  const increment = () => {
    setCounter(counter + 1);
  };
  React.useEffect(() => {
    console.log(size.width);
  }, [size.width]);
  const handleRightClick = () => {
    if (size.width < 1000 && size.width > 620) {
      console.log("less scrlll");
      scroller.current.scrollLeft += 580;
    } else if (size.width < 620) {
      scroller.current.scrollLeft += 250;
    } else scroller.current.scrollLeft += 950;
  };
  const handleLeftClick = () => {
    if (size.width < 1000 && size.width > 620) {
      console.log("less scrlll");
      scroller.current.scrollLeft -= 580;
    } else if (size.width < 620) {
      scroller.current.scrollLeft -= 350;
    } else scroller.current.scrollLeft -= 950;
  };
  return (
    <CSSTransition
      in={true}
      appear={true}
      timeout={{ enter: 800, exit: 800 }}
      classNames="fade"
    >
      <div className="homePageContainer">
        <Container fluid className="bgImage">
          <Row className=" d-flex whiteFontColor flex-column justify-content-center align-items-center">
            <Col xs={12} sm={12} md={8} lg={5} xl={4}
              className="text-center mb-4"
            >
              <h1 className="text-center">EXPLORE THE POLITICS</h1>
              <span className="text-center">
                Search, explore & share opinions on Indian political parties,
                <br /> leaders & election
              </span>
              <div className="SearchBox mt-5">
                <div className="darkFontColor mt-3 text-center">
                  <strong> I want to search a</strong>
                </div>
                <div className="h-100 w-100 d-flex justify-content-center align-items-center mb-3">
                  <Input
                    type="text"
                    className="homeInput"
                    placeholder="Search here"
                  />
                  <Button className={`ButtonHome whiteFontColor`}>
                    Search
                  </Button>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
        <div className="text-center position-relative checkMaj ml-auto mr-auto mt-5 mb-5">
          <h4>CHECK THE MAJORITY</h4>
          <hr width="40%" className="position-absolute hrLine" />
        </div>
        <Container fluid className="mt-5 mb-5 d-flex justify-content-center">
          <Row className="w-100 oddRow">
            <Col xs={12} sm={12} md={12} lg={8} xl={5}
              className="d-flex flex-column explore justify-content-center cardMR"
            >
              <div className="exploreBox pl-2  position-relative text-left">
                <div className="vl position-absolute" />
                <h5>Explore Candidate</h5>
                <div className="d-flex flex-column pl-3 justify-content-space-between mt-4">
                  <span>
                    Browse the detailed profiles of more than 5000+<wbr />{" "}
                    Indian political candidates
                  </span>{" "}
                  <br />
                  <span>
                    Check the user comments, opinions, upvote and downvotes
                    <wbr /> for each candidate.
                  </span>
                </div>
              </div>
            </Col>
            <Col xs={12} sm={12} md={12} lg={8} xl={5} className="cardML">
              <HomeCard
                green={green}
                red={red}
                yellow={yellow}
                most="Most Upvoted Candidates"
                pic={male}
                newClass="cards"
              />
            </Col>
          </Row>
        </Container>
        <Container fluid className="mt-5 mb-5 d-flex justify-content-center">
          <Row className="w-100 oddRow">
            <Col xs={12} sm={12} md={12} lg={8} xl={5} className="cardMR">
              {/* <Button data-testid='incrementButton' onClick={increment}>Click Me</Button>
        <div data-testid="counter">{counter}</div> */}
              <HomeCard
                green={green}
                red={red}
                yellow={yellow}
                most="Most Upvoted Parties"
                pic={party}
                newClass="newCards"
              />
            </Col>
            <Col xs={12} sm={12} md={12} lg={8} xl={5}
              className="d-flex flex-column justify-content-center "
            >
              <div className="exploreBox pl-2  position-relative text-left">
                <div className="vl position-absolute" />
                <h5>Explore Parties</h5>
                <div className="d-flex flex-column pl-3 justify-content-space-between mt-4">
                  <span>
                    Browse the detailed profiles of more than 500+<wbr /> Indian
                    national and state parties
                  </span>{" "}
                  <br />
                  <span>
                    Check the user comments, opinions, upvote and downvotes
                    <wbr /> for each party.
                  </span>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
        <div className="w-100 position-relative">
          <button className="check">Check All</button>
          <div className="text-center position-relative browseElec ml-auto mr-auto mb-5">
            <h4>BROWSE ELECTIONS</h4>
            <hr width="40%" className="position-absolute browseLine" />
          </div>
        </div>
        <div className="outer_container">
          <div className="election_scroll_cont" ref={scroller}>
            {testArray.map((item, index) => {
              return (
                <div key={index} className="election_box cursor_pointer">
                  <div className="text_elipses mt-3 ">
                    <span className="election_name">Karnataka 2018 </span>{" "}
                    <br />
                    <span
                      className="grey_text font_14"
                      title="Gujarat legislative assembly electionlegislative assembly election"
                    >
                      {" "}
                      Gujarat legislative assembly electionlegislative assembly
                      election
                    </span>
                  </div>
                  <div className="d-flex justify-content-between">
                    <div className="dateMargin font_12">
                      Election Date
                      <br />
                      28 Sep, 2018
                    </div>
                    <div className="dateMargin font_12 ">
                      Result Date
                      <br />
                      10 Oct, 2018
                    </div>
                  </div>
                </div>
              );
            })}
            <div
              className="scroll_icon_1 cursor_pointer"
              onClick={handleLeftClick}
            >
              <Image src={Left} width="50" />
            </div>
            <div
              className="scroll_icon_2 cursor_pointer"
              onClick={handleRightClick}
            >
              <Image src={Right} width="50" />
            </div>
          </div>
        </div>
      </div>
    </CSSTransition>
  );
}
export default withRouter(HomePage);
