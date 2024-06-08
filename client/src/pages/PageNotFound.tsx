// Library Imports
import { faHouse } from "@fortawesome/free-solid-svg-icons";
// Components
import { Button } from "../components/button/Button";
// CSS
import "../css/page-specific/page-not-found.scss";

const PageNotFound = () => {
  return (
    <section className="page-not-found">
      <div className="page-not-found-wrapper padding-left-and-right">
        <h1 className="page-not-found-warning full-flex">Woops!</h1>

        <h3 className="page-not-found-explanation full-flex">
          The page you are looking for does not exist. Click the button below to
          return to the home page.
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
    </section>
  );
};

export default PageNotFound;
