import React from "react";

export default function CandidateCard(props) {
  return (
    <div className="candidate_card">
      <div className="profile_box">
        <img src={props.image} width="50%" />
      </div>
      <div className="text_area">
        <div>Apurv</div>
      </div>
    </div>
  );
}
