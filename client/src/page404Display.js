import './page404Display.css';
import Navbar from "./components/navbar";

function Page404() {
  return (
    <div className="HomeDisplay">
      <Navbar activeLink='/home'/>
      <label className='page404Header'>404 Page Not Found</label>
    </div>
  );
}

export default Page404;
