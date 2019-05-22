import React, { useState, useEffect } from 'react';
import { Container, Row, Col, } from 'reactstrap';
import { CSSTransition } from 'react-transition-group';
import { withRouter } from 'react-router-dom';
import { AppContext } from '../context'
import Avatar from '../images/avatar.jpg'
import Input from '../reusable-components/inputTemplate'
import { Button } from '@material-ui/core';
import CardProgress from '../reusable-components/cardProgress'
import Party from '../images/bjp.jpg'
import Search from '../images/search.svg'
import Filter from '../images/filter.svg'
import 'bootstrap/dist/css/bootstrap.min.css';

function CandidateList(props) {
  const { candidateData } = React.useContext(AppContext)
  const [green, setGreen] = useState('30%')
  const [red, setRed] = useState('30%')
  const [yellow, setYellow] = useState('40%')
 
  return (
    <CSSTransition
      in={true}
      appear={true}
      timeout={800}
      classNames='fade'>
      <div className='homePageContainer'>
        <Container className='mt-4'>
          <Row className='topArea'>
            <Col xs={12} sm={12} lg={6} md={6} xl={6} className='d-flex align-items-center grey_text'>Home/<span className='highlight_text'>Candidates</span></Col>
            <Col xs={12} sm={12} lg={6} md={6} xl={6} className='d-flex align-items-center justify-content-end'>
              <button className={`ButtonFilter whiteFontColor mr-3`}><img src={Filter} width='18'></img></button>
              <div className='h-100 width_Input d-flex justify-content-end align-items-center'>
                <Input type='text' className='candidate_input' placeholder='Search Candidate...' ></Input>
                <button className={`ButtonCand whiteFontColor`}><img src={Search} width='15'></img></button>
              </div>
            </Col>
          </Row>
        </Container>
        <Container className='mt-2 overflow-hidden pt-3'>
          <Row>
            {candidateData.map((item, index) => {
              return (
                <Col key={index} xs={6} sm={6} md={4} lg={4} xl={3} className='card_margin pl-2 pr-2 position-relative'>
                  <div key={index} className='candidate_card'>
                    <div className='profile_box'>
                      <img src={Avatar} width='50%' height='100%'></img>
                      <div className='outer_circle'><div className='party_circle position-absolute'><img src={Party} width='100%' className='home_image'></img> </div></div>

                    </div>
                    <div className='name text_elipses ml-auto mr-auto'>Apurv Sharma Apurv Sharma Apurv Sharma</div>
                    <div className='text_area text-center text_elipses'>
                      Kanpur (UP) <br />
                      CM Candidate in UP-2013 
                </div>
                    <CardProgress green={green} red={red} yellow={yellow} />
                  </div>
                </Col>
              )
            })}

          </Row>
        </Container>
      </div>
    </CSSTransition>
  )
}

export default withRouter(CandidateList)
{/* <input
className='cards_detail'
placeholder='Todo'
value={dynamicText}
onChange={inputChangeHandler}/>
<button aria-label='Add the text' onClick={addTodoItem}>Add</button>
<ul>{todoItem.map((todo, index) => {
  return(
      <li key={index}>{todo}</li>
  )
})}</ul> 880
 <div className='iconBox position-absolute d-flex justify-content-around'>
              <div className='d-flex flex-column justify-content-center align-items-center'>
                <img src={UpArrow} width='15' className='smallFont'></img>  
                <span className='smallFont counts'>267k</span>            
              </div>
              <div className='d-flex flex-column justify-content-center align-items-center'>
                <img src={DownArrow} width='15' className='smallFont'></img>  
                <span className='smallFont counts'>267k</span>            
              </div>
              <div className='d-flex flex-column justify-content-center align-items-center'>
                <img src={Circle} width='15' className='smallFont'></img>  
                <span className='smallFont counts'>267k</span>            
              </div>
            </div>
            <div className='progressBar d-flex '>
            <div style={{width: props.green, height: '100%' ,background:'#56FF00'}}></div>
            <div style={{width: props.red, height: '100%' ,background:'#FF0005'}}></div>
            <div style={{width: props.yellow, height: '100%' ,background:'#FFE526'}}></div>
            </div>
*/}