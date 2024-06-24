// Library Imports
import { createLazyFileRoute } from "@tanstack/react-router";

// Components
import Hero from "../components/page-specific/home/Hero";
import OurWork from "../components/page-specific/home/OurWork";

// CSS
import "../css/page-specific/home.scss";

const Index = () => (
  <div className="home-page">
    <Hero />
    <OurWork />
  </div>
);

export const Route = createLazyFileRoute("/" as never)({
  component: Index,
});
