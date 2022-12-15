import Navbar from "../../component/Navbar/Navbar";
import Alllinks from "../../routes/Alllinks";
import Header from "../../component/header/Header";
import Midcon from "../../component/mid_con/Midcon";
import Features from "../../component/features/Features";
import Explore from "../../component/explore/Explore";
import Promotion from "../../component/promotion_postcard/Promotion";
import MailList from "../../component/maillist/MailList";
import Featureproperty from "../../component/featureproperty/Featureproperty";
import "./home.css";

function Home() {
  return (
    <div>
      <Navbar />
      <Header />
      <Midcon />
      <div className="homeContainer">
        <Features />
        <Explore />
        <Promotion />
        <Featureproperty />
        <MailList />
      </div>
    </div>
  );
}

export default Home;
