// Library Imports
import { createLazyFileRoute } from "@tanstack/react-router";
// Components
import { PageHeader } from "../components/general-page-layout/page-header/PageHeader";
// CSS
import "../css/page-specific/about-us.scss";

const AboutUs = () => (
  <div className="about-us">
    <PageHeader title="About Us" />

    <section className="expertise-and-experience padding-left-and-right">
      <h2 className="page-title">Expertise And Experience</h2>
      <p>
        With four years of experience in web and app development, I bring a
        wealth of knowledge and technical skill to every project. From designing
        sleek, responsive websites to developing complex mobile applications, I
        have the expertise to handle a wide range of digital needs.
      </p>
    </section>
    <section className="personalized-approach padding-left-and-right">
      <h2 className="page-title">Personalized Approach</h2>
      <p>
        Every business is unique, and I believe in tailoring my services to
        match your specific goals and requirements. I take the time to
        understand your vision and work closely with you to ensure that the
        final product aligns perfectly with your brand.
      </p>
    </section>
    <section className="cutting-edge-technology padding-left-and-right">
      <h2 className="page-title">Cutting Edge Technology</h2>
      <p>
        Staying ahead of the curve is crucial in the tech world. I continuously
        update my skills and use the latest tools and technologies to provide
        you with innovative solutions that keep you competitive in the digital
        landscape.
      </p>
    </section>
    <section className="quality-and-attention-to-detail padding-left-and-right">
      <h2 className="page-title">Quality And Attention To Detail</h2>
      <p>
        I am committed to delivering high-quality work that exceeds your
        expectations. From the initial concept to the final launch, I pay
        meticulous attention to detail to ensure that every aspect of your
        website or app is perfect.
      </p>
    </section>
    <section className="our-values padding-left-and-right">
      <h2 className="page-title">Our Values</h2>

      <h3>Innovation</h3>
      <p>
        We strive to bring fresh ideas and creative solutions to every project,
        ensuring that your business stands out in a crowded digital marketplace.
      </p>

      <h3>Integrity</h3>
      <p>
        We believe in honest, transparent communication and building trust with
        our clients. Your satisfaction is our top priority.
      </p>

      <h3>Commitment</h3>
      <p>
        We are dedicated to your success and work tirelessly to deliver results
        that drive growth and enhance your brand.
      </p>
    </section>
  </div>
);

export const Route = createLazyFileRoute("/about-us" as never)({
  component: AboutUs,
});
