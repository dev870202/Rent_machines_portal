import React from "react";
import { Container, Row, Button } from "reactstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import SubCategory from "./SubCategory";
import { Link } from "react-router-dom";

const SubCategories = (props) => {
  return (
    <Container>
      <Row>
        <h3>Sub Categories</h3>
        <Link to="/">
          <Button color="info"> Go to home</Button>
        </Link>
      </Row>

      {props.location.SCprops
        ? props.location.SCprops.subcategoryList.map((cate) => (
            <Row>
              <h4 className="SubcategoryName">{cate.name}</h4>
              <SubCategory subcategory={cate.subcategories} />
            </Row>
          ))
        : "select a category"}
    </Container>
  );
};

export default SubCategories;
