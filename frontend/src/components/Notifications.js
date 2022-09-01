import { useState, useContext, useEffect } from "react";
// import axios from 'axios';

import { ProjectContext } from "../contexts/projectContext";
import { NotificationsContext } from '../contexts/notificationsContext';
import './styles/Notifications.css';
import { erroneous } from "../utils";

const Notifications = () => {
    const { notifications } = useContext(NotificationsContext);
    const { projectDispatcher } = useContext(ProjectContext);
    const [filteredNotifications, setFilteredNotifications] = useState([]);
    const [keyword, setKeyword] = useState('');

    const filterNotificationByKeyword = (n, keyword) => {
        const k = keyword.toLowerCase();

        return n.message.toLowerCase().match(k)?.length > 0 ||
            n.firstName.toLowerCase().match(k)?.length > 0 ||
            n.email.toLowerCase().match(k)?.length > 0 ||
            n.dateSent.toLowerCase().match(k)?.length > 0;
    };

    const handleChange = (e) => setKeyword(e.target.value);
    const handleClick = (event) => {
        const { detail } = event;

        console.log(detail);
    };

    useEffect(() => {
        switch (keyword) {
            case '':
                setFilteredNotifications(notifications);
                break;
            case 'viewed':
                setFilteredNotifications(notifications.filter(
                    notification => notification.viewed
                ));
                break;
            case 'unread':
                setFilteredNotifications(notifications.filter(
                    notification => !notification.viewed
                ));
                break;
            default:
                try {
                    const matched = notifications.filter(notification => {
                        return filterNotificationByKeyword(notification, keyword);
                    });
                    setFilteredNotifications(matched);
                } catch (err) {
                    erroneous(err, projectDispatcher);
                }
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [keyword, notifications]);

    return (
        <section className='notifications-container'>
            <div className='inbox-filter-card'>
                <h1>Notifications</h1>
                <form className='filter-box'>
                    <input
                        type='search'
                        placeholder="Filter Notification by Keyword..."
                        name='keyword'
                        value={keyword}
                        onChange={handleChange}
                    />
                    <select name='keyword' onChange={handleChange}
                        value={keyword}
                    >
                        <option value=''>
                            All
                        </option>
                        <option value='unread'>
                            Unread
                        </option>
                        <option value='viewed'>
                            Viewed
                        </option>
                    </select>
                </form>
            </div>
            <p className='notification-count'>
                <span>{filteredNotifications.length}</span>{' '}
                Notifications
            </p>
            <div className='notifications-list'>
                <p className='tooltip'>
                    Click or tap on a notification to view more details about it;
                    Double click or tap to delete
                </p>
                {filteredNotifications.map(notification => {
                    return (
                        <article
                            className={`notification-card ${!notification.viewed && 'unread'}`}
                            key={notification._id}
                            onDoubleClick={handleClick}
                        >
                            <div className='sender-info'>
                                <span className='name'>{notification.firstName}</span>
                                <a href={`mailto:${notification.email}`} className='email'>
                                    {notification.email}
                                </a>
                            </div>
                            <blockquote className='message-summary'>
                                {notification.message}
                            </blockquote>
                            <time>
                                {`${notification.dateSent.split('T')[0]} | `}
                                {notification.dateSent.split('T')[1].split('.')[0].slice(0, 5)}
                            </time>
                        </article>
                    );
                })}
                {!filteredNotifications.length &&
                    <p className='no-notification'>
                        No <span className='highlighted-text'>
                            {(keyword === 'viewed' || keyword === 'unread') ? `${keyword} ` : ''}
                        </span> notifications.
                    </p>
                }
            </div>
        </section>
    );
};

export default Notifications;