
import React, {Fragment} from 'react';
import { Row, Col, Image, Container} from 'react-bootstrap';
import AdditionalCoverage from './additionalCoverage';
import '../styles/motorContent.css';


const MotorContent = () => {


    return (

      <Fragment >
             <Image className='image' src={ require('../images/Group 224.png').default }></Image>
             
        <Container className="contentContainer">


        <Row className="firstRow">

         <div className="firstPart pr-3">Find the</div>
         <div className="secondPart"> Right Motor</div> 
         <div className="secondPart">insurance for your family</div> 
        
        </Row>

        <Row className="secondRow pt-1">

        ACIA insures your vehicles against losses caused by events outside of your control.
        This includes vehicle damages caused due to an accident while driving or to your stationary vehicle caused by a fire or theft.So do we.
        However if something goes wrong,having Motor insurance can help protect your financial future.
        That's where ACIA can help. We focus on what matters.
          
        </Row>

        <Row className="thirdRow pt-4">
        Free Quote and Instant Online Cover
        </Row>


        <Row className="fourthRow pt-1">
        <ul style={{listStyle:"none" }}>
             <li style={{marginLeft:"-37px"}}>- High-quality motor cover at an affordable price;</li>
             <li style={{marginLeft:"-37px"}}>- Fast, fair and efficitent handling of all your claims;</li>
             <li style={{marginLeft:"-37px"}}>- A global team of experts that puts your safety and wel l-being first;</li>
             <li style={{marginLeft:"-37px"}}>- 24 hour emergency assistance from our team of experienced vehicle assistance providers.</li>
             </ul>
        </Row>
         
        </Container>
        <AdditionalCoverage />
        </Fragment>
    )

}


export default MotorContent;