import './HomeDisplay.css';
import Navbar from "./components/navbar";
import Home from "./components/home";

function HomeDisplay() {
  return (
    <div className="HomeDisplay">
      <Navbar activeLink='/home'/>
      <Home />
    </div>
  );
}

export default HomeDisplay;
