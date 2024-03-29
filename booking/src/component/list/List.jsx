import React, { useRef } from "react";
import Navbar from "../Navbar/Navbar";
import Header from "../header/Header";
import "./list.css";
import { BsArrowDownUp, BsSearch } from "react-icons/bs";
import { TbCalendarPlus } from "react-icons/tb";
import { TbCalendarMinus } from "react-icons/tb";
import { useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import { format } from "date-fns";
import { DateRange } from "react-date-range";
import Listcard from "../listcard/Listcard";
import axios from "axios";
import { Loader } from "../Loader/Loader";
const List = () => {
  const location = useLocation();
  // creating loader state for handle loader
  const [loader, setLoader] = useState(false);
  const [Destination, setDestination] = useState(
    location.state.Destination || "delhi"
  );

  const [date, setdate] = useState(location.state.date || "");
  const [age, setage] = useState(location.state.age || "");
  const [opendate, setopendate] = useState(false);
  const [data, setdata] = useState([]);
  // time varibale for clearing settimeout
  const time = useRef();

  const onchan = (e) => {
    setDestination(e.target.value);
  };

  useEffect(() => {
    setLoader(true);
    axios
      .get(`https://red-light-wasp.cyclic.app/${Destination}`)
      .then((res) => setdata(res.data));

    time.current = setTimeout(() => {
      setLoader(false);
    }, 2000);

    // clearing time out
    return () => {
      clearTimeout(time.current);
    };
  }, []);

  return loader ? (
    <Loader />
  ) : (
    <div>
      <Navbar />
      <Header />
      <div className="listcontainer">
        <div className="listwrapper">
          <div className="listsearch">
            <h1 className="isTitle">Search</h1>
            <div className="isserchiteam">
              <label htmlFor="">Destination/property name:</label>
              <div className="listbox">
                <span>
                  <BsSearch />
                </span>
                <input
                  type="text"
                  placeholder="Where are you going now?"
                  value={Destination}
                  onChange={onchan}
                />
              </div>
            </div>

            <div className="isserchiteam">
              <label htmlFor="">Check-in date</label>
              <div className="listbox">
                <span>
                  <TbCalendarPlus />
                </span>
                <span
                  className="selectcheck"
                  onClick={() => setopendate(!opendate)}
                >{`${format(date[0].startDate, "MM/dd/yyyy")} to  ${format(
                  date[0].endDate,
                  "MM/dd/yyyy"
                )}`}</span>
                {opendate && (
                  <DateRange
                    onChange={(item) => setdate([item.selection])}
                    minDate={new Date()}
                    ranges={date}
                    className="listdate"
                  />
                )}
              </div>
            </div>

            <div className="isserchiteam">
              <label htmlFor="">33-night stay</label>
              <div className="listbox">
                <span>
                  <TbCalendarMinus />
                </span>
                <span className="selectcheck">{` ${age.adults} adults  ${age.children} children  ${age.room} room`}</span>
              </div>
            </div>

            <div className="listwrappercheckbox">
              <div className="listcheckbox">
                <input type="checkbox" /> <span>Entire homes & apartments</span>
              </div>

              <div className="listcheckbox">
                <input type="checkbox" /> <span>I'm travelling for work</span>
              </div>
            </div>

            <button className="listSubmit">Submit</button>
          </div>
          <div className="listresult">
            {data.length > 0 &&
              data.map((user) => (
                <Listcard
                  image={user.img1}
                  text1={user.text1}
                  city={user.city}
                  heading1={user.heading1}
                  headig2={user.headig2}
                  id={user.id}
                  rating={user.rating}
                  text2={user.text2}
                />
              ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default List;
