const projectReducer = (state, action) => {
    switch (action.type) {
        case 'TOGGLE_POPUP_MESSAGE':
            return {
                ...state,
                msgPopup: !state.msgPopup
            };
        case 'SET_ERROR':
            return {
                ...state,
                error: action.error
            };
        case 'REMOVE_ERROR':
            return {
                ...state,
                error: {}
            };
        default:
            return state;
    }
};

export default projectReducer;