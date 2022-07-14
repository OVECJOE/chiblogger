import { useContext, useState } from 'react';
import { MdCancel, MdOutlineCancelPresentation } from 'react-icons/md';
import axios from 'axios';
import { v4 as uuid } from 'uuid';

import './styles/AuthForm.css';
import { AuthContext } from '../contexts/authContext';
import { UserContext } from '../contexts/userContext';

const AuthForm = ({ signup, setState }) => {
    const API_URL = process.env.REACT_APP_API_URL;

    const { authData, authDispatcher } = useContext(AuthContext);
    const { userDispatcher } = useContext(UserContext);

    const [error, setError] = useState({});

    const falsifyReady = () => setState(state => ({
        ...state,
        ready: false
    }));

    const handleChange = (e) => {
        const { name, value } = e.target;

        authDispatcher({
            type: 'UPDATE_PROPERTY',
            key: name,
            value
        });
    };

    const submitData = (e) => {
        e.preventDefault();

        const route = signup ? 'register' : 'login';

        axios.post(`${API_URL}/${route}`, authData, {
            withCredentials: true,
        })
        .then(res => {            
            localStorage.removeItem('authData');
            userDispatcher({
                type: 'STORE_USER',
                user: res.data
            });
            falsifyReady();
        })
        .catch(err => {
            const { errors } = err.response.data;
            setError(errors);
        });
        
    };

    return (
        <div className='auth-form-container'>
            <div className='cancel-btn'
                onClick={falsifyReady}>
                <MdOutlineCancelPresentation />
            </div>
            {Object.keys(error).length && <ul className='error-list'>
                <div className='cancel-btn'
                    onClick={() => setError({})}
                >
                    <MdCancel />
                </div>
                {Object.values(error).filter(value => value !== '')
                    .map(value => <li key={uuid()}>{value}</li>)
                }
            </ul>}
            <form className="auth-form" onSubmit={submitData}>
                <h1>{signup ? 'Signup' : 'Login'} Form</h1>
                <div className='form-item'>
                    <label htmlFor='username'>
                        Enter Your Username:
                    </label>
                    <input
                        type='text'
                        name='username'
                        placeholder='Your Username'
                        id='username'
                        required
                        value={authData.username}
                        onChange={handleChange}
                    />
                </div>
                {signup &&
                    <div className='form-item'>
                        <label htmlFor='email'>
                            Enter Your Email Address:
                        </label>
                        <input
                            type='email'
                            name='email'
                            placeholder='Your Email Address'
                            id='email'
                            required
                            value={authData.email}
                            onChange={handleChange}
                        />
                    </div>
                }
                <div className='form-item'>
                    <label htmlFor='password'>
                        {signup ? 'Create New Password' :
                            'Enter Your Password'
                        }:
                    </label>
                    <input
                        type='password'
                        name='password'
                        placeholder={
                            `${signup ? 'New' : 'Your'} Password`
                        }
                        required
                        id='password'
                        value={authData.password}
                        onChange={handleChange}
                    />
                </div>
                <button>Submit</button>
            </form>
        </div>
    );
};

export default AuthForm;