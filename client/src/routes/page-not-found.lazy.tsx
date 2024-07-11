import { Helmet, HelmetProvider } from "react-helmet-async";
// Components
import { PageHeader } from "../components/general-page-layout/page-header/PageHeader";
import { Button } from "../components/button/Button";
// CSS
import "../css/page-specific/page-not-found.scss";

const PageNotFound = () => (
  <div className="page-not-found padding-left-and-right">
    <HelmetProvider>
      <Helmet>
        <title>Code Decoded | Page Not Found</title>
      </Helmet>
    </HelmetProvider>

    <PageHeader title="Page Not Found" />
    <div className="page-not-found-warning padding-bottom-40">
      <h2>This page does not exist.</h2>
    </div>

    <div className="page-not-found-explanation">
      <h4>
        Please check the URL you have entered or click the button below to
        return to the home page.
      </h4>
    </div>

    <div className="button-wrapper">
      <Button
        variant="primary"
        text="Go Back Home"
        url="/"
        buttonSize="large"
      />
    </div>
  </div>
);

export default PageNotFound;
