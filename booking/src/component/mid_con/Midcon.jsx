import "./midcon.css";
import { Link } from "react-router-dom";

function Midcon() {
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
    </div>
  );
}

export default Midcon;
