import { NavLink } from "react-router-dom";
import "./dropdown.css";
import { FaUserAlt } from "react-icons/fa";
import { MdLuggage } from "react-icons/md";
import { IoWalletSharp } from "react-icons/io5";
import { AiFillHeart } from "react-icons/ai";
import { AiOutlineImport } from "react-icons/ai";

const Dropdown = () => {
  return (
    <div className="dropdown">
      <div className="collapse">
        <div>
          <p className="dropdowntitle">vishal varma</p>
          <p className="dropdowntitle1">Genius Level 1</p>
        </div>
        <ul className="collaps_text">
          <li>
            <span className="drop_gap">
              <FaUserAlt className="drop_icon" />
            </span>
            Manage account
          </li>
          <li>
            <span className="drop_gap">
              <MdLuggage className="drop_icon" />
            </span>
            Bookings & Trips
          </li>
          <li>
            <span className="drop_gap">
              <IoWalletSharp className="drop_icon" />
            </span>
            Rewards & Wallent
          </li>
          <li>
            <span className="drop_gap">
              <AiFillHeart className="drop_icon" />
            </span>
            Saved
          </li>
          <li>
            <span className="drop_gap">
              <AiOutlineImport className="drop_icon" />
            </span>
            Sign out
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Dropdown;
