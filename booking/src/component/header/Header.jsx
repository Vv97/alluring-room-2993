import Navbar from "../Navbar/Navbar";
import { FaBed } from "react-icons/fa";
import { TbPlaneInflight } from "react-icons/tb";
import { GiEarthAmerica } from "react-icons/gi";
import { BiCar } from "react-icons/bi";
import { MdAttractions } from "react-icons/md";
import "./header.css";

function Header() {
  return (
    <div className="header">
      <div className="headercontainer">
        <div className="headerList">
          <div className="headerListItem active">
            <FaBed /> <span>Stays</span>
          </div>
          <div className="headerListItem">
            <TbPlaneInflight /> <span>Flights</span>
          </div>
          <div className="headerListItem">
            <GiEarthAmerica /> <span>Flight + Hotel</span>
          </div>
          <div className="headerListItem">
            <BiCar /> <span>Car rentals</span>
          </div>
          <div className="headerListItem">
            <MdAttractions /> <span>Attraction</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
