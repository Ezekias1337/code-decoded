// Library Imports
import { createLazyFileRoute } from "@tanstack/react-router";
import { Helmet, HelmetProvider } from "react-helmet-async";
// Components
import { PageHeader } from "../components/general-page-layout/page-header/PageHeader";
import { GeneralLink } from "../components/general-page-layout/link/GeneralLink";
import { Button } from "../components/button/Button";
// CSS
import "../css/page-specific/contact-form-submitted.scss";

const ContactFormSubmitted = () => (
  <div className="contact-form-submitted padding-left-and-right">
    <HelmetProvider>
      <Helmet>
        <title>Code Decoded | Contact Form Submitted</title>
      </Helmet>
    </HelmetProvider>
    
    <PageHeader title="Thanks For Contacting Us" />

    <h2 className="padding-bottom-40">
      We have received your request for a custom website. Our team is excited to
      start working on your project. Here’s what happens next:
    </h2>

    <h3>Review Process</h3>
    <p className="padding-bottom-20">
      Our experts will review the details you provided to ensure we have all the
      necessary information.
    </p>

    <h3>Initial Contact</h3>
    <p className="padding-bottom-20">
      One of our team members will reach out to you within the next 24-48 hours
      to discuss your project in more detail.
    </p>

    <h3>Project Planning</h3>
    <p className="padding-bottom-20">
      We will outline a project plan tailored to your specific needs and provide
      you with an estimated timeline and cost.
    </p>

    <h3>What to Expect</h3>
    <ul className="padding-bottom-20">
      <li>
        <strong>Personalized Service</strong>: Our dedicated team will work
        closely with you to ensure your website meets your vision and goals.
      </li>
      <li>
        <strong>Quality Assurance</strong>: We pride ourselves on delivering
        high-quality websites that are both visually appealing and functionally
        robust.
      </li>
      <li>
        <strong>Ongoing Support</strong>: After your website goes live, we offer
        ongoing support and maintenance to keep your site running smoothly.
      </li>
    </ul>

    <h3>Contact Us</h3>
    <p>
      If you have any questions or need immediate assistance, please don't
      hesitate to contact us at{" "}
      <GeneralLink
        text="codedecodedbiz@gmail.com"
        url="mailto: codedecodedbiz@gmail.com"
        openInNewTab={false}
      />{" "}
      or call us at{" "}
      <GeneralLink
        text="(858) 752-7345"
        url="tel:+18587527345"
        openInNewTab={false}
      />
      .
    </p>

    <p className="padding-bottom-40">
      Thank you for choosing us to build your website. We look forward to
      creating something amazing together!
    </p>

    <div className="button-wrapper padding-bottom-80">
      <Button
        text="Back to Home Page"
        variant="primary"
        url="/"
        buttonSize="large"
      />
    </div>
  </div>
);

export const Route = createLazyFileRoute("/contact-form-submitted" as never)({
  component: ContactFormSubmitted,
});
