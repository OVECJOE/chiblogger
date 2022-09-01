import {
    FaFacebookMessenger,
    FaInstagram, FaTwitter,
    FaLinkedin
} from 'react-icons/fa';
import { useState, useContext } from 'react';
import axios from 'axios';

import './styles/Footer.css';
import { erroneous } from '../utils';
import { ProjectContext } from '../contexts/projectContext';
import { UserContext } from '../contexts/userContext';

const Footer = () => {
    const genDefaultParams = () =>({
            firstName: '',
            email: '',
            message: ''
    });

    const [formData, setFormData] = useState(genDefaultParams());
    const { projectDispatcher } = useContext(ProjectContext);
    const { userData } = useContext(UserContext);

    const config = {
        headers: {
            'Content-type': 'application/json',
            Authorization: `Bearer ${userData.token}`
        }
    };

    const handleChange = (e) => {
        const { name, value } = e.target;

        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const sendEmail = (e) => {
        e.preventDefault();

        axios.post('/api/notifications', formData, config)
        .then(({ data }) => {
            console.log(data);
            projectDispatcher({
                type: 'SET_MESSAGE',
                message: `${data.message} Ticket ID: ${data.notificationId}`
            });
            setFormData(genDefaultParams());
        }).catch(err => erroneous(err, projectDispatcher));
    };

    return (
        <footer className='App__footer'>
            <form className='contact-form' method='POST' onSubmit={sendEmail}>
                <h2 className='form-title'>Contact Form</h2>
                <label htmlFor='first-name'>Enter Your First Name:</label>
                <input
                    type='text'
                    placeholder='First Name e.g John'
                    name='firstName'
                    value={formData.firstName}
                    onChange={handleChange}
                    id='first-name'
                    required
                />
                <label htmlFor='email'>Enter Your Email:</label>
                <input
                    type='email'
                    placeholder='Email e.g. xyz@gmail.com'
                    name='email'
                    value={formData.email}
                    onChange={handleChange}
                    id='email'
                    required
                />
                <label htmlFor='message'>Enter Your Message:</label>
                <textarea
                    placeholder='Your Message'
                    name='message'
                    value={formData.message}
                    onChange={handleChange}
                    id='message'
                    required
                />
                <button>Send Message</button>
            </form>
            <div className='connection-card'>
                <p>
                    Wanna reach out to me via social links?
                    Choose anyone below.
                </p>
                <div className='social-links'>
                    <a href='https://linkedin.com'>
                        <FaLinkedin />
                    </a>
                    <a href='https://instagram.com'>
                        <FaInstagram />
                    </a>
                    <a href='https://twitter.com'>
                        <FaTwitter />
                    </a>
                    <a href='https://facebook.com'>
                        <FaFacebookMessenger />
                    </a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;