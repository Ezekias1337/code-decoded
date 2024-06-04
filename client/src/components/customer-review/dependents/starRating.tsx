// Library Imports
import { FC } from "react";
// Components
import { StarIcon } from "./starIcon";

interface StarRatingProps {
  rating: number; // Rating from 0 to 5, including decimal values like 3.5
  totalStars: number; // Number of total stars (default to 5)
}

export const StarRating: FC<StarRatingProps> = ({
  rating /* , totalStars */,
}) => {
  const filledStarColor = "#e3d552";
  const emptyStarColor = "#b4b4b4";
  const maxRating = 5;
  const filledStars = Math.min(Math.max(rating, 0), maxRating);
  const remainingStars = maxRating - filledStars;
  const fillPercentage = (filledStars - Math.floor(filledStars)) * 100;

  return (
    <div className="star-rating">
      {Array.from({ length: Math.floor(filledStars) }, (_, index) => (
        <StarIcon
          key={index}
          className="star-icon filled"
          fill={filledStarColor}
          fillPercentage={100}
        />
      ))}

      {fillPercentage > 0 && fillPercentage < 100 && (
        <StarIcon
          className="star-icon half-filled"
          fill={filledStarColor}
          fillPercentage={fillPercentage}
        />
      )}

      {Array.from({ length: remainingStars }, (_, index) => (
        <StarIcon
          key={index}
          className="star-icon"
          fill={emptyStarColor}
          fillPercentage={100}
        />
      ))}
    </div>
  );
};
