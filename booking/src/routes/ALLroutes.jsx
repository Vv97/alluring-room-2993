import { Route, Routes } from "react-router-dom";
import Home from "../pages/Home/Home";
import Hotel from "../pages/hotel/Hotel";
import List from "../component/list/List";

function Allroutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/hotel" element={<Hotel />} />
      <Route path="/list" element={<List />} />
    </Routes>
  );
}

export default Allroutes;
