import './FreeGamesDisplay.css';
import Navbar from "./components/navbar";
import FreeGames from "./components/freeGames";

function FreeGamesDisplay() {
  return (
    <div className="FreeGamesDisplay">
      <Navbar  activeLink='/freeGames'/>
      <FreeGames />
    </div>
  );
}

export default FreeGamesDisplay;
