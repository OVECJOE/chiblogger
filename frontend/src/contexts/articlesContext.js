import { createContext, useEffect, useReducer } from "react";

import { articlesReducer } from '../reducers/articlesReducer';

export const ArticlesContext = createContext();

const ArticlesContextProvider = (props) => {
    const [articles, articlesDispatcher] = useReducer(articlesReducer,
        JSON.parse(localStorage.getItem('articles')) || []
    );

    useEffect(() => {
        localStorage.setItem('articles', JSON.stringify(articles));
    }, [articles]);

    return (
        <ArticlesContext.Provider
            value={{ articles, articlesDispatcher }}
        >
            {props.children}
        </ArticlesContext.Provider>
    );
};

export default ArticlesContextProvider;