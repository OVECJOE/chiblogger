export const articlesReducer = (state, action) => {
    switch (action.type) {
        case 'ADD_ARTICLE':
            return [
                ...state,
                action.article
            ];
        case 'STORE_ARTICLES':
            if (action.articles instanceof Array &&
                action.article.length > 0) {
                return action.article;
            }
            console.log(action.articles);
            return state;
        default:
            return state;
    }
};