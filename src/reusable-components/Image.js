import React from "react";

function Image(props) {
  return <img {...props} alt="img" />;
}

export default Image;
//try to avoid using floating label in reusable input component because it is tough to check
