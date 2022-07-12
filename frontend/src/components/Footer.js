import {
    FaFacebookMessenger,
    FaInstagram, FaTwitter,
    FaLinkedin
} from 'react-icons/fa';

import './styles/Footer.css';

const Footer = () => {
    return (
        <footer className='App__footer'>
            <form className='contact-form'>
                <h1 className='form-title'>Contact Form</h1>
                <label htmlFor='first-name'>Enter Your First Name:</label>
                <input
                    type='text'
                    placeholder='First Name e.g John'
                    name='firstName'
                    id='first-name'
                />
                <label htmlFor='email'>Enter Your Email:</label>
                <input
                    type='email'
                    placeholder='Email e.g. xyz@gmail.com'
                    name='email'
                    id='email'
                />
                <label htmlFor='message'>Enter Your Message:</label>
                <textarea
                    placeholder='Your Message'
                    name='firstName'
                    id='message'
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