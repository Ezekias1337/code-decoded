// Library Imports
import { createRootRoute, Outlet } from "@tanstack/react-router";
import { TanStackRouterDevtools } from "@tanstack/router-devtools";

// Consistent Across Pages
import Navbar from "../components/general-page-layout/navbar/Navbar";
import Footer from "../components/general-page-layout/footer/Footer";

export const Route = createRootRoute({
  component: () => (
    <>
      <Navbar variant="glassmorphic"/>
      <Outlet />
      <TanStackRouterDevtools />
      <Footer />
    </>
  ),
});
