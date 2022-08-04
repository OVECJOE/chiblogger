export const articlesReducer = (state, action) => {
    switch (action.type) {
        case 'ADD_ARTICLE':
            return [
                ...state,
                action.article
            ];
        case 'DELETE_ARTICLE':
            return state.filter(article => {
                return article._id !== action.id;
            });
        case 'STORE_ARTICLES':
            if (action.articles instanceof Array &&
                action.articles.length > 0) {
                return action.articles;
            }
            console.log(action.articles);
            return state;
        default:
            return state;
    }
};