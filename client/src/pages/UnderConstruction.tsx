// Library Imports
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHouse, faDigging } from "@fortawesome/free-solid-svg-icons";
// Components
import NavBar from "../components/general-page-layout/navbar/Navbar";
import Footer from "../components/general-page-layout/footer/Footer";
import { Button } from "../components/button/Button";
// CSS
import "../css/page-specific/under-construction.scss";

const UnderConstruction = () => {
  return (
    <section className="under-construction">
      <NavBar />
      <div className="under-construction-wrapper padding-left-and-right">
        <div className="under-construction-icon-wrapper full-flex">
          <FontAwesomeIcon
            icon={faDigging}
            className="under-construction-icon"
            size="10x"
          />
        </div>

        <h3 className="under-construction-explanation full-flex">
          This page is currently under construction. Click the button below to
          return home.
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

export default UnderConstruction;
