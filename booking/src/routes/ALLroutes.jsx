import { Route, Routes } from "react-router-dom";
import Home from "../pages/Home/Home";
import Hotel from "../pages/hotel/Hotel";

function Allroutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/hotel" element={<Hotel />} />
    </Routes>
  );
}

export default Allroutes;
