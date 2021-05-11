import React, { Fragment } from 'react';
import '../styles/getQuote.css';
import {Container, Row, Col, Button } from 'react-bootstrap';



const Quote = () => {

    return(
      
        <Fragment>
        <Container fluid  className="outerContainerQuote">
             <Row className="textArea">
             Exception Customer Service
             </Row>

             <Row className="innerTextArea">
               All of our client care team works in our office ands is an experienced web meeting user
               ready to help you. Never outsourced.
             </Row>

            <Row style={{marginLeft:"58px"}}>
            <Button className="quoteButton">Get Quote Now</Button>
            </Row>
            
        </Container>
            <div className='imageArea' />
        </Fragment>

    );

} 

export default Quote;