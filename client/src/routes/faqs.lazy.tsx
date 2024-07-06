// Library Imports
import { createLazyFileRoute } from "@tanstack/react-router";
// Components
import { PageHeader } from "../components/general-page-layout/page-header/PageHeader";
import Accordion, {
  AccordionItemStrings,
} from "../components/accordion/Accordion";
// CSS
import "../css/page-specific/frequently-asked-questions.scss";

const accordionItems: AccordionItemStrings[] = [
  {
    header: "1. What services do you offer?",
    body: (
      <p>
        We offer a range of services including web design and development,
        mobile app development, digital marketing, search engine optimization
        (SEO), content creation, and custom logo design. Whether you need a
        simple digital business card or a complex dynamic website, we have the
        expertise to help you succeed online.
      </p>
    ),
  },
  {
    header: "2. How long does it take to build a website or app?",
    body: (
      <p>
        The timeline for building a website or app depends on the complexity and
        specific requirements of the project. A simple static website can take
        as little as two weeks, while a more complex dynamic website with custom
        features may take several months. We’ll provide a detailed timeline
        after discussing your project in depth.
      </p>
    ),
  },
  {
    header: "3. What is the cost of building a website or app?",
    body: (
      <p>
        The cost varies based on the scope of the project, including design
        complexity, number of pages, functionality, and any additional services
        like SEO or content creation. We offer different service tiers to fit
        various budgets. Contact us for a personalized quote.
      </p>
    ),
  },
  {
    header: "4. Will my website be mobile-friendly?",
    body: (
      <p>
        Absolutely. All our websites are designed to be fully responsive,
        ensuring they look great and function well on all devices, including
        desktops, tablets, and smartphones.
      </p>
    ),
  },
  {
    header: "5. Can you help with website maintenance and updates?",
    body: (
      <p>
        Yes, we offer ongoing maintenance and support packages to keep your
        website updated, secure, and running smoothly. This includes regular
        updates, backups, security checks, and content changes as needed.
      </p>
    ),
  },
  {
    header: "6. Do you provide web hosting services?",
    body: (
      <p>
        While we do not directly provide web hosting services, we can recommend
        reliable hosting providers and assist with the setup process. We ensure
        your website is hosted on a platform that meets your performance and
        security needs.
      </p>
    ),
  },
  {
    header: "7. How do I get started with my project?",
    body: (
      <p>
        Getting started is easy! Simply click the "Get Started" button on our
        website and fill out the contact form. We’ll get in touch with you to
        discuss your project requirements and take the first steps toward
        creating your new website or app.
      </p>
    ),
  },
  {
    header: "8. Can I update the website content myself once it's live?",
    body: (
      <p>
        Yes, if your website is built on a content management system (CMS) like
        WordPress, we’ll provide training and support so you can easily update
        your content, images, and other elements without needing technical
        skills.
      </p>
    ),
  },
  {
    header: "9. What if I need help after my website is live?",
    body: (
      <p>
        We’re here to support you even after your website goes live. Our team
        offers ongoing support and maintenance services to help with any issues,
        updates, or improvements you may need.
      </p>
    ),
  },
  {
    header: "10. Do you offer custom development for unique requirements?",
    body: (
      <p>
        Yes, we specialize in custom development to meet specific business
        needs. Whether it’s a custom feature, integration with third-party
        services, or a unique design element, our team can create tailored
        solutions to fit your requirements.
      </p>
    ),
  },
];

const FrequentlyAskedQuestions = () => (
  <div className="frequently-asked-questions">
    <PageHeader title="Frequently Asked Questions" />

    <div className="accordion-wrapper padding-left-and-right padding-bottom-80">
      <Accordion accordionItems={accordionItems} />
    </div>
  </div>
);

export const Route = createLazyFileRoute("/faqs" as never)({
  component: FrequentlyAskedQuestions,
});
