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
        case 'VIEW_MORE':
            return {
                ...state,
                view: true,
                data: action.data
            };
        case 'VIEW_LESS':
            return {
                ...state,
                view: false,
                data: null
            };
        default:
            return state;
    }
};

export default projectReducer;