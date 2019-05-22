import { createStore } from "redux";
import { combineReducers } from "redux";
import { produce } from "immer";
import { act } from "react-testing-library";

const initialState = {
  eyeToggle: false,
  emailText: "",
  passwordText: "",
  checkBoxes: [
    { id: "1", name: "Learn redux basics", completed: false },
    { id: "2", name: "Learn redux with hooks", completed: false },
    {
      id: "3",
      name: "Learn redux with react hooks and immer",
      completed: false
    },
    { id: "4", name: "Learn algorithms", completed: false },
    { id: "5", name: "Learn data structures", completed: false }
  ],
  assets: [
    {
      id: "1",
      asset_type: "",
      asset_name: "",
      asset_range: "",
      asset_desc: [],
      asset_self: [
        {
          id: "1",
          self_amount: "amount ",
          self_desc: ""
        }
      ]
    }
  ]
};

export const store = createStore(
  reducer,
  initialState,
  window.devToolsExtension && window.devToolsExtension()
);

function reducer(state, action) {
  switch (action.type) {
    case "TOGGLE_EYE":
      return {
        ...state,
        eyeToggle: !state.eyeToggle
      };
    case "ADD_EMAIL":
      return {
        ...state,
        emailText: action.payload
      };
    case "ADD_Password":
      return {
        ...state,
        passwordText: action.payload
      };
    case "TOGGLE_COMPLETED":
      return {
        ...state,
        checkBoxes: state.checkBoxes.map(checkbox =>
          checkbox.id === action.payload.id
            ? { ...checkbox, completed: !checkbox.completed }
            : checkbox
        )
      };
    case "CHANGE_SELF_AMOUNT": {
      const updatedAssets = state.assets.map(a => {
        if (a.id === action.payload.id) {
          const updatedAssetSelf = a.asset_self.map(as => {
            if (as.id === action.payload.idSelf) {
              return { ...as, self_amount: 'apruv' };
            }
            return as;
          });
          return {
            ...a,
            asset_self: updatedAssetSelf
          };
        }
        return a;
      });
      return {
        ...state,
        assets: updatedAssets
      };
    }

    default:
      return state;
  }
}

// checkBoxes: state.checkBoxes.map(checkbox =>
//     checkbox.id === action.payload
//       ? { ...checkbox, completed: !checkbox.completed }
//       : checkbox
//   )
