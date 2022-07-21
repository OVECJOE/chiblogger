export const userReducer = (state, action) => {
    switch (action.type) {
        case 'STORE_USER':
            if (action.user) {
                return action.user;
            }
            return state;
        case 'REMOVE_USER':
            return {};
        case 'UPDATE_PROPERTY':
            return {
                ...state,
                [action.key]: action.value
            };
        case 'UPDATE_PHOTO':
            return {
                ...state,
                photo: action.photoUrl
            };
        default:
            return state;
    }
};