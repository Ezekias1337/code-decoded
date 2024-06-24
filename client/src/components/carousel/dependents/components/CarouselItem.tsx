// Library Imports
import { FC } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "@tanstack/react-router";
// Interfaces and Types
import { CarouselItemProps } from "../../Carousel";

const CarouselItem: FC<CarouselItemProps> = ({
  icon,
  title,
  body,
  backgroundImage,
  url,
}) => {
  const content = (
    <div
      className="carousel-item padding-left-20 padding-right-20 padding-top-40 padding-bottom-40 dark-image-overlay-500"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <div className="carousel-content display-flex flex-direction-column">
        <FontAwesomeIcon
          icon={icon}
          className="carousel-item-icon margin-bottom-20"
          size="4x"
        />
        <h3 className="carousel-item-title">{title}</h3>
        <p className="carousel-item-body">{body}</p>
      </div>
    </div>
  );

  return url ? (
    <Link to={url} target="_blank" rel="noopener noreferrer">
      {content}
    </Link>
  ) : (
    content
  );
};

export default CarouselItem;
