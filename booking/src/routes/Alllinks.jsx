import { Link } from "react-router-dom";

function Alllinks() {
  return (
    <ul style={{ display: "flex", gap: "20px", listStyle: "none" }}>
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/hotel">Hotel</Link>
      </li>
    </ul>
  );
}

export default Alllinks;
