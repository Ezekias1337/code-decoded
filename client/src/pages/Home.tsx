// Library Imports
// Functions, Helpers, Utils and Hooks
// Constants
// Components
import NavBar from "../components/general-page-layout/navbar/Navbar";
import Footer from "../components/general-page-layout/footer/Footer";

import Hero from "../components/page-specific/home/Hero";
// CSS
import "../css/page-specific/home.scss";

/* 
  TODO: Add Cookies disclaimer
*/

const Home = () => {
  return (
    <div className="home-page">
      <NavBar />
      <Hero />
      <Footer />
    </div>
  );
};

export default Home;
