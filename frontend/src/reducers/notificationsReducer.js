export const notificationsReducer = (state, action) => {
    switch (action.type) {
        // case 'ADD_ARTICLE':
        //     return [
        //         ...state,
        //         action.article
        //     ];
        case 'SAVE_ALL_NOTIFICATIONS':
            if (action.notifications?.length >= 0) {
                return action.notifications;
            }
            return state;
        case 'UPDATE_NOTIFICATION':
            return state.map(notification => {
                if (notification._id === action.notification._id) {
                    return action.notification;
                }
                return notification;
            })
        case 'REMOVE_NOTIFICATION':
            return state.filter(notification => {
                    return notification._id !== action.id;
            });
        default:
            return state;
    }
};