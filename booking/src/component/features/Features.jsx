import "./feature.css";

const Features = () => {
  return (
    <div className="features">
      <p className="fearuretitle">Offers</p>
      <p className="featuretitle1">
        Promotions, deals and special offers for you{" "}
      </p>
      <div className="featcon">
        <div className="featuresiteam">
          <div className="featureimg">
            <img
              src="https://q-xx.bstatic.com/xdata/images/xphoto/714x300/173282684.jpeg?k=e31b490d521194e65d41490f43dc704291ca07eaa762b6f36bca714d3211b9a1&o="
              alt=""
            />
          </div>
          <div className="featuretitle">
            <p className="featutename">Save 15% with Late Escape Deals</p>
            <p className="featutequate">
              Tick one more destination off your wishlist
            </p>
            <button className="featurebtn">explore deals</button>
          </div>
        </div>

        <div className="featuresiteams">
          <div className="featursetitle">
            <p>Fly away to your dream holiday</p>
            <p>Get inspired, compare and book flights with more flexibility</p>
            <button className="featurebtn">Search for flights</button>
          </div>
          <div className="featurseimg">
            <img
              src="https://q-xx.bstatic.com/xdata/images/xphoto/500x500/184698944.jpeg?k=7652b7b65903f21464b812d3eca387f9a7e0241b1df0b4ebe981ba95df4b254c&o="
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Features;
