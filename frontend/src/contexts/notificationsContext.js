import { createContext, useEffect, useReducer } from "react";
import axios from 'axios';

import { notificationsReducer } from '../reducers/notificationsReducer';

export const NotificationsContext = createContext();

const NotificationsContextProvider = ({ children, token }) => {
    const [notifications, notificationsDispatcher] = useReducer(
        notificationsReducer, []
    );

    useEffect(() => {
        axios.get('/api/notifications', {
            headers: {
                Authorization: `Bearer ${token}`
            }
        }).then(res => {
            notificationsDispatcher({
                type: 'SAVE_ALL_NOTIFICATIONS',
                notifications: res.data
            });
        }).catch(err => {
            console.log(err.message);
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