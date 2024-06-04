// Library Imports
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IconProp } from "@fortawesome/fontawesome-svg-core";
import { Link, To } from "react-router-dom";

export const FooterSocialIcon = ({
  icon,
  url,
}: {
  icon: IconProp;
  url: To;
}) => {
  return (
    <div className="footer-social-wrapper full-flex mx-2">
      <Link to={url} target="_blank" className="full-flex">
        <FontAwesomeIcon icon={icon} />
      </Link>
    </div>
  );
};
