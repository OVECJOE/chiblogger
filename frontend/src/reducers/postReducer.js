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
            if (state.articleImages.length < 5) {
                return {
                    ...state,
                    articleImages: [
                        ...state.articleImages,
                        action.photoUrl
                    ]
                };
            }
            return {
                ...state,
                articleImages: [action.photoUrl]
            };
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