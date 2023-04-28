import "./registerd.css";
import Navbar from "../../component/Navbar/Navbar";
import { useState, useEffect } from "react";
import { Navigate } from "react-router-dom";
import axios from "axios";

const authintialstate = {
  name: "",
  email: "",
  password: "",
};

function Register() {
  const [data, setdata] = useState(authintialstate);

  const [Auth, setAuth] = useState(false);

  function onchange(e) {
    setdata({ ...data, [e.target.name]: e.target.value });
  }

  function onsub(e) {
    e.preventDefault();

    if (!data.name && !data.email && !data.password) {
      alert("please fill all the details!");
      return;
    }

    axios
      .post("https://636bda08ad62451f9fbd8076.mockapi.io/apnidukaan", {
        name: data.name,
        email: data.email,
        password: data.password,
      })
      .then((_) => {
        alert("register successful!");
        setdata(authintialstate);
        setAuth(!Auth);
      });
  }

  if (Auth) {
    return <Navigate to="/signin" />;
  }

  return (
    <div className="Registered">
      <Navbar type="List" />
      <div className="formwrap">
        <div className="ll">
          <h1 className="registertitle">Create an account</h1>
        </div>
        <form className="registerdform" onSubmit={onsub}>
          <label htmlFor="">Name</label>
          <input
            className="registerinput"
            type="text"
            name="name"
            value={data.name}
            onChange={onchange}
          />
          <label htmlFor="">Email</label>
          <input
            className="registerinput"
            type="email"
            name="email"
            value={data.email}
            onChange={onchange}
          />
          <label htmlFor="">Password</label>
          <input
            className="registerinput"
            type="password"
            name="password"
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
          <input type="submit" className="inputsub" value="Registered" />
        </form>
        <p>Or</p>
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
      </div>
    </div>
  );
}

export default Register;
