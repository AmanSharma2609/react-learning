import React from 'react';
import { withRouter } from 'react-router-dom';

function NotFound(props){
    return(
        <div className='homePageContainer'>
        NOT FOUND
        <div onClick={() => props.history.push('./')}>
        Go to home
        </div>
        </div>
    )
}
export default withRouter(NotFound)