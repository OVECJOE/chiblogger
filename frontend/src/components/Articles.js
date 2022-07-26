import axios from "axios";
import { useContext, useEffect, useState } from "react";

import { ArticlesContext } from "../contexts/articlesContext";
import { ProjectContext } from "../contexts/projectContext";
import { erroneous } from "../utils";

const Articles = () => {
    const { articles, articlesDispatcher } = useContext(ArticlesContext);
    const { projectDispatcher } = useContext(ProjectContext);

    const [publishedArticles, setPublishedArticles] = useState([]);
    const [draftedArticles, setDraftedArticles] = useState([]);

    const API_URL = process.env.REACT_APP_API_URL;

    useEffect(() => {
        axios.get(`${API_URL}/articles`, {
            withCredentials: true,
        }).then(res => {
            console.log(res.data);

            articlesDispatcher({
                type: 'STORE_ARTICLES',
                articles: res.data
            });

            if (articles.length) {
                setDraftedArticles(articles.filter(article => {
                    return article.published === false;
                }));
                setPublishedArticles(articles.filter(article => {
                    return article.published === true;
                }));
            }
        }).catch(err => {
            erroneous(err, projectDispatcher);
        });
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [articles]);

    return (
        <section className="articles-container">
            <h1>My Articles</h1>
            <div className='published-articles-section'>
                <h3 className='articles-title'>
                    Published Articles
                </h3>
                <section className='articles-container'>
                    {publishedArticles.map(article => {
                        return (
                            <article
                                className='article-card'
                                key={article._id}
                            >
                                {article.title}
                            </article>
                        );
                    })}
                </section>
            </div>
        </section>
    );
};

export default Articles;