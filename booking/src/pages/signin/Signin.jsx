import "./sign.css";
import Navbar from "../../component/Navbar/Navbar";
import { useState, useEffect } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import axios from "axios";
import { AuthContext } from "../../context/Authcontext";
import { useContext } from "react";

const signinintialstate = {
  email: "",
  password: "",
};

const Signin = () => {
  const [data, setdata] = useState([]);
  const [userdata, setuserdata] = useState(signinintialstate);
  const navigate = useNavigate();
  const [loader, setloader] = useState(false);

  const { setIsAuth, isAuth } = useContext(AuthContext);

  function onsub(e) {
    e.preventDefault();
    setloader(true);
    let user = data.filter(
      (user) =>
        user.email === userdata.email && user.password === userdata.password
    );

    if (user.length > 0) {
      setIsAuth(!isAuth);
      localStorage.setItem("Auth", JSON.stringify(!isAuth));
      localStorage.setItem("email", JSON.stringify(user[0].email));
      alert("Sign in successful");
      setloader(false);
      navigate("/");
    }
  }

  useEffect(() => {
    axios
      .get("https://636bda08ad62451f9fbd8076.mockapi.io/apnidukaan")
      .then((res) => setdata(res.data.items));
  }, [data.length]);

  function onchange(e) {
    setuserdata({ ...userdata, [e.target.name]: e.target.value });
  }

  return (
    <div className="signIn">
      <Navbar type="List" />
      <div className="signwrap">
        <div className="ll">
          <h1 className="registertitle">Sign in</h1>
        </div>
        <form className=" registerdform" onSubmit={onsub}>
          <label htmlFor="">Email</label>
          <input
            className="registerinput"
            type="email"
            name="email"
            required
            value={userdata.email}
            onChange={onchange}
          />
          <label htmlFor="">Password</label>
          <input
            className="registerinput"
            type="password"
            name="password"
            required
            value={data.password}
            onChange={onchange}
          />
          <label htmlFor="" className="regcondition ">
            <input type="checkbox" className="registercheckbox" />
            <span>
              I agree to Travlo{" "}
              <span className="rgconcheck">Terms of Service</span> and{" "}
              <span className="rgconcheck"> Privacy Policy</span>
            </span>
          </label>
          <input
            type="submit"
            className="inputsub"
            disabled={loader}
            value={loader ? "...loading" : "Sign in"}
          />
          <p style={{ textAlign: "center" }}>Or</p>
          <button className="registergoogle">
            <span>
              <img
                className="googleimg"
                src="https://app.unbounce.com/app_assets/svg/google-icon-1553313c16ee72c905f02b21327275d51d2326fe6f781996bc2a831d930a742c.svg"
                alt=""
              />
            </span>{" "}
            Register with google
          </button>
        </form>
      </div>
    </div>
  );
};

export default Signin;
