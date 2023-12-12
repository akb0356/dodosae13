import React from "react";
import { useParams } from "react-router-dom";

const ProductDetail = () => {
  const params = useParams();
  const { id, num, brand } = useParams();

  console.log(params);
  return (
    <div>
      <h1>카테고리 {id}</h1>
      <h1>브랜드 {brand}</h1>
      <h1>품번 {num}</h1>
    </div>
  );
};

export default ProductDetail;
