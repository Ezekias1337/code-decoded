// Components
import NavBar from "../components/general-page-layout/navbar/Navbar";
import Footer from "../components/general-page-layout/footer/Footer";
import { PageHeader } from "../components/general-page-layout/page-header/PageHeader";
import { GeneralLink } from "../components/general-page-layout/link/GeneralLink";
// CSS
import "../css/page-specific/privacy-policy.scss";

const PrivacyPolicy = () => {
  return (
    <section className="privacy-policy">
      <NavBar />
      <PageHeader title="Privacy Policy" />
      <div className="privacy-policy-wrapper padding-left-and-right">
        <p>
          At WebLord LLC, we value your privacy and are committed to protecting
          your personal information. This Privacy Policy outlines how we
          collect, use, and safeguard the information you provide to us through
          our website and any associated services.
        </p>

        <h2 className="padding-top-40 padding-bottom-20">
          1. Information We Collect:
        </h2>
        <p>
          <strong>a. Personal Information:</strong> We may collect personal
          information such as your name, email address, phone number, and postal
          address when you voluntarily provide it to us through forms on our
          website.
        </p>
        <p>
          <strong>b. Device and Browser Information:</strong> We may collect
          technical information about your device and browser, including but not
          limited to your IP address, browser type, operating system, and unique
          device identifiers, to enhance your browsing experience and improve
          our services.
        </p>
        <p>
          <strong>c. Cookies:</strong> We use cookies to gather information
          about your interactions with our website, including pages visited,
          time spent on each page, and other browsing behaviors. These cookies
          help us personalize your experience, analyze trends, and optimize our
          website's functionality.
        </p>

        <h2 className="padding-top-40 padding-bottom-20">
          2. How We Use Your Information:
        </h2>
        <p>
          <strong>a. Improving User Experience:</strong> We use the information
          collected to provide, maintain, and improve our website, services, and
          offerings, ensuring a seamless and personalized user experience.
        </p>
        <p>
          <strong>b. Communication:</strong> We may use your contact information
          to respond to inquiries, provide customer support, send updates about
          our services, and communicate important announcements.
        </p>
        <p>
          <strong>c. Analytics:</strong> We analyze website usage data to
          understand user behavior, preferences, and trends, which helps us
          enhance our services, tailor content, and make informed business
          decisions.
        </p>

        <h2 className="padding-top-40 padding-bottom-20">
          3. Information Sharing and Disclosure:
        </h2>
        <p>
          <strong>a. Third-Party Service Providers:</strong> We may share your
          information with trusted third-party service providers who assist us
          in operating our website, conducting business activities, or providing
          services to you. These third parties are contractually obligated to
          maintain the confidentiality and security of your information.
        </p>
        <p>
          <strong>b. Legal Compliance:</strong> We may disclose your information
          when required by law, to respond to legal process, or to protect our
          rights, property, or safety, or that of others.
        </p>

        <h2 className="padding-top-40 padding-bottom-20">
          4. Your Choices and Controls:
        </h2>
        <p>
          <strong>a. Cookie Preferences:</strong> You can adjust your browser
          settings to refuse or delete cookies. However, please note that
          certain features of our website may not function properly without
          cookies enabled.
        </p>
        <p>
          <strong>b. Opt-Out:</strong> You have the right to opt out of
          receiving promotional communications from us. You can unsubscribe from
          our mailing list by following the instructions included in our emails
          or by contacting us directly.
        </p>

        <h2 className="padding-top-40 padding-bottom-20">5. Data Security:</h2>
        <p>
          We take appropriate measures to safeguard your personal information
          against unauthorized access, disclosure, alteration, or destruction.
          However, no method of transmission over the internet or electronic
          storage is entirely secure, and we cannot guarantee absolute security.
        </p>

        <h2 className="padding-top-40 padding-bottom-20">
          6. Updates to this Privacy Policy:
        </h2>
        <p>
          We reserve the right to update, modify, or revise this Privacy Policy
          at any time. Any changes will be reflected on this page, and we
          encourage you to review this policy periodically for updates.
        </p>

        <h2 className="padding-top-40 padding-bottom-20">7. Contact Us:</h2>
        <p>
          If you have any questions, concerns, or feedback regarding this
          Privacy Policy or our data practices, please contact us at{" "}
          <GeneralLink
            text="contact@weblords.com"
            url="mailto:contact@weblords.com"
            openInNewTab={false}
          />
          .
        </p>
        <p>
          By using our website, you consent to the collection, use, and
          disclosure of your information as described in this Privacy Policy.
        </p>
      </div>
      <Footer />
    </section>
  );
};

export default PrivacyPolicy;
