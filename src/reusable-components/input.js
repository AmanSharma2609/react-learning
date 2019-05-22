import React from "react";

function Input(props) {
  return (
    <div className="position-relative w-100">
      <input {...props} className="w-100 forms_input" />
      <div>{/* <img {...props}></img> */}</div>
    </div>
  );
}
export default Input;
