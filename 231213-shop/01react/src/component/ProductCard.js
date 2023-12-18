import React from "react";
import { useNavigate } from "react-router-dom";

const ProductCard = ({ item }) => {
  const navigate = useNavigate()
  const showDetail = () => {
    navigate(`/product/${item?.id}`)
  }
  return (
    <div className="ProductCard" onClick={showDetail}>
      <img src={item?.img} />
      <div>Conscious Choice</div>
      <div>{item?.title}</div>
      <div>{item?.price}Won</div>
      <div>{item?.new === true ? "신상품" : "세일상품"}</div>
    </div>
  );
};

export default ProductCard;