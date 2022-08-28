import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { MdCancel, MdStars } from 'react-icons/md';
import parse from 'html-react-parser';
import { v4 as uuid } from 'uuid';

import { ArticlesContext } from "../contexts/articlesContext";
import { ProjectContext } from "../contexts/projectContext";
import { UserContext } from '../contexts/userContext';
import { erroneous } from "../utils";
import Article from './Article';
import './styles/Articles.css';

const Articles = () => {
    const { articles, articlesDispatcher } = useContext(ArticlesContext);
    const { projectData, projectDispatcher } = useContext(ProjectContext);
    const { userData } = useContext(UserContext);

    const [publishedArticles, setPublishedArticles] = useState([]);
    const [draftedArticles, setDraftedArticles] = useState([]);

    const deleteArticle = (id) => {
        axios.delete(`/api/articles/${id}`, {
            headers: {
                Authorization: `Bearer ${userData.token}`
            }
        })
            .then(res => {
                articlesDispatcher({
                    type: 'STORE_ARTICLES',
                    articles: res.data
                });
            }).catch(err => {
                erroneous(err, projectDispatcher);
            });
    };

    useEffect(() => {
        if (articles.length) {
            setDraftedArticles(articles.filter(article => {
                return !article.published;
            }));
            setPublishedArticles(articles.filter(article => {
                return article.published;
            }));
        } // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [articles.length]);

    return (
        <>
            <section className="article-cards">
                <h1>My Articles</h1>
                <div className='published-articles-section articles-section'>
                    <h3 className='articles-title'>
                        Published
                    </h3>
                    {publishedArticles.length ? <section className='articles'>
                        {publishedArticles.map(article => {
                            return (
                                <Article
                                    article={article}
                                    deleteArticle={deleteArticle}
                                    key={article._id}
                                />
                            );
                        })}
                    </section> :
                        <div className='no-articles'>
                            Nothing here.
                        </div>
                    }
                </div>
                <div className='drafted-articles-section articles-section'>
                    <h3 className='articles-title'>
                        Drafted
                    </h3>
                    {draftedArticles.length ? <section className='articles'>
                        {draftedArticles.map(article => {
                            return (
                                <Article
                                    article={article}
                                    deleteArticle={deleteArticle}
                                    key={uuid()}
                                />
                            );
                        })}
                    </section> :
                        <div className='no-articles'>
                            Nothing here.
                        </div>
                    }
                </div>
                <div className='copyright-card'>
                    copyright @2022 chiblogger
                </div>
            </section>
            {(projectData.view && projectData.data) &&
                <div className='container'>
                    <section className='article-board'>
                        <div className='cancel-btn'
                            onClick={() => {
                                projectDispatcher({
                                    type: 'VIEW_LESS'
                                });
                            }}
                        >
                            <MdCancel />
                        </div>
                        <h2 className='title'>{projectData.data.title}</h2>
                        <div className='categories'>
                            <h6>Categories:</h6>
                            {projectData.data.categories.map(category => {
                                return (
                                    <span className='category'>category.name</span>
                                );
                            })}
                        </div>
                        <div className='content'>
                            {parse(projectData.data.content)}
                        </div>
                        <div className='metadata'>
                            <time>
                                {projectData.data.createdOn.split('T')[0]}
                            </time>
                            {projectData.data.premiumRead &&
                                <span className='premium-read'
                                    title='This is only available to premium subscribers'
                                >
                                    <MdStars />
                                </span>
                            }
                            <span className='published'>
                                {projectData.data.published ? 'Published' : 'Drafted'}
                            </span>
                        </div>
                        <div className='comments'>
                            {projectData.data.comments.map(comment => {
                                return (<article className='comment'>
                                    <div className="comment-creator">
                                        <h6 className='name'>{comment.user.username}</h6>
                                        <time>
                                            {comment.createdOn.split('T')[0]}
                                        </time>
                                    </div>
                                    <div className={`${comment.type}-type`}>
                                        {comment.type}
                                    </div>
                                    <h4 className='comment-title'>{comment.title}</h4>
                                    <blockquote className='comment-body'>
                                        {comment.content}
                                    </blockquote>
                                    <div className='votes'>
                                        <span>{comment.upvoteCount}</span>
                                        <span>{comment.downvoteCount}</span>
                                    </div>
                                </article>);
                            })}
                        </div>
                    </section>
                </div>
            }
        </>
    );
};

export default Articles;