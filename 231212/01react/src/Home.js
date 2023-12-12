import React from "react";

import { Link, useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();
  const gotoProduct = () => {
    navigate("/products?q=pants");
  };
  return (
    <div>
      <div>Homepage</div>
      <Link to={"/about"}>Go to AboutPage</Link>
      <Button onclick={gotoProduct}>Go to Products</Button>
    </div>
  );
};

export default Home;
