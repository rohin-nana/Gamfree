import './AboutDisplay.css';
import Navbar from './components/navbar';
import About from './components/about';

function AboutDisplay() {
  return (
    <div className="HomeDisplay">
      <Navbar activeLink='/about'/>
      <About />
    </div>
  );
}

export default AboutDisplay;
