// Library Imports
import { FC } from "react";
// Components
import { StarRating } from "./dependents/starRating";
// CSS
import "./customerReview.scss";

export interface CustomerReviewProps {
  authorImage: string;
  authorName: string;
  rating: number;
  reviewBody: string;
}

export const CustomerReview: FC<CustomerReviewProps> = ({
  authorImage,
  authorName,
  rating,
  reviewBody,
}) => {
  return (
    <div className="customer-review padding-top-20 padding-bottom-20 padding-left-40 padding-right-40">
      <div className="review-details-container">
        <img src={authorImage} />
        <div className="author-name-and-rating-info-container">
          <span>{authorName}</span>
          <div className="rating-number-and-star-container">
            <b>{rating}</b>
            <StarRating rating={rating} totalStars={5} />
          </div>
        </div>
      </div>
      <div className="review-body-container">
        <p>{reviewBody}</p>
      </div>
    </div>
  );
};
