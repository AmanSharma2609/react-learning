import React from "react";

export const loginEyeToggle = () => ({
  type: "TOGGLE_EYE"
});

export const completedToggle = (id) => ({
  type: "TOGGLE_COMPLETED",
  payload: {
    id:id,
  }
});

export const changeAmount = (id,idSelf) => ({
  type: 'CHANGE_SELF_AMOUNT',
  payload:{
    id: id,
    idSelf,idSelf
  }
})
