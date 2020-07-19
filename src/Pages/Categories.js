import React, { useContext } from "react";
import { Container, Row } from "reactstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import Category from "./Category";

const Categories = (props) => {
  console.log("CategoryCategory", props);

  return (
    <Container className="categoriesWrapper">
      <Row>
        <h2>Equipment catalog</h2>
      </Row>

      {props.location.Cprops
        ? props.location.Cprops.categoryList.map((cate) => (
            <Row>
              <h4 className="categoryName">{cate.name}</h4>
              <Category category={cate.categories} />
            </Row>
          ))
        : "Please select a category"}
    </Container>
  );
};

export default Categories;
