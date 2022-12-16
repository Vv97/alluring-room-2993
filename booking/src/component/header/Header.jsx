import Navbar from "../Navbar/Navbar";
import { FaBed } from "react-icons/fa";
import { TbPlaneInflight } from "react-icons/tb";
import { GiEarthAmerica } from "react-icons/gi";
import { BiCar } from "react-icons/bi";
import { MdAttractions } from "react-icons/md";
import "./header.css";
import { NavLink } from "react-router-dom";

function Header() {
  return (
    <div className="header">
      <div className="headercontainer">
        <div className="headerList">
          <div className="headerListItem ">
            <NavLink to="/">
              <FaBed /> <span>Stays</span>
            </NavLink>
          </div>
          <div className="headerListItem">
            <NavLink to="/dropdown">
              <TbPlaneInflight /> <span>Flights</span>
            </NavLink>
          </div>
          <div className="headerListItem">
            <NavLink to="/list">
              <GiEarthAmerica /> <span>Flight + Hotel</span>
            </NavLink>
          </div>
          <div className="headerListItem">
            <NavLink to="*">
              <BiCar /> <span>Car rentals</span>
            </NavLink>
          </div>
          <div className="headerListItem">
            <NavLink to="*">
              <MdAttractions /> <span>Attraction</span>
            </NavLink>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
