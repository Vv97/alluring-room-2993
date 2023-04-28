import "./hotel.css";
import Navbar from "../../component/Navbar/Navbar";
import Header from "../../component/header/Header";
import { IoLocationSharp } from "react-icons/io5";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import { BsFillArrowLeftCircleFill } from "react-icons/bs";
import { BsFillArrowRightCircleFill } from "react-icons/bs";
import { RiCloseLine } from "react-icons/ri";
import { Navigate } from "react-router-dom";

function Hotel() {
  const [slideNmber, setslidenumber] = useState(0);
  const [open, setopen] = useState(false);
  let val = useParams();
  let [id, setid] = useState(val.id);
  let [data, setdata] = useState([]);
  let [nav, setnav] = useState(false);
  let arr = [data.img2, data.img3, data.img4, data.img5, data.img6, data.img7];

  const handleopen = (i) => {
    setslidenumber(i);
    setopen(!open);
  };

  const handlechange = (value) => {
    if (slideNmber == arr.length - 1) {
      setslidenumber(0);
    } else if (slideNmber < 0) {
      setslidenumber(arr.length - 1);
    } else {
      setslidenumber(value + slideNmber);
    }
  };

  const handleredirect = () => {
    setnav(!nav);
  };

  useEffect(() => {
    axios.get(`https://red-light-wasp.cyclic.app/delhi/${id}`).then((res) => {
      setdata(res.data);
      localStorage.setItem("data", JSON.stringify(res.data));
    });
  }, []);

  if (nav) {
    return <Navigate to="/payment" />;
  }

  return (
    <div className="Hotel">
      {open && (
        <div className="slider">
          <RiCloseLine className="close" onClick={() => setopen(!open)} />
          <BsFillArrowLeftCircleFill
            onClick={() => handlechange(1)}
            className="arrow"
          />
          <div className="slidewrapper">
            <img src={arr[slideNmber]} alt="" />
          </div>
          <BsFillArrowRightCircleFill
            onClick={() => handlechange(1)}
            className="arrow"
          />
        </div>
      )}
      <Navbar />
      <Header />
      <div className="hotelcontainer">
        {/* {open && (
          <div className="slider">
            <RiCloseLine className="close" onClick={() => setopen(!open)} />
            <BsFillArrowLeftCircleFill
              onClick={() => handlechange(1)}
              className="arrow"
            />
            <div className="slidewrapper">
              <img src={arr[slideNmber]} alt="" />
            </div>
            <BsFillArrowRightCircleFill
              onClick={() => handlechange(1)}
              className="arrow"
            />
          </div>
        )} */}
        <div className="hotelwrapper">
          <button className="Booknow" onClick={handleredirect}>
            Reserve or Book Now!
          </button>
          <div className="hotelTitle">{data.heading1}</div>
          <div className="hoteladdress">
            <span>
              <IoLocationSharp />
            </span>
            <p>{data.location}</p>
          </div>

          <span className="hoteldistance">
            Excllent location - 500m from center
          </span>
          <span className="hotelPriceHighlight">
            Book stay over Rs{data.price2} at this and get a free airport taxi
          </span>
          <div className="hotelImages">
            {arr.length > 1 &&
              arr.map((image, i) => (
                <div className="hotelimgwrapper">
                  <img src={image} alt="" onClick={() => handleopen(i)} />
                </div>
              ))}
          </div>
          <div className="hoterdetails">
            <div className="hoteldetialtext">
              <h1 className="hoteltitle1">stay in heart of {data.city}</h1>
              <p className="hoteldesc">
                Located a 5-minute walk from St. Florian's Gate in Krakow, Tower
                Street Apartments has accommodations with air conditioning and
                free WiFi. The units come with hardwood floors and feature a
                fully equipped kitchenette with a microwave, a flat-screen TV,
                and a private bathroom with shower and a hairdryer. A fridge is
                also offered, as well as an electric tea pot and a coffee
                machine. Popular points of interest near the apartment include
                Cloth Hall, Main Market Square and Town Hall Tower. The nearest
                airport is John Paul II International Kraków–Balice, 16.1 km
                from Tower Street Apartments, and the property offers a paid
                airport shuttle service.
              </p>
            </div>
            <div className="hoteldetailprice">
              <h1>perfect for a 9-night stay!</h1>
              <span>
                Located in the real heart of Krakow, this property has an
                excellent location score of 9.8!
              </span>
              <h2>
                <b>{data.price1}</b> (9 nights)
              </h2>
              <button className="booknow" onClick={handleredirect}>
                Reserve or Book Now!
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hotel;
