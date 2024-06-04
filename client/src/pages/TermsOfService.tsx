// Components
import NavBar from "../components/general-page-layout/navbar/Navbar";
import Footer from "../components/general-page-layout/footer/Footer";
import { PageHeader } from "../components/general-page-layout/page-header/PageHeader";
import { GeneralLink } from "../components/general-page-layout/link/GeneralLink";
// CSS
import "../css/page-specific/terms-of-service.scss";

const TermsOfService = () => {
  return (
    <section className="terms-of-service">
      <NavBar />
      <PageHeader title="Terms Of Service" />
      <div className="terms-of-service-wrapper padding-left-and-right">
        <p>
          These Terms of Service ("Terms") govern your access to and use of the
          WebLord LLC website and any associated services (collectively referred to
          as the "Service"). By accessing or using the Service, you agree to be
          bound by these Terms. If you disagree with any part of the Terms, you
          may not access the Service.
        </p>
        <h2 className="padding-top-40 padding-bottom-20">
          1. Use of the Service
        </h2>
        <p>
          You agree to use the Service only for lawful purposes and in
          accordance with these Terms and any applicable laws and regulations.
          You are solely responsible for your conduct while using the Service.
        </p>
        <h2 className="padding-top-40 padding-bottom-20">
          2. Intellectual Property
        </h2>
        <p>
          The Service and its original content, features, and functionality are
          owned by WebLord LLC and are protected by international copyright,
          trademark, patent, trade secret, and other intellectual property or
          proprietary rights laws.
        </p>
        <h2 className="padding-top-40 padding-bottom-20">3. User Content</h2>
        <p>
          You may be able to contribute content, such as comments or feedback,
          to the Service ("User Content"). By submitting User Content, you grant
          WebLord LLC a worldwide, non-exclusive, royalty-free, perpetual,
          irrevocable, and fully sublicensable license to use, reproduce,
          modify, adapt, publish, translate, create derivative works from,
          distribute, perform, and display such User Content in connection with
          the Service.
        </p>
        <h2 className="padding-top-40 padding-bottom-20">
          4. Limitation of Liability
        </h2>
        <p>
          In no event shall WebLord LLC, nor its directors, employees, partners,
          agents, suppliers, or affiliates, be liable for any indirect,
          incidental, special, consequential, or punitive damages, including
          without limitation, loss of profits, data, use, goodwill, or other
          intangible losses, resulting from (i) your access to or use of or
          inability to access or use the Service; (ii) any conduct or content of
          any third party on the Service; (iii) any content obtained from the
          Service; and (iv) unauthorized access, use, or alteration of your
          transmissions or content, whether based on warranty, contract, tort
          (including negligence), or any other legal theory, whether or not we
          have been informed of the possibility of such damage, and even if a
          remedy set forth herein is found to have failed of its essential
          purpose.
        </p>
        <h2 className="padding-top-40 padding-bottom-20">5. Indemnification</h2>
        <p>
          You agree to indemnify and hold WebLord LLC and its affiliates, officers,
          agents, employees, and partners harmless from and against any claims,
          liabilities, damages, losses, and expenses, including without
          limitation, reasonable legal and accounting fees, arising out of or in
          any way connected with your access to or use of the Service or your
          violation of these Terms.
        </p>
        <h2 className="padding-top-40 padding-bottom-20">6. Governing Law</h2>
        <p>
          These Terms shall be governed and construed in accordance with the
          laws of [Your Jurisdiction], without regard to its conflict of law
          provisions. Our failure to enforce any right or provision of these
          Terms will not be considered a waiver of those rights. If any
          provision of these Terms is held to be invalid or unenforceable by a
          court, the remaining provisions of these Terms will remain in effect.
          These Terms constitute the entire agreement between us regarding our
          Service and supersede and replace any prior agreements we might have
          had between us regarding the Service.
        </p>
        <h2 className="padding-top-40 padding-bottom-20">
          7. Changes to Terms
        </h2>
        <p>
          We reserve the right, at our sole discretion, to modify or replace
          these Terms at any time. If a revision is material, we will provide at
          least 30 days' notice prior to any new terms taking effect. What
          constitutes a material change will be determined at our sole
          discretion.
        </p>
        <h2 className="padding-top-40 padding-bottom-20">8. Contact Us</h2>
        <p>
          If you have any questions about these Terms, please contact us at{" "}
          <GeneralLink
            text="contact@weblords.com"
            url="mailto:contact@weblords.com"
            openInNewTab={false}
          />
          .
        </p>
      </div>

      <Footer />
    </section>
  );
};

export default TermsOfService;
