// Library Imports
import { createLazyFileRoute } from "@tanstack/react-router";

// Components
import Hero from "../components/page-specific/home/Hero";
import OurWork from "../components/page-specific/home/OurWork";
import HomeCustomerReviews from "../components/page-specific/home/HomeCustomerReviews";

// CSS
import "../css/page-specific/home.scss";

const Index = () => (
  <div className="home-page">
    <Hero />
    <OurWork />
    <HomeCustomerReviews />
  </div>
);

export const Route = createLazyFileRoute("/" as never)({
  component: Index,
});
