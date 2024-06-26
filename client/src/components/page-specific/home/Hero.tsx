// Components
import { Button } from "../../button/Button";

// Assets and Images
import heroVideo from "../../../../public/assets/videos/animated-tech-globe.mp4";

const Hero = () => {
  return (
    <section className="hero">
      <video autoPlay loop muted className="hero-video">
        <source src={heroVideo} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className="hero-overlay dark-image-overlay-700"></div>

      <div className="hero-content padding-left-and-right">
        <h1 className="bold-text">Modernize Your Business</h1>
        <p className="padding-top-40">
          Transform your digital presence with our cutting-edge web solutions.
          At Code Decoded, we specialize in creating sleek, eye-catching
          websites and phone apps that drive growth and captivate your audience.{" "}
        </p>

        <div className="button-wrapper justify-content-left padding-top-40 padding-bottom-80">
          <Button
            text="Schedule a Consultation"
            variant="primary"
            buttonSize="medium"
          />
          <Button
            text="Get Started"
            variant="primary-dark"
            buttonSize="medium"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
