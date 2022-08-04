import { useNavigate } from 'react-router-dom';
import { useContext, useEffect, useState } from 'react';
import axios from 'axios';
import parse from 'html-react-parser';
import TruncateMarkup from 'react-truncate-markup';
import { FaRegEye } from 'react-icons/fa';

import CategoryList from './CategoryList';
import Footer from './Footer';
import { ArticlesContext } from '../contexts/articlesContext';
import { ProjectContext } from '../contexts/projectContext';
import { UserContext } from '../contexts/userContext';
import { computeDate, erroneous } from '../utils';
import './styles/HomePage.css';

const HomePage = () => {
    const { articles } = useContext(ArticlesContext);
    const { projectDispatcher } = useContext(ProjectContext);
    const { userData } = useContext(UserContext);
    const [categorizedArticles, setCategorizedArticles] = useState([]);
    const [category, setCategory] = useState('latest');
    const [index] = useState(() => {
        return Math.floor(Math.random() * articles.length)
    });
    const [randomArticle, setRandomArticle] = useState(
        articles.filter(article => article.published)[index]
    );
    const navigate = useNavigate();

    const API_URL = process.env.REACT_APP_API_URL;

    const chooseCategory = (e) => {
        const { id } = e.target;

        setCategory(prev => prev !== id ? id : prev);
    };
    const active = arg => category === arg ? 'active' : '';

    const showMore = (id) => {
        !userData?.username ? erroneous({
            message: 'Signup or Login to View More...'
        }, projectDispatcher) :
            navigate(`/articles/${randomArticle.slugName}`);
    };

    useEffect(() => {
        const publishedArticles = articles.filter(article => article.published);

        if (category === 'popular') {
            axios.get(`${API_URL}/users`)
                .then(res => {
                    const noOfUsers = res.data.length;

                    setCategorizedArticles(publishedArticles.filter(article => {
                        return article.likes >= Math.ceil(noOfUsers / 4);
                    }));
                }).catch(err => {
                    erroneous(err, projectDispatcher);
                });
        } else {
            const maxDays = 6.048e+8;

            setCategorizedArticles(publishedArticles.filter(article => {
                const createdOn = new Date(article.createdOn);
                return createdOn.getUTCMilliseconds() <= maxDays;
            }));
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [articles, category]);

    return (
        <>
            <main className="App__home">
                <section className='hero-section'>
                    <div className="left-card">
                        <h2 className='title'>
                            Everything about Health Fitness
                        </h2>
                        <p className='content'>
                            Lorem Ipsum Is Simply Dummy Text
                            Of The Printing And
                        </p>
                    </div>
                    <div className='right-card'>
                        <div className='left'>
                            <img src={require('../assets/img-1.jpg')} alt='hero sample 1' />
                            <img src={require('../assets/img-3.jpg')} alt='hero sample 1' />
                        </div>
                        <img src={require('../assets/img-2.jpg')} alt='hero sample 1' />
                    </div>
                </section>
                <section className='posts-container'>
                    <div className='left-container'>
                        <ul className='category-types'>
                            <li
                                className={active('latest')}
                                onClick={chooseCategory}
                                id='latest'
                            >Latest</li>
                            <li
                                className={active('popular')}
                                onClick={chooseCategory}
                                id='popular'
                            >Popular</li>
                        </ul>
                        <CategoryList
                            categorizedArticles={categorizedArticles}
                            setRandomArticle={setRandomArticle}
                        />
                    </div>
                    <div className='right-container'>
                        <div className='featured-post-info'>
                            <div className='left'>
                                <img src={randomArticle.creator.photo} alt={randomArticle.creator.username} />
                                <p>By <span className='author'>{randomArticle.creator.username}</span></p>
                                <span className='timestamp'>
                                    {computeDate(randomArticle.createdOn)}
                                </span>
                            </div>
                            <button className='share-btn'>Share</button>
                        </div>
                        <h1 className='post-title'>
                            {randomArticle.title}
                        </h1>
                        <img src={randomArticle.selectedFiles[0]} alt={randomArticle.title} />
                        <TruncateMarkup lines={5} tokenize='words'>
                            <div className='article-overview'>
                                {parse(randomArticle.content)}
                            </div>
                        </TruncateMarkup>
                        <button
                            className='view-more'
                            onClick={() => showMore(randomArticle._id)}
                        >View More <FaRegEye /></button>
                    </div>
                </section>
            </main>
            <Footer />
        </>
    );
};

export default HomePage;