import "./App.css";
import Home from "./Home";
import About from "./About";
import Products from "./Products";
import ProductDetail from "./ProductDetail";
import Login from "./Login";
import Userpage from "./Userpage";
import { Route, Routes, useNavigate } from "react-router-dom";
import { useState } from "react";
function App() {
  const [authernticate, setauthernticate] = useState(false);
  const PrivateRoute = () => {
    return authernticate === true ? <Userpage /> : <Navigate to="/login" />;
  };
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/products" element={<Products />} />
        <Route path="/products/:id/:num" element={<ProductDetail />} />
        <Route path="/login" element={<Login />} />
        <Route path="/userpage" element={<PrivateRoute />} />
      </Routes>
    </div>
  );
}

export default App;
