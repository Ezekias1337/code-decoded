// Library Imports
import { FC } from "react";
import { IconProp } from "@fortawesome/fontawesome-svg-core";
// Redux

// Functions, Helpers, Utils, and Hooks

// Constants

// Interfaces and Types

// Assets

// Components
import CarouselItem from "./dependents/components/CarouselItem";
// CSS
import "./dependents/css/carousel.scss";
// Assets and Images

export interface CarouselItemProps {
  icon: IconProp;
  title: string;
  body: string;
  backgroundImage: string;
  url?: string;
}

interface CarouselProps {
  carouselItems: CarouselItemProps[];
}

const Carousel: FC<CarouselProps> = ({ carouselItems }) => {
  return (
    <div className="carousel full-flex gap-20">
      {carouselItems.map((item, index) => (
        <CarouselItem
          icon={item.icon}
          title={item.title}
          body={item.body}
          backgroundImage={item.backgroundImage}
          key={index}
          url={item?.url}
        />
      ))}
    </div>
  );
};

export default Carousel;
