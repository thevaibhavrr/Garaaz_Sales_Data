import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home from "./component/home/home";
import SaleData from "./component/salesData/saleData";
import Header from "./component/Header/header";

function App() {
  return (
    <div className="App">
      {/* navbar */}
      <Header />
      {/* body */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/data" element={<SaleData />} />
      </Routes>
    </div>
  );
}

export default App;
