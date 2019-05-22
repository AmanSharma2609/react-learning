import React from "react";
import { Container, Row, Col } from "reactstrap";
import Image from "../../reusable-components/Image";
import Apple from "../../images/apple.png";
import Google from "../../images/google.png";
import "bootstrap/dist/css/bootstrap.min.css";

function footer(props) {
  return (
    <div className="footer_container whiteFontColor">
      <Container className="w-100 mb-2 d-flex justify-content-center align-items-center ">
        <Row className="w-100 border-bottom pb-4 d-flex justify-content-center align-items-center ">
          <Col xs={12} sm={12} md={12} lg={7} xl={7} className=" text_class">
            <Row className="font_14">
              <Col xs={12} sm={12} md={12} lg={3} xl={3} className="mt-2 mb-2">
                About Us <br />
                Who we are
                <br />
                Our Vision
                <br />
                Our Mission
                <br />
                Contact us
              </Col>
              <Col xs={12} sm={12} md={12} lg={3} xl={3} className="mt-2 mb-2">
                Parties <br />
                View All Parties
                <br />
                Most Upvoted
                <br />
                State Parties
                <br />
                National Parties
                <br />
              </Col>
              <Col xs={12} sm={12} md={12} lg={3} xl={3} className="mt-2 mb-2">
                Candidates <br />
                View All Candidates
                <br />
                Most Upvoted
                <br />
                Winner Candidates
                <br />
              </Col>
              <Col xs={12} sm={12} md={12} lg={3} xl={3} className="mt-2 mb-2">
                Elections <br />
                Completed Elections
                <br />
                Running Elections
                <br />
                Upcoming Elections
                <br />
              </Col>
            </Row>
          </Col>
          <Col xs={12} sm={12} md={12} lg={5} xl={5}
            className="d-flex align-items-center text-center justify-content-center pl-0"
          >
            <Row className="w-100">
              <Col xs={12} sm={12} md={12} lg={12} xl={6}
                className="align_class"
              >
                <div className="download mt-1 mb-1 ">
                  <Image src={Google} width="100%" />
                </div>
              </Col>
              <Col xs={12} sm={12} md={12} lg={12} xl={6}
                className="align_class"
              >
                <div className="download mt-1 mb-1 ">
                  <Image src={Apple} width="100%" />
                </div>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
      <div className="font_12 ">
        &copy;copyright 2019 Apna Neta Team | Privacy Policy | Cookies Policy |
        Terms of Service
      </div>
    </div>
  );
}
export default footer;
