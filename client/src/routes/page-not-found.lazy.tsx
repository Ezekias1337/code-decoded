// Library Imports
import { createLazyFileRoute } from "@tanstack/react-router";
// Components
import { PageHeader } from "../components/general-page-layout/page-header/PageHeader";
// CSS
import "../css/page-specific/page-not-found.scss";

const PageNotFound = () => (
  <div className="page-not-found">
    <PageHeader title="Page Not Found" />
  </div>
);

export const Route = createLazyFileRoute("/page-not-found" as never)({
  component: PageNotFound,
});