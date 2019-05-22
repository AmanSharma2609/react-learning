import React, { memo } from "react";
import { CSSTransition } from "react-transition-group";
import "bootstrap/dist/css/bootstrap.min.css";

function inputTemplate(props) {
  return <input {...props} />;
}
inputTemplate = memo(inputTemplate);
export default inputTemplate;
//try to avoid using floating label in reusable input component because it is tough to check
