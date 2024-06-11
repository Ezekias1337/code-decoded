// Library Imports
import { FC } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IconProp } from "@fortawesome/fontawesome-svg-core";
// Functions, Helpers, and Utils
// Interfaces and Types
import { CarouselItemProps } from "../../Carousel";

const CarouselItem: FC<CarouselItemProps> = ({
  icon,
  title,
  body,
  backgroundImage,
}) => {
  return <div className="carousel-item"></div>;
};

export default CarouselItem;
