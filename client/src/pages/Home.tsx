// Library Imports
// Functions, Helpers, Utils and Hooks
// Constants
// Components
import Hero from "../components/page-specific/home/Hero";
// CSS
import "../css/page-specific/home.scss";

/* 
  TODO: Add Cookies disclaimer
*/

const Home = () => {
  return (
    <div className="home-page">
      <Hero />
    </div>
  );
};

export default Home;
