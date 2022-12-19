import "./maillist.css";

const MailList = ({ type }) => {
  return (
    <div className={type === "List" ? "mail mt0" : "mt50 mail"}>
      <h1 className="mailTitle">Save time, save money!</h1>
      <span className="mailDesc">
        Sign up and we'll send the best deals to you
      </span>
      <div className="mailInputContainer">
        <input type="text" placeholder="Your Email" />
        <button>Subscribe</button>
      </div>
    </div>
  );
};

export default MailList;
