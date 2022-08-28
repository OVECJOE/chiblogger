export const postReducer = (state, action) => {
    switch (action.type) {
        case 'UPDATE_PROPERTY':
            if (action.article) {
                return {
                    ...state,
                    ...action.article
                }
            }
            return {
                ...state,
                [action.key]: action.value
            };
        case 'UPDATE_PHOTO':
            const articleImages = [...state.articleImages];
            articleImages.push(action.photoUrl);

            return {
                ...state,
                articleImages: articleImages.slice(-5)
            };
        case 'CLEAR_PHOTOS':
            return {
                ...state,
                articleImages: []
            }
        case 'TOGGLE_PUBLISHED':
            return {
                ...state,
                published: action.published
            };
        case 'CLEAR_ARTICLE_DATA':
            return action.default;
        default:
            return state;
    }
};