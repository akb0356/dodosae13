import React from "react";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import Coin from "./routes/Coin";
import Coins from "./routes/Coins";
import Chart from "./routes/Chart";
import Price from "./routes/Price";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Coins />} />
        <Route path="/:coinId/*" element={<Coin />} />
        {/* chart라는 문자열이 있으면 chart보여주고 price잇음 price보여줘 */}
        {/* <Route path="chart" element={<Chart />} />
        <Route path="price" element={<Price />} /> */}
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
