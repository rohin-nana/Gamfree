import { useState } from 'react';
import { navbarItems } from './navbarItems'
import './navbar.css'

const Navbar = ({activeLink}) => {
    const [state, setState] = useState(false);

    const stateChange = () => {
        state ? setState(false) : setState(true);
    }

    function ifActiveLink(link) {
        if(link===activeLink)
            return 'active';
        else
            return 'inactive';
    }

    return (
        <nav className='NavbarItems'>
            <h1 className='navbar-logo'>Gamfree</h1>
            <div className='menu-icon' onClick={stateChange}>
            </div>
            <ul className='nav-menu'>
                {navbarItems.map((item, index) => {
                    return (
                        <li key={index}>
                            <a className={item.cName} href={item.url} id={ifActiveLink(item.url)}>
                            {item.title}
                            </a>
                        </li>
                    )
                })}
            </ul>
        </nav>
    )
}

export default Navbar;