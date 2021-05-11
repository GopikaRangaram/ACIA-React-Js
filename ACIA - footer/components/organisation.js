import React from 'react';
import '../styles/organisation.css';
import { Container,  Image, Row, Col} from 'react-bootstrap';


const Organisation = () => {

    return(
    <Container fluid className="container my-3 mx-2" >
        
                <Row fluid className='py-5'>
                  
                  <Col className='px-5' lg={3} xs={12} md={6}>
                  <Image className="logoIpsum" src={require('../images/Mask Group 11.png').default} />
                  </Col>
                
                  <Col className='px-5' lg={3} xs={12} md={6}>
                  <Image className="amara" src={require('../images/Mask Group 12.png').default} />  
                  </Col>
                           
                  <Col className='px-5' lg={3} xs={12}  md={6}>
                  <Image className="aven"  src={require('../images/Mask Group 13.png').default} />
                  </Col>
    
                                    
                  <Col className='px-5' lg={3} xs={12}  md={6}>
                  <Image className="treva"  src={require('../images/Mask Group 14.png').default} />
                  </Col> 

                </Row>

    </Container>


    );
}

export default Organisation;
