// Library Imports
import { faGlobe } from "@fortawesome/free-solid-svg-icons";
import { faAndroid } from "@fortawesome/free-brands-svg-icons";
// Components
import { PageHeader } from "../../general-page-layout/page-header/PageHeader";
import BlobScene from "./BlobScene";
import Carousel from "../../carousel/Carousel";
//import { Button } from "../../button/Button";

// Types and Interfaces
import { CarouselItemProps } from "../../carousel/Carousel";

// Assets
import OsaLogo from "../../../../public/assets/images/our-work/osa-logo.png";
import WeblordsLogo from "../../../../public/assets/images/our-work/weblords-logo.png";
import TimeAmigoLogo from "../../../../public/assets/images/our-work/time-amigo-logo.png";

const OurWork = () => {
  const carouselItems: CarouselItemProps[] = [
    {
      icon: faGlobe,
      title: "OSA Law Firm",
      body: "Website",
      backgroundImage: OsaLogo,
      url: "https://www.osa-law.com",
    },
    {
      icon: faGlobe,
      title: "Web Lords",
      body: "Website",
      backgroundImage: WeblordsLogo,
      url: "https://weblordshub.com/",
    },
    {
      icon: faAndroid,
      title: "Time Amigo",
      body: "Android App",
      backgroundImage: TimeAmigoLogo,
      url: "https://github.com/Ezekias1337/time-amigo",
    },
  ];

  return (
    <section className="our-work padding-left-and-right padding-top-80 padding-bottom-80">
      <div className="background-svg">
        <BlobScene />
      </div>

      <div className="our-work-text-wrapper">
        <PageHeader title="Our Work" />

        <p>
          We take pride in delivering high-quality digital solutions that exceed
          our clients' expectations. Our portfolio showcases a diverse range of
          projects, from sleek corporate websites to engaging mobile apps, each
          crafted with meticulous attention to detail and a focus on user
          experience.
        </p>
        <br />
        <p>Explore some of our standout projects below!</p>
      </div>

      <div className="carousel-wrapper padding-top-40 padding-bottom-80">
        <Carousel carouselItems={carouselItems} />
      </div>
    </section>
  );
};

export default OurWork;
