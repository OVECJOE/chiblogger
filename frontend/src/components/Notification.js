import { useParams } from 'react-router-dom';
import { useState, useEffect, useContext } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

import Loader from './misc/Loader';
import './styles/Notification.css';
import { erroneous } from '../utils';
import { ProjectContext } from '../contexts/projectContext';
import { NotificationsContext } from '../contexts/notificationsContext';

const Notification = ({ token }) => {
    const { projectDispatcher } = useContext(ProjectContext);
    const { notificationsDispatcher } = useContext(NotificationsContext);
    const { id } = useParams();
    const navigate = useNavigate();
    const [notification, setNotification] = useState(null);

    const config = {
        headers: {
            "Content-type": 'application/json',
            Authorization: `Bearer ${token}`
        }
    };

    useEffect(() => {
        axios.get(`/api/notifications/${id}`, config)
        .then(res => setNotification(res.data))
        .catch(err => {
            erroneous(err, projectDispatcher);
            navigate(-1);
        });
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [token, id]);

    const deleteNotification = (id) => {
        axios.delete(`/api/notifications/${id}`, config)
        .then(res => {
            notificationsDispatcher({
                type: 'REMOVE_NOTIFICATION',
                id: res.data._id
            });
            projectDispatcher({
                type: 'SET_MESSAGE',
                message: `Successfully Deleted Notification with ID ${id}!`
            })
            navigate(-1);
        }).catch(err => erroneous(err, projectDispatcher));
    };

    return (
        <div className='notification-container'>
            {notification ?
                <section className='notification-section'>
                    <h1 className='heading'>Message from {notification.firstName}</h1>
                    <p className='email-link'>
                        To reply message via email, click{' '}
                        <a href={`mailto:${notification.email}`}>here</a>
                    </p>
                    <blockquote className='message'>
                        <q>{notification.message}</q>
                    </blockquote>
                    <a href={`mailto:${notification.email}`} className='reply-btn'>Reply</a>
                    <button
                        className='delete-btn'
                        onClick={() => deleteNotification(notification._id)}
                    >Delete Message</button>
                </section> :
                <Loader />
            }
            <button className='back-btn'
                onClick={() => navigate(-1)}
            >{'<- Go Back'}</button>
        </div>
    );
}

export default Notification;