import { useNavigate } from 'react-router-dom';
import { v4 as uuid } from 'uuid';
import parse from 'html-react-parser';
import TruncateMarkup from 'react-truncate-markup';
import { computeDate } from '../utils';
import { BsThreeDotsVertical } from 'react-icons/bs';
import { useState, useContext } from 'react';

import './styles/Article.css';
import { PostContext } from '../contexts/postContext';
import { ProjectContext } from "../contexts/projectContext";

const Article = ({ article, deleteArticle }) => {
    const content = parse(article.content);
    const [optionToggle, setOptionToggle] = useState(false);

    const navigate = useNavigate();
    const { articleDispatcher } = useContext(PostContext);
    const { projectDispatcher } = useContext(ProjectContext);

    const editArticle = () => {
        const {
            title, content, slugName,
            categories, selectedFiles,
            premiumRead, creator, published
        } = article;

        const newData = {
            title, content, creator,
            categories, articleImages: selectedFiles,
            premiumRead, slugName, published,
            articleId: article._id
        };

        articleDispatcher({
            type: 'UPDATE_PROPERTY',
            article: newData
        });
        setOptionToggle(false);
        setTimeout(() => {
            navigate('/dashboard/new-article', { state: { edit: true } });
        }, 1000);
    };

    const viewMore = () => {
        projectDispatcher({
            type: 'VIEW_MORE',
            data: article
        });
    };

    return (
        <article className='article-card'>
            <div className='article-image-gallery'>
                {article.selectedFiles.map(image => {
                    const index = article.selectedFiles.indexOf(image);
                    return (
                        <img
                            src={image} alt={`Sample #${index + 1}`}
                            className='image-card' key={uuid()}
                        />
                    );
                })}
            </div>
            <div className='article-summary'>
                <h3 className='article-title'>{article.title}</h3>
                <TruncateMarkup lines={3}>
                    <div className='article-piece'>
                        {content}
                    </div>
                </TruncateMarkup>
                <button
                    className='view-more-btn'
                    onClick={viewMore}
                >
                    View More
                </button>
            </div>
            <div className='article-info'>
                <span className='no-of-likes'>
                    {`${article.likes} likes`}
                </span>
                <div className='right'>
                    <time>{computeDate(article.createdOn)}</time>
                    <div className='options'>
                        <label htmlFor='options'
                            onClick={() => {
                                setOptionToggle(prev => !prev)
                            }}
                        >
                            <BsThreeDotsVertical />
                        </label>
                        <input
                            type='checkbox'
                            id='options'
                        />
                        {optionToggle && <ul className='options-list'>
                            <li className='edit-btn'
                                onClick={editArticle}
                            >Edit</li>
                            <li className='delete-btn'
                                onClick={() => deleteArticle(article._id)}
                            >Delete</li>
                        </ul>}
                    </div>
                </div>
            </div>
        </article>
    );
};

export default Article;