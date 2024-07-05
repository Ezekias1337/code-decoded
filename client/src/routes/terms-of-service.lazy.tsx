// Library Imports
import { createLazyFileRoute } from "@tanstack/react-router";
// Components
import { PageHeader } from "../components/general-page-layout/page-header/PageHeader";
import { GeneralLink } from "../components/general-page-layout/link/GeneralLink";
// CSS
import "../css/page-specific/terms-of-service.scss";

const TermsOfService = () => (
  <section className="terms-of-service">
    <PageHeader title="Terms Of Service" />
    <div className="terms-of-service-wrapper padding-left-and-right">
      <p>
        Welcome to Code Decoded! These Terms of Service ("Terms") govern your
        use of our website and services. By accessing or using our website, you
        agree to comply with and be bound by these Terms. If you do not agree to
        these Terms, please do not use our website.
      </p>

      <h2 className="padding-top-40 padding-bottom-20">
        1. Acceptance of Terms
      </h2>
      <p>
        By accessing and using the services provided by Code Decoded, you accept
        and agree to be bound by these Terms, our Privacy Policy, and any other
        policies or guidelines posted on our website.
      </p>

      <h2 className="padding-top-40 padding-bottom-20">2. Services</h2>
      <p>
        Code Decoded provides web design and development services, mobile app
        development, digital marketing, SEO, content creation, and custom logo
        design. The specific services to be provided will be outlined in a
        separate agreement or project proposal.
      </p>

      <h2 className="padding-top-40 padding-bottom-20">
        3. User Responsibilities
      </h2>
      <p>
        As a user of our services, you agree to:
        <ul>
          <li>Provide accurate and complete information when requested.</li>
          <li>
            Use our services in compliance with all applicable laws and
            regulations.
          </li>
          <li>
            Not engage in any activity that interferes with or disrupts our
            services.
          </li>
        </ul>
      </p>

      <h2 className="padding-top-40 padding-bottom-20">
        4. Intellectual Property
      </h2>
      <p>
        All content, including but not limited to text, graphics, logos, images,
        and software, provided on this website is the property of Code Decoded
        or its content suppliers and is protected by intellectual property laws.
        You may not reproduce, distribute, or create derivative works from any
        content without our express written consent.
      </p>

      <h2 className="padding-top-40 padding-bottom-20">5. Payment Terms</h2>
      <p>
        The terms of payment for services provided by Code Decoded will be
        outlined in the separate agreement or project proposal. Unless otherwise
        agreed, payments are due within 30 days of invoice receipt. Late
        payments may incur additional fees.
      </p>

      <h2 className="padding-top-40 padding-bottom-20">6. Termination</h2>
      <p>
        Code Decoded reserves the right to terminate or suspend access to our
        services at any time, without prior notice, for conduct that we believe
        violates these Terms or is harmful to other users of our services, us,
        or third parties, or for any other reason at our sole discretion.
      </p>

      <h2 className="padding-top-40 padding-bottom-20">
        7. Limitation of Liability
      </h2>
      <p>
        To the fullest extent permitted by law, Code Decoded shall not be liable
        for any indirect, incidental, special, consequential, or punitive
        damages, or any loss of profits or revenues, whether incurred directly
        or indirectly, or any loss of data, use, goodwill, or other intangible
        losses, resulting from:
        <ul>
          <li>Your use or inability to use our services.</li>
          <li>
            Any unauthorized access to or use of our servers and/or any personal
            information stored therein.
          </li>
          <li>
            Any bugs, viruses, or the like that may be transmitted to or through
            our services by any third party.
          </li>
        </ul>
      </p>

      <h2 className="padding-top-40 padding-bottom-20">
        8. Disclaimer of Warranties
      </h2>
      <p>
        Our services are provided "as is" and "as available" without any
        warranties of any kind, whether express or implied, including, but not
        limited to, implied warranties of merchantability, fitness for a
        particular purpose, or non-infringement. Code Decoded does not warrant
        that the services will be uninterrupted, error-free, or completely
        secure.
      </p>

      <h2 className="padding-top-40 padding-bottom-20">
        9. Changes to the Terms
      </h2>
      <p>
        Code Decoded reserves the right to modify these Terms at any time. Any
        changes will be effective immediately upon posting on our website. Your
        continued use of our services following the posting of revised Terms
        means that you accept and agree to the changes.
      </p>

      <h2 className="padding-top-40 padding-bottom-20">10. Governing Law</h2>
      <p>
        These Terms shall be governed by and construed in accordance with the
        laws of California, without regard to its conflict of law principles.
        Any legal action or proceeding arising under these Terms will be brought
        exclusively in the federal or state courts located in California.
      </p>

      <h2 className="padding-top-40 padding-bottom-20">11. Contact Us:</h2>
      <p>
        If you have any questions, concerns, or feedback regarding this Privacy
        Policy or our data practices, please contact us at{" "}
        <GeneralLink
          text="codedecodedbiz@gmail.com"
          url="mailto:codedecodedbiz@gmail.com"
          openInNewTab={false}
        />
        .
      </p>
      <p>
        By using our website and/or services, you acknowledge that you have
        read, understood, and agree to be bound by these Terms of Service.
      </p>
    </div>
  </section>
);

export const Route = createLazyFileRoute("/terms-of-service" as never)({
  component: TermsOfService,
});
