// Components
import { PageHeader } from "../../general-page-layout/page-header/PageHeader";
import { Button } from "../../button/Button";

const GetStarted = () => {
  return (
    <section className="get-started dark-image-overlay-700 padding-left-and-right padding-top-40 padding-bottom-80">
      <div className="get-started-dark-overlay dark-image-overlay-700"></div>
      <div className="get-started-text-wrapper">
        <PageHeader title="Get Started" />

        <p className="padding-bottom-40">
          Ready to elevate your online presence? Our team is here to bring your
          vision to life. Whether you need a sleek digital business card, a
          stunning website or a brilliant app, we’ve got you covered.
        </p>
        <br />
        <p>Let’s Make It Happen!</p>
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

export default GetStarted;
