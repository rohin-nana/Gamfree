import './ContactDisplay.css';
import Navbar from './components/navbar';
import Contact from './components/contact';

function ContactDisplay() {
  return (
    <div className="HomeDisplay">
      <Navbar activeLink='/contact'/>
      <Contact />
    </div>
  );
}

export default ContactDisplay;
