import { Route, Routes } from "react-router-dom";
import Home from "../pages/Home/Home";
import Hotel from "../pages/hotel/Hotel";
import List from "../component/list/List";
import Registered from "../pages/Registered/Registerd";
import Signin from "../pages/signin/Signin";
import Dropdown from "../component/dropdown/Dropdown";
import Payment from "../pages/payment/Payment";
import Privateauth from "../routes/Privateauth";

function Allroutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/hotel/:id" element={<Hotel />} />
      <Route path="/list" element={<List />} />
      <Route path="/registered" element={<Registered />} />
      <Route path="/signin" element={<Signin />} />
      <Route path="/dropdown" element={<Dropdown />} />
      <Route
        path="/payment"
        element={
          <Privateauth>
            <Payment />
          </Privateauth>
        }
      />
    </Routes>
  );
}

export default Allroutes;
