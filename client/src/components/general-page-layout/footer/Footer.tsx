// Library Imports
import {
  faInstagram,
  faXTwitter,
  faFacebook,
} from "@fortawesome/free-brands-svg-icons";
// Components
import { FooterLink } from "./dependents/FooterLink";
import { FooterSocialIcon } from "./dependents/FooterSocialIcon";
// CSS
import "./footer.scss";
// Assets and Images
import logo from "/assets/images/logo/logo.png";
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

        <div className="social-col display-flex">
          <FooterSocialIcon
            icon={faInstagram}
            url="https://www.instagram.com/codedecodedbiz/"
          />
          <FooterSocialIcon
            icon={faFacebook}
            url="https://www.facebook.com/people/Code-Decoded-Biz/100091360329586/"
          />
          <FooterSocialIcon
            icon={faXTwitter}
            url="https://x.com/CodeDecodedBiz"
          />
        </div>
      </div>
      <div className="footer-navigation display-flex justify-content-space-around">
        <div className="footer-navigation-column">
          <h5 className="footer-navigation-header bold-text full-flex">
            Contact
          </h5>

          <div className="footer-link-column display-flex">
            <FooterLink
              linkText="(682) 325-9573"
              url="tel:+16823259573"
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
