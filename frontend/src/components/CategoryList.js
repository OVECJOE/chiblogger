import { FaBatteryEmpty } from 'react-icons/fa';

import { computeDate } from '../utils';

const CategoryList = ({ categorizedArticles, setRandomArticle }) => {
    const readArticle = (article) => {
        if (typeof article === 'object' && Object.keys(article).length > 0) {
            setRandomArticle(article);
        }
    };
   
    return (
        <div className='articles-container'>
            {categorizedArticles.map(article => {
                return (
                    <article
                        className='post-card'
                        key={article._id}
                        onClick={() => readArticle(article)}
                    >
                        <img src={article.selectedFiles[0]} alt={article.title} />
                        <div className='post-info'>
                            <span className='timestamp'>
                                {computeDate(article.createdOn)}
                            </span>
                            <h4 className='headline'>
                                {article.title}
                            </h4>
                            <span className='author'>
                                {article.creator.username}
                            </span>
                        </div>
                    </article>
                );
            })}
            {!categorizedArticles.length && <div className='no-article'>
                <FaBatteryEmpty />
                Empty!
            </div>}
        </div>
    );
};

export default CategoryList;