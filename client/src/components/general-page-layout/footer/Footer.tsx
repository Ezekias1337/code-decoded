// Library Imports
// Components
import { FooterLink } from "./dependents/FooterLink";
// CSS
import "./footer.scss";
// Assets and Images
import logo from "../../../../public/assets/images/logo/logo.png";
import { Link } from "@tanstack/react-router";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="logo-and-social-row display-flex align-items-center">
        <div className="footer-logo-col">
          <Link to="/">
            <img src={logo} alt="Logo" className="footer-logo" />
          </Link>
        </div>
      </div>
      <div className="footer-navigation display-flex justify-content-space-around">
        <div className="footer-navigation-column">
          <h5 className="footer-navigation-header bold-text full-flex">
            Contact
          </h5>

          <div className="footer-link-column display-flex">
            <FooterLink
              linkText="(858) 752-7345"
              url="tel:+18587527345"
              openInNewTab={false}
            />
            <FooterLink
              linkText="Email"
              url="mailto: codedecodedbiz@gmail.com"
              openInNewTab={false}
            />
          </div>
        </div>
        <div className="footer-navigation-column">
          <h5 className="footer-navigation-header bold-text full-flex">Info</h5>

          <div className="footer-link-column display-flex">
            <FooterLink
              linkText="About Us"
              url="/about-us"
              openInNewTab={false}
            />
            <FooterLink linkText="FAQ" url="/faqs" openInNewTab={false} />
          </div>
        </div>
        <div className="footer-navigation-column">
          <h5 className="footer-navigation-header bold-text full-flex">
            Other
          </h5>

          <div className="footer-link-column display-flex">
            <FooterLink
              linkText="Request Consultation"
              url="/contact-us"
              openInNewTab={false}
            />
            <FooterLink linkText="Login" url="/login" openInNewTab={false} />
          </div>
        </div>
      </div>
      <div className="footer-copywrite-disclaimer-wrapper align-items-center display-flex justify-content-space-between">
        <div className="copywrite-container display-flex">
          <small className="copywrite-disclaimer">
            © 2024 Code Decoded LLC
          </small>
        </div>

        <div className="footer-bottom-navigation-wrapper display-flex justify-content-right">
          {/*  <div>
            <FooterLink linkText="Admin" url="/login" openInNewTab={false} />
          </div> */}
          <div>
            <FooterLink
              linkText="Terms of Service"
              url="/terms-of-service"
              openInNewTab={false}
            />
          </div>
          <div>
            <FooterLink
              linkText="Privacy Policy"
              url="/privacy-policy"
              openInNewTab={false}
            />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
