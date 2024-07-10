// Components
import { PageHeader } from "../../general-page-layout/page-header/PageHeader";
import { Button } from "../../button/Button";

// Assets
import laptopVideo from "/assets/videos/animated-laptop.mp4";

const HowItWorks = () => {
  return (
    <section className="how-it-works position-relative padding-left-and-right padding-top-80 padding-bottom-80">
      <video
        autoPlay
        loop
        muted
        className="how-it-works-video dark-image-overlay-700"
      >
        <source src={laptopVideo} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className="how-it-works-overlay dark-image-overlay-800"></div>

      <PageHeader title="How It Works" />
      <p className="padding-bottom-40">
        Once we connect, we'll discuss your vision for your website, including
        the colors, overall feel, and even designing a new logo if necessary.
        Then, we'll begin constructing your site. When it's ready, we'll present
        a demo for your review, and you'll have two opportunities to request
        adjustments.
      </p>
      <p className="padding-bottom-40">
        After finalizing all the changes, we'll launch your website on your
        domain. The entire process is simple and easy!
      </p>

      <div className="button-wrapper">
        <Button
          text="Get Started"
          variant="primary-dark"
          buttonSize="large"
          url="/contact-us"
        />
      </div>
    </section>
  );
};

export default HowItWorks;
