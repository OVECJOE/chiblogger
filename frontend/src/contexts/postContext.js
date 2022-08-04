import { createContext, useEffect, useReducer } from "react";

import { postReducer } from '../reducers/postReducer';

export const PostContext = createContext();

const PostContextProvider = (props) => {
    const defaultArticle = () => ({
        title: '',
        slugName: '',
        articleImages: [],
        content: '',
        premiumRead: false,
        creator: '',
        published: false,
        categories: []
    });
    const [articleData, articleDispatcher] = useReducer(postReducer,
        JSON.parse(sessionStorage.getItem('articleData')) || defaultArticle()
    );

    useEffect(() => {
        sessionStorage.setItem('articleData', JSON.stringify(articleData));
    }, [articleData]);

    return (
        <PostContext.Provider
            value={{
                defaultArticle,
                articleData,
                articleDispatcher
            }}
        >
            {props.children}
        </PostContext.Provider>
    );
};

export default PostContextProvider;