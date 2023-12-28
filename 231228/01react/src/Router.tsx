import React from "react";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import Coin from "./routes/Coin";
import Coins from "./routes/Coins";

interface IRouterProps {
  isDark: boolean;
  //return문이 없는 함수는 void
  toggleDark: () => void;
}

const Router = ({ isDark, toggleDark }: IRouterProps) => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Coins toggleDark={toggleDark} />} />
        <Route path="/:coinId/*" element={<Coin isDark={isDark} />} />
        {/* chart라는 문자열이 있으면 chart보여주고 price잇음 price보여줘 */}
        {/* <Route path="chart" element={<Chart />} />
        <Route path="price" element={<Price />} /> */}
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
