import { MdCancel } from 'react-icons/md';

import './styles/PMessage.css';

// Popup Message Modal Component
const PMessage = ({ message, dispatcher }) => {
    const closePopup = () => {
        dispatcher({ type: 'CLEAR_MESSAGE' });
    };

    return (
        <div className='popup-message-box'>
            <div className='message-card'>
                <div className='cancel-btn' onClick={closePopup}>
                    <MdCancel />
                </div>
                <p className='message'>
                    {message}
                </p>
            </div>
        </div>
    );
};

export default PMessage;