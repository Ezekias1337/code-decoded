// Components
import NavBar from "../components/general-page-layout/navbar/Navbar";
import Footer from "../components/general-page-layout/footer/Footer";
import { PageHeader } from "../components/general-page-layout/page-header/PageHeader";
import { Button } from "../components/button/Button";
// CSS
import "../css/page-specific/about-us.scss";

const AboutUs = () => {
  return (
    <section className="about-us">
      <NavBar />
      <PageHeader title="About Us" />
      <div className="our-story-wrapper padding-left-and-right padding-top-80 padding-bottom-80">
        <h2 className="full-flex padding-bottom-40">Our Story</h2>
        <p>
          We are a web agency founded by two brothers who share a deep passion
          for technology and a commitment to helping small to medium-sized
          businesses succeed in the digital realm. Our journey began with a
          simple idea: to make high-quality websites accessible to businesses of
          all sizes. As entrepreneurs ourselves, we understand the challenges
          that come with building and maintaining a strong online presence.
        </p>
      </div>
      <div className="our-mission-wrapper padding-left-and-right padding-top-80 padding-bottom-80">
        <h2 className="full-flex padding-bottom-40">Our Mission</h2>
        <p>
          At WebLords, our mission is clear: we want to empower businesses with
          the tools they need to thrive in today's competitive landscape.
          Whether you're a startup looking to establish your brand or an
          established company seeking to enhance your online presence, we're
          here to help.
        </p>
      </div>
      <div className="why-choose-us-wrapper padding-left-and-right padding-top-80 padding-bottom-80">
        <h2 className="full-flex padding-bottom-40">Why Choose Us</h2>
        <p>
          What sets us apart from other web agencies is our personalized
          approach and unwavering commitment to excellence. When you choose
          WebLords, you're not just getting a website – you're getting a
          dedicated team of experts who will work tirelessly to bring your
          vision to life. From the initial consultation to the final launch,
          we'll be with you every step of the way, ensuring that your website
          reflects your unique brand identity and meets your specific goals.
        </p>
      </div>
      <div className="get-in-touch-wrapper padding-left-and-right padding-top-80 padding-bottom-80">
        <h2 className="full-flex padding-bottom-40">Get In Touch</h2>
        <p>
          Ready to take your online presence to the next level? We invite you to
          get in touch with us today to learn more about how WebLords can help
          your business thrive in the digital world. Whether you have questions
          about our services or you're ready to get started on your project,
          we're here to help. Let's work together to turn your vision into
          reality.
        </p>
        <div className="button-wrapper padding-top-40">
          <Button
            variant="neutral-dark"
            buttonSize="large"
            text="Get In Touch"
            url="/contact-us"
          />
        </div>
      </div>

      <Footer />
    </section>
  );
};

export default AboutUs;
