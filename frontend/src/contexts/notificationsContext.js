import { createContext, useEffect, useReducer } from "react";
import axios from 'axios';

import { notificationsReducer } from '../reducers/notificationsReducer';

export const NotificationsContext = createContext();

const NotificationsContextProvider = ({ children, user }) => {
    const [notifications, notificationsDispatcher] = useReducer(
        notificationsReducer,
        JSON.parse(localStorage.getItem('notifications')) || []
    );

    useEffect(() => {
        user.isAdmin && axios.get('/api/notifications', {
            headers: {
                Authorization: `Bearer ${user.token}`
            }
        }).then(res => {
            notificationsDispatcher({
                type: 'SAVE_ALL_NOTIFICATIONS',
                notifications: res.data
            });
            localStorage.setItem('notifications', JSON.stringify(notifications))
        }).catch(err => {
            alert(err.message);
        });
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
        <NotificationsContext.Provider
            value={{ notifications, notificationsDispatcher }}
        >
            {children}
        </NotificationsContext.Provider>
    );
};

export default NotificationsContextProvider;