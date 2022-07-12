import { NavLink } from 'react-router-dom';
import { FaHamburger } from 'react-icons/fa';

import './styles/Header.css';

const Header = (props) => {
    return (
        <header className='App__header'>
            <h3 className='App__header-logo'>
                CHI-Blogger
            </h3>
            <nav>
                <input type='checkbox' id='hamburger' />
                <label htmlFor='hamburger' className='hamburger'>
                    <span className='menu'>Menu</span><FaHamburger />
                </label>
                <ul className='App__header-navbar'>
                    <li>
                        <NavLink to='/'>
                            Home
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to='/learn'>
                            Learn
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to='/about'>
                            About
                        </NavLink>
                    </li>
                    <li className='auth-btns'>
                        <button className='login-btn'>
                            Login
                        </button>
                        <button className='signup-btn'>
                            Sign up
                        </button>
                    </li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;