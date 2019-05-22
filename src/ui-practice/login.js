import React, { useState, useEffect } from "react";
import { Container, Row, Col } from "reactstrap";
import { CSSTransition } from "react-transition-group";
import { withRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "../redux";

import LoginForm from "../reusable-components/loginForm";
import Logo from "../images/web-logo.png";
import "bootstrap/dist/css/bootstrap.min.css";

function Login(props) {
  const [parameter, setParameter] = useState({});
  const handleData = data => {
    setParameter(data);
    console.log(data);
  };
  // useEffect(() => {
  //     console.log(parameter)
  // },[parameter])
  return (
    <CSSTransition in={true} appear={true} timeout={800} classNames="fade">
      <div className="loginCont pb-1 pt-5">
        <Container className="w-100 h-100 login_align">
          <Row className="w-100 h-100 box-shadow">
            <Col xs={12} sm={12} md={12} lg={6} xl={6}
              className="d-flex flex-column justify-content-center align-items-center logo_box light_bg pt-2"
            >
              {/* <div class="svg-wrapper">
                                <svg viewbox="0 0 100 25" preserveAspectRatio="none">
                                    <path fill="#9EAFFD" d="M0 30 V12 Q30 17 55 12 T100 11 V30z" />
                                </svg>
                            </div> */}
              <img src={Logo} width="300" />
              <div className="whiteFontColor welcome_cont text-left mt-1 mb-2">
                <h5>Welcome!</h5>
                <div>
                  Lorem Ipsum is simpy dummy text of the printing and
                  typesetting industry.
                </div>
              </div>
            </Col>
            <Col xs={12} sm={12} md={12} lg={6} xl={6}
              className="bg-white d-flex justify-content-center align-items-center"
            >
              <div className="w-75 ">
                <Provider store={store}>
                  <LoginForm handleData={handleData} />
                </Provider>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </CSSTransition>
  );
}
export default withRouter(Login);
