// Library Imports
import { createRootRoute, Outlet } from "@tanstack/react-router";
import { TanStackRouterDevtools } from "@tanstack/router-devtools";

// Consistent Across Pages
import Navbar from "../components/general-page-layout/navbar/Navbar";
import Footer from "../components/general-page-layout/footer/Footer";
import ScrollToTop from "../components/general-page-layout/ScrollToTop";

// Constants
const IS_DEV = import.meta.env.VITE_IS_DEV;

export const Route = createRootRoute({
  component: () => (
    <>
      <ScrollToTop />
      <Navbar />
      <Outlet />
      {IS_DEV === "TRUE" && <TanStackRouterDevtools />}
      <Footer />
    </>
  ),
});
