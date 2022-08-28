export const articlesReducer = (state, action) => {
    switch (action.type) {
        case 'ADD_ARTICLE':
            return [
                ...state,
                action.article
            ];
        case 'UPDATE_ARTICLE':
            return state.map(article => {
                if (article._id === action.article._id) {
                    return action.article;
                }
                return article;
            })
        case 'DELETE_ARTICLE':
            return state.filter(article => {
                return article._id !== action.id;
            });
        case 'STORE_ARTICLES':
            if (action.articles?.length >= 0) {
                return action.articles;
            }
            return state;
        default:
            return state;
    }
};