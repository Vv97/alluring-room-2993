import {
  faCopy,
  faInfo,
  faInfoCircle,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";

export default function Protecthotel() {
  return (
    <div
      style={{
        background: "white",
        marginTop: "15px",
        marginBottom: "20px",
        padding: "1% 0",
        borderBottomLeftRadius: "10px",
        borderBottomRightRadius: "10px",
      }}
    >
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: "10px",
          width: "90%",
          margin: "auto",
        }}
      >
        <h3>Protect your hotel</h3>
        <h6
          style={{
            display: "flex",
            alignItems: "center",
            backgroundColor: "green",
            padding: " 0.6% 1%",
            color: "white",
            borderRadius: "10px",
          }}
        >
          Recommended
        </h6>
      </div>
      {/*  */}
      <div
        style={{
          border: "1px solid grey",
          width: "95%",
          margin: "auto",
          padding: "1% 0",
          borderRadius: "10px",
          fontSize: "small",
        }}
      >
        <p style={{ width: "95%", margin: "auto" }}>
          <FontAwesomeIcon icon={faInfoCircle} /> Important : Trip cancellation
          due to government travel advisories, fear of travel, or change of mind
          is not covered. Travel insurance may provide coverage for COVID-19
          diagnosed illness. COVID-19 is a foreseen event and certain other
          coverages will not apply. <Link>Learn more</Link>
        </p>
      </div>
      <div style={{ width: "90%", margin: "auto", fontSize: "small" }}>
        <h4>4 reasons you might need travel protection</h4>
        <ul>
          <li>
            You get delayed for covered reasons and miss a night of your hotel
            stay
          </li>
          <li>
            You get delayed for covered reasons and miss a night of your hotel
            stay
          </li>
          <li>
            You need to extend your trip due to the illness of a travel
            companion
          </li>
          <li>
            You need up to $10,000 for covered medical expenses while on your
            trip
          </li>
        </ul>
        <Link>
          <p style={{ fontSize: "x-small", width: "90%", margin: "auto" }}>
            View insurance details and disclosures{" "}
            <FontAwesomeIcon icon={faCopy} />
          </p>
        </Link>
        <h6 style={{ width: "90%", margin: "auto", marginTop: "20px" }}>
          Select Yes or No to continue booking{" "}
          <span class="required" style={{ color: "red" }}>
            *
          </span>
        </h6>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            width: "90%",
            margin: "auto",
            backgroundColor: "rgba(172, 255, 47, 0.245)",
            padding: "0 1%",
            height: "70px",
            alignItems: "center",
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "10px",
              fontSize: "small",
            }}
          >
            <input type="radio" />
            <p>Yes, I want Hotel Booking Protection Plus for my trip.</p>
          </div>
          <div
            style={{
              lineHeight: "0%",
            }}
          >
            <h3>₹640.00</h3>
            <p
              style={{
                fontSize: "small",
              }}
            >
              Per person
            </p>
          </div>
        </div>
        {/*  */}
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            width: "90%",
            margin: "auto",
            backgroundColor: "#ccccc",
            padding: "0 1%",
            marginTop: "10px",
            marginBottom: "40px",
            height: "70px",
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "10px",
              fontSize: "small",
            }}
          >
            <input type="radio" />
            <p>No, I'm willing to risk my $195.86 trip.</p>
          </div>
        </div>
      </div>
      {/*  */}
      <p
        style={{
          fontStyle: "italic",
          color: "grey",
          fontSize: "small",
          width: "90%",
          margin: "auto",
        }}
      >
        “ Things happened outside of my control which caused the trip to be
        canceled. The Travel Protection was valuable in reducing the losses to
        me when we had to cancel the trip. ” - Mr. Rodman
      </p>
    </div>
  );
}
