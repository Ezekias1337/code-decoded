// Library Imports
import { BrowserRouter, Route, Routes } from "react-router-dom";
// Consistent Across Pages
import Navbar from "./components/general-page-layout/navbar/Navbar";
import Footer from "./components/general-page-layout/footer/Footer";
// User Pages
import Home from "./pages/Home";
/* import ContactUs from "./pages/ContactUs";
import WebsiteSubmitted from "./pages/WebsiteSubmitted";
import AboutUs from "./pages/AboutUs";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import TermsOfService from "./pages/TermsOfService";
import UnderConstruction from "./pages/UnderConstruction";
import TomarExamen from "./pages/TomarExamen"; */
// Admin Pages
//import Login from "./pages/Login";
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
      <Navbar />
      <main>
        <Routes>
          {/* Client Facing */}
          <Route path="/" element={<Home />} />
          {/* <Route path="/contact-us" element={<ContactUs />} />
          <Route path="/website-submitted" element={<WebsiteSubmitted />} />
          <Route path="/about-us" element={<AboutUs />} />
          <Route path="/tomar-examen" element={<TomarExamen />} /> */}
          {/*<Route path="/practice-areas" element={<PracticeAreas />} />
          <Route path="/client-reviews" element={<ClientReviews />} />
          <Route path="/faqs" element={<FAQ />} />
          <Route
            path="/community-involvement"
            element={<CommunityInteraction />}
          />
          <Route path="/our-results" element={<OurResults />} /> */}
          {/* <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/terms-of-service" element={<TermsOfService />} />
          <Route
            path="/under-construction"
            element={<UnderConstruction />}
          /> */}
          {/* Admin Only */}
          {/* <Route path="/login" element={<Login />} /> */}
          {/*<Route path="/admin-home" element={<AdminHome />} />
          <Route path="/manage-employees" element={<ManageEmployees />} />
          <Route path="/view-new-cases" element={<ViewNewCases />} />
          <Route path="/analytics-dashboard" element={<Home />} />
          <Route path="/view-all-cases" element={<ViewAllCases />} /> */}
          {/* 404 */}
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </main>
      <Footer />
    </BrowserRouter>
  );
};

export default App;
