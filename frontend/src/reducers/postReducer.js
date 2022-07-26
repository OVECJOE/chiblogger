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
            let articleImages = [];

            if (state.articleImages.length >= 5) {
                articleImages = [
                    action.photoUrl
                ]
            } else {
                articleImages = [
                    ...state.articleImages,
                    action.photoUrl
                ];
            }
            return {
                ...state,
                articleImages
            };
        case 'PUBLISH_ARTICLE':
            return {
                ...state,
                published: true
            };
        case 'CLEAR_ARTICLE_DATA':
            return action.default;
        default:
            return state;
    }
};