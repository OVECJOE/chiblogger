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
                errors: action.errors
            };
        case 'REMOVE_ERROR':
            return {
                ...state,
                errors: []
            };
        case 'TOGGLE_AUTOSAVE':
            return {
                ...state,
                autosave: !state.autosave
            };
        default:
            return state;
    }
};

export default projectReducer;