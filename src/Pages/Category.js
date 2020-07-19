import React, { useContext } from "react";
import { Container, Row, Col } from "reactstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";

export default function Category(props) {
  return (
    <Container>
      {props ? (
        <Row>
          {props.category.map((cate) => (
            <Col xs="3" className="categoryGrid">
              <Link
                to={{
                  pathname: "/SubCategories",
                  SCprops: {
                    subcategoryList: props.category,
                  },
                }}
              >
                {cate.image ? (
                  <img src={require("../Assets/" + cate.image)} />
                ) : null}
                <span>{cate.name} ></span>
              </Link>
            </Col>
          ))}
        </Row>
      ) : (
        "select location"
      )}
    </Container>
  );
}
