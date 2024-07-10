// Components
import { PageHeader } from "../../general-page-layout/page-header/PageHeader";
import { CustomerReview } from "../../customer-review/customerReview";
//import { Button } from "../../button/Button";

// Types and Interfaces
import { CustomerReviewProps } from "../../customer-review/customerReview";
// Assets
import JuanPicture from "/assets/images/customer-reviews/juan-profile-pic.png";
import NikkiPicture from "/assets/images/customer-reviews/nikki-profile-pic.jpeg";
import IsaiahPicture from "/assets/images/customer-reviews/isaiah-profile-pic.png";

const HomeCustomerReviews = () => {
  const customerReviews: CustomerReviewProps[] = [
    {
      authorImage: JuanPicture,
      authorName: "Juan Sanchez",
      rating: 5,
      reviewBody:
        "Working with Code Decoded has been an outstanding experience. As the owner of Olive, Sanchez & Associates Law Firm, I understand the importance of a strong online presence. The team at Code Decoded transformed our outdated website into a modern, user-friendly platform that truly represents our firm's values and professionalism. He even added a language toggle for my clients who only speak Spanish!",
    },
    {
      authorImage: NikkiPicture,
      authorName: "Nikki Graffam",
      rating: 5,
      reviewBody:
        "Choosing Code Decoded for our website overhaul was one of the best decisions we made at Ptax Resources LLC. As a property tax company, our online presence is crucial for reaching potential clients and providing them with vital information. Code Decoded exceeded our expectations by delivering a website that is not only visually appealing but also highly functional and user-friendly.",
    },
    {
      authorImage: IsaiahPicture,
      authorName: "Isaiah Wilkinson",
      rating: 5,
      reviewBody:
        "As the CEO of Weblords LLC, a web agency that prides itself on delivering top-notch digital solutions, I was thoroughly impressed with the work Code Decoded did for us. Despite being in the same industry, they brought fresh perspectives and innovative ideas that significantly enhanced our online presence.",
    },
  ];

  return (
    <section className="home-customer-reviews padding-left-and-right padding-top-40 padding-bottom-80">
      <PageHeader title="Customer Reviews" />

      <div className="customer-reviews-container gap-20">
        {customerReviews.map((customerReview) => (
          <CustomerReview
            key={customerReview.authorName}
            authorImage={customerReview.authorImage}
            authorName={customerReview.authorName}
            rating={customerReview.rating}
            reviewBody={customerReview.reviewBody}
          />
        ))}
      </div>
    </section>
  );
};

export default HomeCustomerReviews;
