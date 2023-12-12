import "./App.css";
import { Route, Routes } from "react-router-dom";
import Navbar from "./component/Navbar";
import ProductAll from "./page/ProductAll";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<ProductAll />} />
      </Routes>
    </div>
  );
}

export default App;
