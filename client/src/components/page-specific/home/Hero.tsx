// Components
import { Button } from "../../button/Button";

const Hero = () => {
  return (
    <section className="hero-container dark-image-overlay">
      <h1 className="full-flex">Bienvenido a La Norma</h1>
      <div className="button-wrapper">
        <Button variant="primary" buttonSize="large" text="Tomar Examen" url="/tomar-examen"/>
      </div>
    </section>
  );
};

export default Hero;
