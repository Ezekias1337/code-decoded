// Library Imports
import { Link } from "@tanstack/react-router";

export const FooterLink = ({
  linkText,
  url,
  openInNewTab,
}: {
  linkText: string;
  url: string;
  openInNewTab: boolean;
}) => {
  return (
    <Link to={url} className="full-flex" target={openInNewTab ? "_blank" : ""}>
      <div className="footer-navigation-link-wrapper">
        <span className="footer-navigation-link">{linkText}</span>
        <div className="footer-navigation-underline"></div>
      </div>
    </Link>
  );
};
