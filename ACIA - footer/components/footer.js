import React from 'react';
import '../styles/footer.css';
import { Container, Row, Col, Image} from 'react-bootstrap';


const Footer = () => {

    return (

<Container fluid className="footerContainer">

<Row fluid style={{marginLeft:"75px"}}>
   
<Col lg={3} xs={4} md={4} style={{paddingTop:"115px"}}>
       <Row fluid className="aciaLogo" />
       <Row fluid className="description pr-5">ACIA is a complete insurance product solution that is pre packaged</Row>
</Col>

<Col>
      <p className="columnTitle"><b>Learn More</b></p>
      <ul className="list-unstyled pt-3">
        <li><a className="innerLink" href="/#">How it works?</a></li>
        <li><a className="innerLink" href="/#">Pricing</a></li>
        <li><a className="innerLink" href="/#">Media Release</a></li>
        <li><a className="innerLink" href="/#">Sitemap</a></li>
      </ul>

</Col>

<Col>
      <p className="columnTitle"><b>Support</b></p>
      <ul className="list-unstyled pt-3">
        <li><a className="innerLink" href="/#">FAQ</a></li>
        <li><a className="innerLink" href="/#">Contact Us</a></li>
      </ul>

</Col>

<Col>
      <p className="columnTitle"><b>About Us</b></p>  
      <ul className="list-unstyled pt-3">
        <li><a className="innerLink" href="/#">About</a></li>
        <li><a className="innerLink" href="/#">Careers</a></li>
        <li><a className="innerLink" href="/#">Terms of Service</a></li>
        <li><a className="innerLink" href="/#">Privacy Policy</a></li>
      </ul>
</Col>

<Col>
      <p className="columnTitle pb-3"><b>We're in Social</b></p>
      <Row fluid>
       <Col xs={2} md={3} lg={4} className="p-0"><Image className="facebook" src={require('../images/Group 216.png').default} /></Col>
       <Col xs={2} md={3} lg={4}  className="p-0 "><Image className="linkedIn" src={require('../images/Group 215.png').default} /></Col>
      </Row>

      <Row fluid className='pt-3'>
        <Col xs={2} md={3} lg={4}  className="p-0"><Image className="twitter" src={require('../images/Group 217.png').default} /></Col>
        <Col xs={2} md={3} lg={4}  className="p-0"><Image className="youTube" src={require('../images/Group 218.png').default} /></Col>
      </Row>

</Col>


</Row>


<Row fluid style={{marginLeft:"75px"}}>

<Col lg={3} className='py-5'>
         <Row className="alignText"> US & CAN: 1 - 855 -758-0984 </Row>
         <Row className="alignText"> Worldwide: +1-424-781-3315 </Row>
</Col>

</Row>

<Row lg={1} className='py-3'>
<hr className="horizontalLine" />
<p className="mt-2 pt-3 bottomLine">All rights reserved. ACIA 2021</p>
</Row>

</Container>

    );
}

export default Footer;
