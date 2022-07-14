export const authReducer = (state, action) => {
    switch (action.type) {
        case 'UPDATE_PROPERTY':
            return {
                ...state,
                [action.key]: action.value
            };
        default:
            return state;
    }
};