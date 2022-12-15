import "./Featureproperty.css";

const Featureproperty = () => {
  return (
    <div className="featureproperty">
      <h1 className="fearureproptitle">Homes guests love</h1>
      <div className="featureprop">
        <div className="featurepropertyiteam">
          <div className="fbimg">
            <img src="https://cf.bstatic.com/xdata/images/hotel/square600/123801934.webp?k=27073a18101dd5a4eefc76251f7d476be72e19ed03e98819f2d94667dd60f31a&o=&s=1" />
          </div>
          <span className="fpname">7Seasons Apartments Budapest</span>
          <span className="fpcity">Prague 1, Czech Republic, Prague</span>
          <span className="fpprice">
            Starting from <span className="fbinnerprice">₹ 13,498</span>
          </span>
          <div className="fbrating">
            <button>8.9</button>
            <span className="fbratingtype">Excellent</span>
            <span className="fbreivew">1143 reviews</span>
          </div>
        </div>

        <div className="featurepropertyiteam">
          <div className="fbimg">
            <img src="https://cf.bstatic.com/xdata/images/hotel/square600/87428762.webp?k=9a065fcd92168145d8c8358701662c76793535597b678efc8f6921c8e3c188e6&o=&s=1" />
          </div>
          <span className="fpname">numa I Vita Apartments</span>
          <span className="fpcity">Fortezza da Basso, Italy, Florence</span>
          <span className="fpprice">
            Starting from <span className="fbinnerprice">₹ 9,165</span>
          </span>
          <div className="fbrating">
            <button>8.8</button>
            <span className="fbratingtype">Fabulous</span>
            <span className="fbreivew">243 reviews</span>
          </div>
        </div>

        <div className="featurepropertyiteam">
          <div className="fbimg">
            <img src="https://cf.bstatic.com/xdata/images/hotel/square600/352170812.webp?k=75ffc5f9eb3f3cc394b901714c1544757b05849dbbdf30e4fc8c6df53931c131&o=&s=1" />
          </div>
          <span className="fpname">Aparthotel Stare Miasto</span>
          <span className="fpcity">Old Town, Poland, Kraków</span>
          <span className="fpprice">
            Starting from <span className="fbinnerprice">₹ 7,723</span>
          </span>
          <div className="fbrating">
            <button>9.3</button>
            <span className="fbratingtype">Superb</span>
            <span className="fbreivew">790 reviews</span>
          </div>
        </div>

        <div className="featurepropertyiteam">
          <div className="fbimg">
            <img src="https://cf.bstatic.com/xdata/images/hotel/square600/121399207.webp?k=b0e7119a0ba3354de23997d3698aac0296822fd58a590d83ddbb372f8af887a9&o=&s=1" />
          </div>
          <span className="fpname">Flora Chiado Apartments</span>
          <span className="fpcity">Santa Maria Maior, Portugal, Lisboa</span>
          <span className="fpprice">
            Starting from <span className="fbinnerprice">₹ 29,673</span>
          </span>
          <div className="fbrating">
            <button>8.9</button>
            <span className="fbratingtype">Excellent</span>
            <span className="fbreivew">168 reviews</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Featureproperty;
