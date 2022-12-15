import "./midcon.css"; // midcon css main file
import { Link } from "react-router-dom";
import { FaBed } from "react-icons/fa";
import { SlCalender } from "react-icons/sl";
import { BsFillPersonFill } from "react-icons/bs";
import { DateRange } from "react-date-range";
import { useState } from "react";
import "react-date-range/dist/styles.css"; // calender css main file
import "react-date-range/dist/theme/default.css"; // calender theme css file
import { format } from "date-fns";

function Midcon({ type }) {
  const [opendate, setopendate] = useState(false);
  const [openoption, setopenoption] = useState(false);
  const [age, setage] = useState({
    adults: 3,
    children: 2,
    room: 1,
  });
  const [date, setdate] = useState([
    {
      startDate: new Date(),
      endDate: new Date(),
      key: "selection",
    },
  ]);

  const handleoption = (name, action) => {
    setage((prev) => {
      return {
        ...age,
        [name]: action === "1" ? age[name] + 1 : age[name] - 1,
      };
    });
  };

  return (
    <div className="midcon etssj">
      <div className="midcon_img">
        <img
          src="https://r-xx.bstatic.com/xdata/images/xphoto/2880x750/183939625.jpeg?k=f06b6ea8458f9377cc1293e39f6b3218d13c4a6576d61d51b989438e667d68fc&o="
          alt=""
        />
      </div>

      <div className="midcon_head ">
        <div className="midcon_text">
          <h1 className="mid_title">The joy of home anywhere in the world</h1>
          <p className="mid_quate">Easy booking, easy living</p>
          <Link className="mid_btn">
            <button>Explore holiday homes</button>
          </Link>
        </div>
      </div>

      <div className="headerserch">
        <div className="headerserachiteam">
          <FaBed className="headericon" />
          <input
            type="text"
            placeholder="where are you going?"
            className="headersearchinput"
          />
        </div>
        <div className="headerserachiteam">
          <SlCalender className="headericon" />
          <span
            onClick={() => {
              setopendate(!opendate);
              setopenoption(false);
            }}
            className="headerSearchText"
          >{`${format(date[0].startDate, "MM/dd/yyyy")} to  ${format(
            date[0].endDate,
            "MM/dd/yyyy"
          )}`}</span>
          {opendate && (
            <DateRange
              editableDateInputs={true}
              onChange={(item) => setdate([item.selection])}
              moveRangeOnFirstSelection={false}
              ranges={date}
              className="date"
            />
          )}
        </div>
        <div className="headerserachiteam">
          <BsFillPersonFill className="headericon" />
          <span
            onClick={() => {
              setopenoption(!openoption);
              setopendate(false);
            }}
            className="headerSearchText"
          >{` ${age.adults} adults  ${age.children} children  ${age.room} room`}</span>
          {openoption && (
            <div className="ageselecter">
              <div className="ageselecteroption">
                <span className="optiontext">Adults</span>
                <div className="agetextcon">
                  <button
                    disabled={age.adults == 1}
                    onClick={() => handleoption("adults", "0")}
                    className="ageselecterbtn"
                  >
                    -
                  </button>
                  <span className="optionagecounter">{age.adults}</span>
                  <button
                    onClick={() => handleoption("adults", "1")}
                    className="ageselecterbtn"
                  >
                    +
                  </button>
                </div>
              </div>

              <div className="ageselecteroption">
                <span className="optiontext">children</span>
                <div className="agetextcon">
                  <button
                    disabled={age.children == 0}
                    onClick={() => handleoption("children", "0")}
                    className="ageselecterbtn"
                  >
                    -
                  </button>
                  <span className="optionagecounter">{age.children}</span>
                  <button
                    onClick={() => handleoption("children", "1")}
                    className="ageselecterbtn"
                  >
                    +
                  </button>
                </div>
              </div>

              <div className="ageselecteroption">
                <span className="optiontext">Room</span>
                <div className="agetextcon">
                  <button
                    disabled={age.room == 1}
                    onClick={() => handleoption("room", "0")}
                    className="ageselecterbtn"
                  >
                    -
                  </button>
                  <span className="optionagecounter">{age.room}</span>
                  <button
                    onClick={() => handleoption("room", "1")}
                    className="ageselecterbtn"
                  >
                    +
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
        <div className="headerSearchtext">
          <button className="headerBtn">Search</button>
        </div>
      </div>
    </div>
  );
}

export default Midcon;
