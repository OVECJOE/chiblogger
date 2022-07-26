import { useContext } from 'react';
import { MdOutlineCancelPresentation } from 'react-icons/md';
import axios from 'axios';

import './styles/AuthForm.css';
import { AuthContext } from '../contexts/authContext';
import { UserContext } from '../contexts/userContext';
import { ProjectContext } from '../contexts/projectContext';
import { updateProperty, erroneous } from '../utils';

const AuthForm = ({ signup, setState }) => {
    const API_URL = process.env.REACT_APP_API_URL;

    const { authData, authDispatcher } = useContext(AuthContext);
    const { userDispatcher } = useContext(UserContext);
    const { projectDispatcher } = useContext(ProjectContext);

    const falsifyReady = () => setState(state => ({
        ...state,
        ready: false
    }));

    const handleChange = (e) => {
        updateProperty(e, authDispatcher);
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
            erroneous(err, projectDispatcher);
        });
    };

    return (
        <div className='auth-form-container'>
            <div className='cancel-btn'
                onClick={falsifyReady}>
                <MdOutlineCancelPresentation />
            </div>
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