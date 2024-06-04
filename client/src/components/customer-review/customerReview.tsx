// Library Imports
import { FC } from "react";
// Components
import { StarRating } from "./dependents/starRating";
// CSS
import "./customerReview.scss";

export interface CustomerReviewProps {
  language: string;
  authorImage: string;
  authorName: string;
  rating: number;
  reviewBody: {
    english: string;
    spanish: string;
  };
}

export const CustomerReview: FC<CustomerReviewProps> = ({
  language,
  authorImage,
  authorName,
  rating,
  reviewBody,
}) => {
  return (
    <div className="customer-review">
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
        <p>
          {language === "English" ? reviewBody.english : reviewBody.spanish}
        </p>
      </div>
    </div>
  );
};
