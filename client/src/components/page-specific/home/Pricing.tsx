// Library Imports

// Redux

// Functions, Helpers, Utils, and Hooks

// Constants

// Interfaces and Types

// Assets
import ThumbsUp from "../../../../public/assets/images/icons/card-icons/thumbs-up-solid.svg";
import HandShake from "../../../../public/assets/images/icons/card-icons/handshake-solid.svg";
import Trophy from "../../../../public/assets/images/icons/card-icons/trophy-solid.svg";
// Components
import { PageHeader } from "../../general-page-layout/page-header/PageHeader";
import { Card } from "../../card/Card";
// CSS

// Assets and Images

const Pricing = () => {
  return (
    <section className="pricing padding-top-40 padding-bottom-80">
      <PageHeader title="Pricing" />
      <div className="option-card-wrapper display-flex justify-content-center gap-20">
        <Card
          cardVariant="imageAndBody"
          headerText="Digital Business Card - $500"
          bodyText="Elevate your networking game with a digital business card that leaves a lasting impression and makes it easy for clients and customers to connect with you. /n We host all of your social media links, email address, and phone number all in one place."
          buttonCount={1}
          button1Text="Get Started"
          button1Link="/contact-us"
          button1Variant="primary-dark"
          imageSource={ThumbsUp}
        />
        <Card
          cardVariant="imageAndBody"
          headerText="Static Website or App - $2000"
          bodyText="Create a lasting online impression with a static website, phone application, or desktop application that delivers your message clearly and effectively, providing a strong foundation for your digital presence. /n Best for those who don't need automation or that want to display information that doesn't change."
          buttonCount={0}
          button1Text="Get Started"
          button1Link="/contact-us"
          button1Variant="primary-dark"
          imageSource={HandShake}
        />
        <Card
          cardVariant="imageAndBody"
          headerText="Dyanmic Website or App - $4000+"
          bodyText="Stay ahead of the competition with a dynamic website, phone application, or desktop application that has network connectivity to a server and allows you to satisfy your business needs, engages your audience, and drives growth. /n Best for those who need automation or that want to display information that changes frequently, such as a menu or prices."
          buttonCount={0}
          button1Text="Get Started"
          button1Link="/contact-us"
          button1Variant="primary-dark"
          imageSource={Trophy}
        />
      </div>
    </section>
  );
};

export default Pricing;
