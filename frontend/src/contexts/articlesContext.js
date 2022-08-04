import { createContext, useEffect, useReducer } from "react";
import axios from 'axios';

import { articlesReducer } from '../reducers/articlesReducer';

export const ArticlesContext = createContext();

const ArticlesContextProvider = (props) => {
    const [articles, articlesDispatcher] = useReducer(articlesReducer,
        JSON.parse(localStorage.getItem('articles')) || []
    );

    const API_URL = process.env.REACT_APP_API_URL;

    useEffect(() => {
        localStorage.setItem('articles', JSON.stringify(articles));
    }, [articles]);

    useEffect(() => {
        axios.get(`${API_URL}/articles`).then(res => {

            articlesDispatcher({
                type: 'STORE_ARTICLES',
                articles: res.data
            });
        }).catch(err => {
            console.log(err.message);
        });
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [articles.length]);

    return (
        <ArticlesContext.Provider
            value={{ articles, articlesDispatcher }}
        >
            {props.children}
        </ArticlesContext.Provider>
    );
};

export default ArticlesContextProvider;