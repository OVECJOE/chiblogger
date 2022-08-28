import parse from 'html-react-parser';
import { useContext, useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { AiFillLike } from 'react-icons/ai';
import { FaComments, FaCommentDots } from 'react-icons/fa';
import { v4 as uuid } from 'uuid';
import axios from 'axios';
import Sentiment from 'sentiment';

import { computeDate, erroneous } from '../utils';
import { ProjectContext } from '../contexts/projectContext';
import { UserContext } from '../contexts/userContext';
import { ArticlesContext } from '../contexts/articlesContext';
import NotFoundPage from './NotFoundPage';
import './styles/BlogArticle.css';

const BlogArticle = () => {
    const { projectDispatcher } = useContext(ProjectContext);
    const { articles, articlesDispatcher } = useContext(ArticlesContext);
    const { userData } = useContext(UserContext);
    const { slugName } = useParams();

    const [newArticle, setNewArticle] = useState(
        articles.filter(article => {
            return article.published && article.slugName === slugName
        })?.[0] ?? null
    );
    const [liked, setLiked] = useState(false);
    const [comment, setComment] = useState({
        type: '',
        title: '',
        content: ''
    });
    const [typeChosen, setTypeChosen] = useState(false);

    useEffect(() => {
        const likerIdx = newArticle.likers?.indexOf(userData._id);

        if (likerIdx === -1) {
            setLiked(false);
        } else {
            setLiked(true);
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [newArticle]);

    const likeArticle = () => {
        axios.put(`/api/articles/${slugName}/like`, {}, {
            headers: {
                'Content-type': 'application/json',
                Authorization: `Bearer ${userData.token}`
            }
        })
            .then(res => {
                setNewArticle(res.data);
                articlesDispatcher({
                    type: 'UPDATE_ARTICLE',
                    article: res.data
                });
            })
            .catch(err => {
                erroneous(err, projectDispatcher);
            });
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        
        if (comment.content && !typeChosen) {
            const sentiment = new Sentiment();
            const result = sentiment.analyze(comment.content);
            let conclusion;
            
            if (result.score > 0) {
                conclusion = 'positive';
            } else if (result.score < 0) {
                conclusion = 'negative';
            } else {
                conclusion = ''
            }
            
            setComment(prev => ({
                ...prev,
                type: conclusion
            }))
        }

        if (name === 'type') {
            setTypeChosen(true);
        }
        
        setComment(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const submitComment = (e) => {
        e.preventDefault();
    };

    return (
        <>
            {newArticle ? <div className='blog-article-container'>
                <section className='right-container article-section'>
                    <div className='featured-post-info'>
                        <div className='left'>
                            {newArticle.creator?.photo ?
                                <img src={newArticle.creator.photo} alt={newArticle.creator.username} /> :
                                <span className='without-photo'>
                                    {newArticle.creator?.username?.[0].toUpperCase()}
                                </span>
                            }
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
                    <article className='article-content'>
                        {parse(newArticle.content)}
                    </article>
                    <div className='article-actions-card'>
                        <div className='likes-card'>
                            <span className='like-btn'
                                onClick={likeArticle}
                                style={{
                                    backgroundColor: liked ? '#e61b48' : '#7d6904',
                                    color: liked ? '#fff' : 'rgb(6,43,16)'
                                }}
                            >
                                <AiFillLike />
                            </span>
                            <span className='likes-count'>
                                {liked ?
                                    `You and ${newArticle.likes - 1} other${(newArticle.likes - 1) > 1 ? 's' : ''}` :
                                    `${newArticle.likes} like${newArticle.likes > 1 ? 's' : ''}`
                                }

                            </span>
                        </div>
                        <div className='no-of-comments-card'>
                            {newArticle?.comments?.length} comments
                        </div>
                    </div>
                    <form className='comment-box' onSubmit={submitComment}>
                        <input
                            type='text'
                            placeholder='Comment Responsibly...'
                            name='content'
                            value={comment.content}
                            onChange={handleChange}
                            required
                        />
                        <button>Send</button>
                    </form>
                    {comment.type && <div className='tooltip'>
                        This a <strong>{comment.type}</strong> feedback.{' '}
                        <span className='edit-type'>
                            No? Change type: <select value={comment.type} name='type' onChange={handleChange} className='funny-edit'>
                                <option value=''>Neutral</option>
                                <option value='positive'>Positive</option>
                                <option value='negative'>Negative</option>
                            </select>
                        </span>
                    </div>}
                </section>
                <section className='comments-container'>
                    <h1 className='heading'>
                        Comments
                        <FaComments />
                    </h1>
                    {newArticle.comments?.length ?
                        <div className='comments'>
                            comments are hidden
                        </div> :
                        <article className='no-comment-text'>
                            <FaCommentDots />
                            Be the first to comment on this article.
                        </article>
                    }
                </section>
            </div> :
                <NotFoundPage
                    message='Login or Signup to read this article'
                />
            }
        </>
    );
};

export default BlogArticle;