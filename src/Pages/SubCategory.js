import React from "react";
import { Container, Row, Col } from "reactstrap";
import "bootstrap/dist/css/bootstrap.min.css";

export default function SubCategory(props) {
  return (
    <Container>
      <Row>
        {props.subcategory.map((cate) => (
          <Col xs="3" className="categoryGrid">
            {cate.image ? (
              <img src={require("../Assets/subcategory/" + cate.image)} />
            ) : null}
            <span>{cate.name}</span>
          </Col>
        ))}
      </Row>
    </Container>
  );
}
