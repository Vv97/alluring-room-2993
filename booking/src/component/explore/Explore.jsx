import "./explore.css";

const Explore = () => {
  return (
    <div className="explore">
      <p className="eploretitle">Explore India</p>
      <p className="eploretitle1">
        These popular destinations have a lot to offer
      </p>
      <div className="explorecard">
        <div className="exploreiteam">
          <img
            src="https://cf.bstatic.com/xdata/images/region/square250/49646.webp?k=b7f38878b9164ee38e0b99c4d4646dbea76b7bf4add8464b1aa75e4c9d0efc6e&o="
            alt=""
          />
          <div className="exploretitle">
            <p className="exploreiteamtitke">Goa</p>
            <p className="exploreprop">5,247 properties</p>
          </div>
        </div>

        <div className="exploreiteam">
          <img
            src="https://cf.bstatic.com/xdata/images/city/square250/684765.webp?k=3f7d20034c13ac7686520ac1ccf1621337a1e59860abfd9cbd96f8d66b4fc138&o="
            alt=""
          />
          <div className="exploretitle">
            <p className="exploreiteamtitke">New Delhi</p>
            <p className="exploreprop">2,911 properties</p>
          </div>
        </div>

        <div className="exploreiteam">
          <img
            src="https://cf.bstatic.com/xdata/images/city/square250/971346.webp?k=40eeb583a755f2835f4dcb6900cdeba2a46dc9d50e64f2aa04206f5f6fce5671&o="
            alt=""
          />
          <div className="exploretitle">
            <p className="exploreiteamtitke">Mumbai</p>
            <p className="exploreprop">1,650 properties</p>
          </div>
        </div>

        <div className="exploreiteam">
          <img
            src="https://cf.bstatic.com/xdata/images/city/square250/684657.webp?k=66dc5035b43e9bb86b756e381e4fec2558064af4a63a8af17836725a854c03ee&o="
            alt=""
          />
          <div className="exploretitle">
            <p className="exploreiteamtitke">Jaipur</p>
            <p className="exploreprop">1,558 properties</p>
          </div>
        </div>

        <div className="exploreiteam">
          <img
            src="https://cf.bstatic.com/xdata/images/city/square250/684534.webp?k=d1fe86c22f2433f4e2dda14ddcbe80feb024b0fb30305e5684a1241fba5d4cff&o="
            alt=""
          />
          <div className="exploretitle">
            <p className="exploreiteamtitke">Bangalore</p>
            <p className="exploreprop">2,040 properties</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Explore;
