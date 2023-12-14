import React, { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { Container, Row, Col } from "react-bootstrap";
import ProductCard from "../component/ProductCard";
import "bootstrap/dist/css/bootstrap.min.css";

const ProductAll = () => {
  const [productList, setProductList] = useState([]);
  const [query, setQuery] = useSearchParams();

  const getProduct = async () => {
    const searchQuery = query.get("q") || "";
    const url = `https://my-json-server.typicode.com/gleehyun/shopping-musinsa-test/products?q=${searchQuery}`;
    const response = await fetch(url);
    const data = await response.json();
    setProductList(data);
  };

  useEffect(() => {
    getProduct();
  }, [query]);

  return (
    <Container>
      <Row>
        {productList.map((menu, index) => (
          <Col lg={3} key={index}>
            <ProductCard item={menu} />
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default ProductAll;
