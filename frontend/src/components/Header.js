import { useState, useContext } from 'react';
import { NavLink } from 'react-router-dom';
import { FaHamburger } from 'react-icons/fa';
import axios from 'axios';

import './styles/Header.css';
import AuthForm from './AuthForm';
import { UserContext } from '../contexts/userContext';

const Header = () => {
    const { userData, userDispatcher } = useContext(UserContext);
    const API_URL = process.env.REACT_APP_API_URL;

    const [state, setState] = useState({
        ready: false,
        signup: true,
        logoutMessage: ''
    });

    const generateForm = (signup) => {
        setState({
            ready: !state.ready,
            signup: signup
        });
    };

    const logUserOut = () => {
        axios.get(`${API_URL}/logout`, {
            withCredentials: true,
        }).then(res => {
            userDispatcher({ type: 'REMOVE_USER' });
            setState(prev => ({
                ...prev,
                logoutMessage: res.data.message
            }));
        }).catch(err => {
            console.log(err);
        });
    };

    return (
        <header className='App__header'>
            {state.logoutMessage && <div className='logout-msg'>
                {state.logoutMessage}
                {setTimeout(() => setState(prev => ({
                    ...prev,
                    logoutMessage: ''
                })), 3000) && ''}
            </div>}
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
                    {Object.keys(userData).length === 0 ? <li className='auth-btns'>
                        <button
                            className='login-btn'
                            onClick={() => generateForm(false)}
                        >
                            Login
                        </button>
                        <button
                            className='signup-btn'
                            onClick={() => generateForm(true)}
                        >
                            Sign up
                        </button>
                    </li> :
                        <>
                            <li>
                                {userData.isAdmin &&
                                    <NavLink to='/dashboard'>
                                        My Dashboard
                                    </NavLink>
                                }
                            </li>
                            <li className='user-btns'>
                                <button
                                    className='logout-btn'
                                    onClick={logUserOut}
                                >
                                    Logout
                                </button>
                            </li>
                        </>
                    }
                </ul>
            </nav>
            {state.ready && <AuthForm {...state}
                setState={setState} />}
        </header>
    );
};

export default Header;