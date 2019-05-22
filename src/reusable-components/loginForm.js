import React, { memo } from "react";
import Input from "./input";
import { Container, Row, Col } from "reactstrap";
import { withFormik, Form } from "formik";
import * as Yup from "yup"; // for everything
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { loginEyeToggle } from "../actions";
import { store } from "../redux";
import Button from "./submitButton";
import GoogleButton from "./googleButton";
import FacebookButton from "./facebookButton";
import View from "../images/view.svg";
import Hide from "../images/hide.svg";
import Google from "../images/google.svg";
import Facebook from "../images/facebook.svg";
// const dispatch = useDispatch();
// const addTodo = (todo) => dispatch(addTodoAction(todo))

const form = props => {
  const [parameters, setParameter] = React.useState({});
  const handleData = data => {
    setParameter(data);
  };
  const dispatch = useDispatch();
  const data = store.getState();
  const eyeChange = () => dispatch(loginEyeToggle());
  const eyeToggle = useSelector(state => state.eyeToggle);

  const { values, touched, errors, handleChange, isSubmitting } = props;
  return (
    <Form className="w-100">
      <Container>
        <Row className="mb-4">
          <Col>
            <div className="text-left position-relative checkMaj mt-5">
              <h4>LOGIN</h4>
              <hr width="40%" className="position-absolute hrLine" />
            </div>
          </Col>
        </Row>
        <Row>
          <Col xs={12} sm={12} md={12} lg={12} xl={12} className="mb-4">
            <Input
              type="text"
              autoComplete="off"
              maxLength={50}
              placeholder="Email ID"
              name="email"
              value={values.email}
              onChange={handleChange}
            />
            {touched.email && errors.email && (
              <span className="position-absolute leftVal">{errors.email}</span>
            )}
          </Col>
        </Row>
        <Row>
          <Col
            xs={12}
            sm={12}
            md={12}
            lg={12}
            xl={12}
            className="position-relative"
          >
            <Input
              type={eyeToggle ? "text" : "password"}
              placeholder="Password"
              maxLength={15}
              name="password"
              value={values.password}
              onChange={handleChange}
            />
            {touched.password && errors.password && (
              <span className="position-absolute leftVal">
                {errors.password}
              </span>
            )}
            <div
              className="input_icons cursor_pointer"
              onClick={() => eyeChange()}
            >
              {eyeToggle ? (
                <img src={View} width="25" />
              ) : (
                <img src={Hide} width="25" />
              )}
            </div>
          </Col>
        </Row>
        <Row>
          <Col xs={12} sm={12} md={12} lg={12} xl={12} className="mt-4">
            <Button
              disabled={isSubmitting}
              name="GET IN"
              type="submit"
              className="submitButton w-100"
            />
          </Col>
        </Row>
        <div className="mt-2 text-center">Forgot Password?</div>
        <Row>
          <Col xs={12} sm={12} md={12} lg={12} xl={12} className="mt-4">
            <div className="dashed_cont">
              <div className="line mr-2" />
              <span className="OR">Or</span>
              <div className="line ml-1" />
            </div>
          </Col>
        </Row>
        <Row>
          <Col
            xs={12}
            sm={12}
            md={12}
            lg={12}
            xl={12}
            className="mt-4 position-relative"
          >
            <GoogleButton
              name="Login with Google"
              className="submitButton w-100"
            />
          </Col>
        </Row>
        <Row>
          <Col
            xs={12}
            sm={12}
            md={12}
            lg={12}
            xl={12}
            className="mt-4 position-relative"
          >
            <FacebookButton
              name="Login with Facebook"
              className="submitButton w-100"
            />
          </Col>
        </Row>
        <div className="mt-4 mb-4 text-center white_space">
          Don't have an account? Click here
        </div>
      </Container>
    </Form>
  );
};

const formTemplate = withFormik({
  mapPropsToValues() {
    return {
      email: "",
      password: ""
    };
  },
  validationSchema: Yup.object().shape({
    email: Yup.string()
      .email("Please enter a valid email")
      .required("Email field is required")
      .trim(),
    password: Yup.string()
      .min(6, "Password must be at least 6 characters")
      .required("Password field is required")
      .trim()
  }),
  handleSubmit(values, { props, resetForm, setErrors, setSubmitting }) {
    setTimeout(() => {
      if (values.email === "am.sharma@thesynapses.com") {
        setErrors({ email: "That email is already taken" });
      } else {
        props.handleData(values);
        resetForm();
        alert("Form Submitted");
      }
      setSubmitting(false);
    }, 2000);
  }
})(form);
export default memo(formTemplate);
//using suspense with api call
// const data = APIResource.read(path)
//const APIResource = createResource(path=>{ needs react-cahe
// return fetchAPI(path)
//})
/*function review(){
    const data = APIResource.read(path)
    if(data === null){
        return <Spinner /> no need because suspense can find nearest fallback and use it
    }
    return (
        JSX
    )
}
async getLatestDat(id){
    const data = await fetchAPI(path)
    setHook or state
    hidden prop so react give them low off screen priority it will load rest tabs data and not take resource from current tab
}*/
