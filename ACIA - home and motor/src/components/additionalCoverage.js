import React from 'react';
import '../styles/additionalCoverage.css';
import {Card, CardColumns} from 'react-bootstrap';

const AdditionalCoverage = () => {
  return (
    <div className="coverageContainer ">

      <p className="cardheading">Key benefits of our Additional Coverages</p>
      <p className="cardcontent">
        se our extensive choice of additional coverages to enjoy roadside assistance during breakdown, protection for your accessories, and our extended network of partners to arrange for accommodation, medical aid and financial assistance.
      </p>

      <CardColumns>

        <Card>
          <Card.Img
            variant="right"
            src={require ('../images/Group 221.png').default}
          />
          <Card.Body>
            <Card.Title className="cardtitle">
              Fire and Theft Protection
            </Card.Title>
            <Card.Text>
              All of our client care team works in our office ands is an experienced web meeting user ready to help you. Never outsourced.
            </Card.Text>
          </Card.Body>
        </Card>

        <Card>
          <Card.Img
            variant="right"
            src={require ('../images/Group 221.png').default}
          />
          <Card.Body>
            <Card.Title>Roadside Assistance Protection</Card.Title>
            <Card.Text>
              All of our client care team works in our office ands is an experienced web meeting user ready to help you. Never outsourced.
            </Card.Text>
          </Card.Body>
        </Card>

      </CardColumns>

      <CardColumns>

        <Card>
          <Card.Img
            variant="right"
            src={require ('../images/Group 223.png').default}
          />
          <Card.Body>
            <Card.Title>Accessories Protection</Card.Title>
            <Card.Text>
              All of our client care team works in our office ands is an experienced web meeting user ready to help you. Never outsourced.
            </Card.Text>
          </Card.Body>
        </Card>

        <Card>
          <Card.Img
            variant="right"
            src={require ('../images/Group 222.png').default}
          />
          <Card.Body>
            <Card.Title>Fire and Theft Protection</Card.Title>
            <Card.Text>
              All of our client care team works in our office ands is an experienced web meeting user ready to help you. Never outsourced.
            </Card.Text>
          </Card.Body>
        </Card>

      </CardColumns>

    </div>
  );
};

export default AdditionalCoverage;