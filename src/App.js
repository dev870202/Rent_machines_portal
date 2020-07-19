import React from "react";
import Dropdown from "./Dropdown";
import { Container, Row, Col } from "reactstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { Link } from "react-router-dom";

function App() {
  return (
    <Container fluid={true} id="header">
      <Row>
        <Col xs="6">
          <Link to="/">
            <h4>Rental Management system</h4>
          </Link>
        </Col>
        <Col xs="6">
          <Dropdown />
        </Col>
      </Row>
    </Container>
  );
}

export default App;
