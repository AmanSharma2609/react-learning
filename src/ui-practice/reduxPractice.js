import React from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { completedToggle, changeAmount } from "../actions";
import { CSSTransition } from "react-transition-group";

const CheckBox = props => {
  const dispatch = useDispatch();
  const toggleCompleted = (id) => dispatch(completedToggle(id))
  const changeAmount = (id,idSelf) => dispatch(changeAmount(id,idSelf))
  const checkBoxes = useSelector(state => state.checkBoxes);
  const assets = useSelector(state => state.assets)
  
  return (
    <CSSTransition in={true} appear={true} timeout={800} classNames="fade">
      <div className="homePageContainer">
        <div className="reduxContainer">
        {assets.map((asset,index) => {
          return(
            <div key={index}>
               {assets[index].asset_self.map((item,indices) => {
              return(
                <div key={indices} onClick={() => changeAmount(asset.id,item.id)}>
                  {item.self_amount}
                </div>
              )
            })}
            </div>
          )
        })}
         {checkBoxes.map(item => (
             <div key={item.id} onClick={() => toggleCompleted(item.id)} className="mt-5 text-left cursor_pointer d-flex flex-column justify-content-center align-items-center">
             {item.id} &nbsp;
             {item.name} &nbsp;
             {item.completed ===true? <strong>Completed</strong> : <strong>Not Completed</strong>}
             </div>
         ))}
        </div>
      </div>
    </CSSTransition>
  );
};
export default CheckBox;
