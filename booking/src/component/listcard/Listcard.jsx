import "./listcard.css";

const Listcard = ({ image, text1, city, headig2 }) => {
  return (
    <div className="listCard">
      <div className="listWrapper">
        <div className="listIteam">
          <div className="listImage">
            <img src={image} alt="" />
          </div>

          <div className="listTitle">
            <div className="listdiv1">
              <p className="listdiv1Title">{text1}</p>
              <div className="listLocation">
                <span>
                  {city}
                  {headig2}
                </span>
                <span>Reserve now, pay later</span>
              </div>
              <div className="TravelSustainable">
                <span>
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                    <path d="M21.22 3.37a.75.75 0 0 0-.6-.59c-4.85-.9-10.6.55-13.37 3.36S3.1 14.39 3.88 19.05L2 21a.75.75 0 0 0 0 1 .74.74 0 0 0 .53.22A.71.71 0 0 0 3 22l2-1.9a16.94 16.94 0 0 0 2.76.23c4.09 0 8.19-1.33 10.35-3.52 2.71-2.81 4.07-8.59 3.11-13.44zM17 15.75c-2.11 2.14-6.59 3.36-10.7 3L16.59 8.47a.75.75 0 0 0 0 -1.06.77.77 0 0 0-1.07 0l-10.3 10.3c-.33-3.91.91-8.31 3.1-10.52s7.29-3.63 11.52-3c.67 4.22-.54 9.22-2.84 11.56z"></path>
                  </svg>
                </span>
                <span>Travel Sustainable property</span>
              </div>
              <p className="listhotelservise">
                Located in the Mahipalpur area of New Delhi, Hotel Smart Plaza
                Delhi Airport is a 10-minute drive from Indira Gandhi
                International Airport.
              </p>
            </div>
            <div className="listdiv2">
              <div className="listRating">
                <div className="listreview">
                  <span className="listrat">Excellent</span>
                  <span>5223 reviews</span>
                </div>
                <div className="lRating">4.3/5</div>
              </div>
              <button>Show price</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Listcard;
