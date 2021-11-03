import React from "react";
import { Alert, Col, Container, Row } from "reactstrap";

class Home extends React.Component {
  render() { 
    return <>
  <Container>
    <Row>
      <Col md='4'>
       <Alert color="danger">
        This is Alert Component
       </Alert>
      </Col>
    </Row>  
  </Container>    
    </>;
  }
}
 


export default Home;

