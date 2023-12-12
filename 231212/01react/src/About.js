import React from "react";
import { useNavigate } from "react-router-dom";

const About = () => {
  const navigate = useNavigate();
  const gotoHomepage = () => {
    navigate("/");
  };
  return (
    <div>
      <div>About</div>
      <button onClick={gotoHomepage}>Go to HomePage</button>
    </div>
  );
};

export default About;
