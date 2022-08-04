import parse from 'html-react-parser';
import { useContext, useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { AiFillLike } from 'react-icons/ai';
import { v4 as uuid } from 'uuid';
import axios from 'axios';

import { computeDate, erroneous } from '../utils';
import { ProjectContext } from '../contexts/projectContext';
import { ArticlesContext } from '../contexts/articlesContext';
import NotFoundPage from './NotFoundPage';
import './styles/BlogArticle.css';

const BlogArticle = () => {
    const { projectData, projectDispatcher } = useContext(ProjectContext);
    const { articles } = useContext(ArticlesContext);
    const { slugName } = useParams();

    const [newArticle, setNewArticle] = useState(
        articles.filter(article => {
            return article.published && article.slugName === slugName
        })?.[0] ?? null
    );
    const [activeLikeButton, setActiveLikeButton] = useState(false);
    const API_URL = process.env.REACT_APP_API_URL;

    const likeOrUnlike = () => {
        projectDispatcher({
            type: 'LIKE_OR_UNLIKE_ARTICLE',
            slugName
        });

        setActiveLikeButton(true);
    };

    useEffect(() => {
        const articleIdx = projectData.articlesLiked.indexOf(slugName);
        let action;

        if (articleIdx === -1) {
            action = 'unlike';
        } else {
            action = 'like';
        }

        activeLikeButton &&
            axios.put(`${API_URL}/articles/${slugName}/${action}`)
                .then(res => setNewArticle(res.data))
                .catch(err => {
                    erroneous(err, projectDispatcher);
                });
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [projectData.articlesLiked]);

    return (
        <>
            {newArticle ? <div className='right-container article-section'>
                <div className='featured-post-info'>
                    <div className='left'>
                        <img src={newArticle.creator.photo} alt={newArticle.creator.username} />
                        <p>By <span className='author'>{newArticle.creator.username}</span></p>
                        <span className='timestamp'>
                            {computeDate(newArticle.createdOn)}
                        </span>
                    </div>
                    <button className='share-btn'>Share</button>
                </div>
                <h1 className='post-title'>
                    {newArticle.title}
                </h1>
                <div className='article-photos'>
                    {newArticle.selectedFiles.map(photo => {
                        return (
                            <img src={photo} alt={newArticle.title} key={uuid()} />
                        );
                    })}
                </div>
                <div className='article-content'>
                    {parse(newArticle.content)}
                </div>
                <div className='article-actions-card'>
                    <div className='likes-card'>
                        <span className='like-btn'
                            onClick={likeOrUnlike}
                        >
                            <AiFillLike />
                        </span>
                        <span className='likes-count'>
                            {newArticle.likes} likes
                        </span>
                    </div>
                    <div className='no-of-comments-card'>
                        {newArticle?.comments?.length} comments
                    </div>
                </div>
            </div> :
                <NotFoundPage
                    message='Login or Signup to read this article'
                />
            }
        </>
    );
};

export default BlogArticle;