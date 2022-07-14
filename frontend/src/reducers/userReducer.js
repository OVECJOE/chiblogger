export const userReducer = (state, action) => {
    switch (action.type) {
        case 'STORE_USER':
            if (action.user) {
                return action.user;
            }
            return state;
        case 'REMOVE_USER':
            return {};
        default:
            return state;
    }
};