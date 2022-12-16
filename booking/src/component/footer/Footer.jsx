import "./footer.css";
import { NavLink } from "react-router-dom";

const Footer = ({ type }) => {
  return (
    <div className={type === "List" ? "footer mt" : "footer"}>
      <div className="fLists">
        <ul className="fList">
          <li className="fListItem">
            <NavLink to="#">Countries</NavLink>
          </li>
          <li className="fListItem">
            <NavLink to="#">Regions</NavLink>
          </li>
          <li className="fListItem">
            <NavLink to="#">Cities</NavLink>
          </li>
          <li className="fListItem">
            <NavLink to="#">Districts</NavLink>
          </li>
          <li className="fListItem">
            <NavLink to="#">Airports</NavLink>
          </li>
          <li className="fListItem">
            <NavLink to="#">Hotels</NavLink>
          </li>
          <li className="fListItem">
            <NavLink to="#">Places of interest</NavLink>
          </li>
        </ul>

        <ul className="fList">
          <li className="fListItem">
            <NavLink to="/">Homes</NavLink>
          </li>
          <li className="fListItem">
            <NavLink to="#">Apartments</NavLink>
          </li>
          <li className="fListItem">
            <NavLink to="#">Resorts</NavLink>
          </li>
          <li className="fListItem">
            <NavLink to="#">Villas</NavLink>
          </li>
          <li className="fListItem">
            <NavLink to="#">Hostels</NavLink>
          </li>
          <li className="fListItem">
            <NavLink to="#">B&Bs</NavLink>
          </li>
          <li className="fListItem">
            <NavLink to="#">Guest houses</NavLink>
          </li>
        </ul>

        <ul className="fList">
          <li className="fListItem">
            <NavLink to="#">Unique places to stay</NavLink>
          </li>
          <li className="fListItem">
            <NavLink to="#">All destinations</NavLink>
          </li>
          <li className="fListItem">
            <NavLink to="#">Discover</NavLink>
          </li>
          <li className="fListItem">
            <NavLink to="#">Reviews</NavLink>
          </li>
          <li className="fListItem">
            <NavLink to="#">Unpacked: Travel articles</NavLink>
          </li>
          <li className="fListItem">
            <NavLink to="#">Travel Communities</NavLink>
          </li>
          <li className="fListItem">
            <NavLink to="#">Seasonal and holiday deals</NavLink>
          </li>
        </ul>

        <ul className="fList">
          <li className="fListItem">
            <NavLink to="#">Car hire</NavLink>
          </li>
          <li className="fListItem">
            <NavLink to="#">Flight finder</NavLink>
          </li>
          <li className="fListItem">
            <NavLink to="#">Restaurant reservations</NavLink>
          </li>
          <li className="fListItem">
            <NavLink to="#">Booking.com for Travel Agents</NavLink>
          </li>
        </ul>

        <ul className="fList">
          <li className="fListItem">
            <NavLink to="#">Coronavirus (COVID-19) FAQs</NavLink>
          </li>
          <li className="fListItem">
            <NavLink to="#">About Booking.com</NavLink>
          </li>
          <li className="fListItem">
            <NavLink to="#">Customer Service help</NavLink>
          </li>
          <li className="fListItem">
            <NavLink to="#">Careers</NavLink>
          </li>
          <li className="fListItem">
            <NavLink to="#">Press centre</NavLink>
          </li>
          <li className="fListItem">
            <NavLink to="#">Safety resource centre</NavLink>
          </li>
          <li className="fListItem">
            <NavLink to="#">Investor relations</NavLink>
          </li>
          <li className="fListItem">
            <NavLink to="#">Terms & Conditions</NavLink>
          </li>
          <li className="fListItem">
            <NavLink to="#">Partner dispute</NavLink>
          </li>
          <li className="fListItem">
            <NavLink to="#">How we work</NavLink>
          </li>
          <li className="fListItem">
            <NavLink to="#">Privacy & Cookie Statement</NavLink>
          </li>
          <li className="fListItem">
            <NavLink to="#">MSA Statement</NavLink>
          </li>
          <li className="fListItem">
            <NavLink to="#">Corporate contact</NavLink>
          </li>
        </ul>
      </div>
      <div className="footertitle">
        <p>Copyright © 1996–2022 Booking.com™. All rights reserved.</p>
      </div>
    </div>
  );
};

export default Footer;
