import { useState, useContext, useEffect } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { FaHamburger } from 'react-icons/fa';

import './styles/Header.css';
import AuthForm from './AuthForm';
import { UserContext } from '../contexts/userContext';
import { ProjectContext } from '../contexts/projectContext';
import ErrorCard from './ErrorCard';

const Header = () => {
    const { userData, userDispatcher } = useContext(UserContext);
    const { projectData } = useContext(ProjectContext);
    const [state, setState] = useState({
        ready: false,
        signup: true,
        logoutMessage: ''
    });

    const navigate = useNavigate();

    const generateForm = (signup) => {
        setState({
            ready: !state.ready,
            signup
        });
    };

    const logUserOut = () => {
        userDispatcher({ type: 'REMOVE_USER' });
        setState(prev => ({
            ...prev,
            logoutMessage: 'Logout Successful!'
        }));
        navigate('/', { replace: true });
    };

    useEffect(() => {
        const checkbox = document.querySelector('#hamburger');
        const icon = document.querySelector('#mobile-menu');
        const listener = function (e) {
            if (e.target != checkbox && e.target != icon) {
                checkbox.checked = false;
                document.removeEventListener('click', listener);
            }
        };

        checkbox.addEventListener('click', function () {
            if (this.checked) {
                document.addEventListener('click', listener);
            }
        });
    }, []);

    return (
        <header className='App__header'>
            {state.logoutMessage && <div className='logout-msg'>
                {state.logoutMessage}
                {setTimeout(() => setState(prev => ({
                    ...prev,
                    logoutMessage: ''
                })), 3000) && ''}
            </div>}
            {projectData.errors?.length !== 0 &&
                <ErrorCard />
            }
            <h3 className='App__header-logo'>
                CHI-Blogger
            </h3>
            <nav>
                <input type='checkbox' id='hamburger' />
                <label htmlFor='hamburger' className='hamburger' id='mobile-menu'
                >
                    <span className='menu'>Menu</span>
                    <FaHamburger />
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
                            {userData.isAdmin &&
                                <li>
                                    <NavLink to='/dashboard'>
                                        My Dashboard
                                    </NavLink>
                                </li>
                            }
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