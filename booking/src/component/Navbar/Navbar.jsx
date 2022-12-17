import { Link } from "react-router-dom";
import ss from "./navbar.module.css";
import { AuthContext } from "../../context/Authcontext";
import { useContext } from "react";
import { is } from "date-fns/locale";
import Dropdown from "../dropdown/Dropdown";

function Navbar({ type }) {
  const { isAuth } = useContext(AuthContext);

  return (
    <div className={ss.navbar}>
      <div className={ss.navcontaier}>
        <div className={ss.logo}>
          <Link to="/">
            <img
              src="https://i.ibb.co/vHn2VL4/New-Project-17-0-D16202-2.png"
              alt=""
            />
          </Link>
        </div>

        <div className={ss.navright}>
          <ul>
            <li className={ss.nav_list1}>INR</li>
            <li>
              <img
                src="https://cf.bstatic.com/static/img/flags/new/48-squared/in/20aa535a5d3c505dd02fea275ed1a36c0fb1fe08.png"
                alt=""
              />{" "}
            </li>
            {isAuth ? (
              <li>{<Dropdown />}</li>
            ) : (
              <>
                <li className={type === "List" ? ss.hidden : ss.block}>
                  <Link to="/registered">
                    <button className={ss.nav_list}>Register</button>
                  </Link>
                </li>
                <li className={type === "List" ? ss.hidden : ss.block}>
                  <Link to="/signin">
                    <button className={ss.nav_list}>Sign in</button>
                  </Link>
                </li>
              </>
            )}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
