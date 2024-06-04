// Components
import { PageHeader } from "../../general-page-layout/page-header/PageHeader";
import { Button } from "../../button/Button";

const BusinessIntroduction = () => {
  return (
    <section className="business-introduction padding-left-and-right padding-top-40 padding-bottom-80">
      <div className="business-introduction-text-wrapper">
        <PageHeader title="What We Provide" />

        <p>
          Our websites are fully optimized for mobile devices, providing a
          seamless browsing experience on any screen size. Plus, our
          future-proof solutions ensure your website stays ahead of the curve in
          the ever-changing digital landscape.
        </p>
        <br />
        <p>
          Let's modernize and grow your business together. Contact us today!
        </p>
      </div>

      <div className="button-wrapper padding-top-40">
        <Button
          variant="primary"
          buttonSize="large"
          text="Get Started"
          additionalClassNames="animated-button"
          url="/contact-us"
        />
      </div>
    </section>
  );
};

export default BusinessIntroduction;
