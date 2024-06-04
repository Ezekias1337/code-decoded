// Library Imports
import { BrowserRouter, Route, Routes } from "react-router-dom";
// User Pages
import Home from "./pages/Home";
import ContactUs from "./pages/ContactUs";
import WebsiteSubmitted from "./pages/WebsiteSubmitted";
import AboutUs from "./pages/AboutUs";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import TermsOfService from "./pages/TermsOfService";
import UnderConstruction from "./pages/UnderConstruction";
import TomarExamen from "./pages/TomarExamen";
// Admin Pages
import Login from "./pages/Login";
//404 Page
import PageNotFound from "./pages/PageNotFound";
// Link scroll fix
import ScrollToTop from "./components/general-page-layout/ScrollToTop";
// CSS
import "./css/styles.scss";

const App = () => {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        {/* Client Facing */}
        <Route path="/" element={<Home />}></Route>
        <Route path="/contact-us" element={<ContactUs />}></Route>
        <Route path="/website-submitted" element={<WebsiteSubmitted />}></Route>
        <Route path="/about-us" element={<AboutUs />}></Route>
        <Route path="/tomar-examen" element={<TomarExamen />}></Route>

        {/*<Route path="/practice-areas" element={<PracticeAreas />}></Route>
        <Route path="/client-reviews" element={<ClientReviews />}></Route>
        <Route path="/faqs" element={<FAQ />}></Route>
        <Route
          path="/community-involvement"
          element={<CommunityInteraction />}
        ></Route>
        <Route path="/our-results" element={<OurResults />}></Route> */}
        <Route path="/privacy-policy" element={<PrivacyPolicy />}></Route>
        <Route path="/terms-of-service" element={<TermsOfService />}></Route>
        <Route
          path="/under-construction"
          element={<UnderConstruction />}
        ></Route>
        {/* Admin Only */}
        <Route path="/login" element={<Login />}></Route>
        {/*<Route path="/admin-home" element={<AdminHome />}></Route>
        <Route path="/manage-employees" element={<ManageEmployees />}></Route>
        <Route path="/view-new-cases" element={<ViewNewCases />}></Route>
        <Route path="/analytics-dashboard" element={<Home />}></Route>
        <Route path="/view-all-cases" element={<ViewAllCases />}></Route> */}
        {/* 404 */}
        <Route path="*" element={<PageNotFound />}></Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
