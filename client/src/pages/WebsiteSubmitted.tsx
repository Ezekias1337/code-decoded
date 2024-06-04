// Library Imports
import { faHouse } from "@fortawesome/free-solid-svg-icons";
// Components
import NavBar from "../components/general-page-layout/navbar/Navbar";
import Footer from "../components/general-page-layout/footer/Footer";
import { Button } from "../components/button/Button";
// CSS
import "../css/page-specific/website-submitted.scss";

const WebsiteSubmitted = () => {
  return (
    <section className="website-submitted">
      <NavBar />
      <div className="website-submitted-wrapper padding-left-and-right">
        <h1 className="website-submitted-header full-flex">
          Website Idea Submitted!
        </h1>

        <h3 className="website-submitted-explanation full-flex">
          Our team will review the details of your idea and get back to you
          briefly. Let's modernize your business!
        </h3>

        <div className="button-wrapper justify-content-center">
          <Button
            variant="primary"
            buttonSize="large"
            text="Home"
            icon={faHouse}
            rightIcon={true}
            url="/"
          />
        </div>
      </div>
      <Footer />
    </section>
  );
};

export default WebsiteSubmitted;
