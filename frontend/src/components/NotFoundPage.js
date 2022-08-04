import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const NotFoundPage = ({ message, notFound }) => {
    const navigate = useNavigate();
    const [timeLimit, setTimeLimit] = useState(4);

    useEffect(() => {
        setTimeout(() => {
            setTimeLimit(prev => prev - 1);
        }, 2000);

        if (notFound && !timeLimit) {
            navigate('/');
        }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [notFound, timeLimit]);

    return (
        <div className='article-not-found-page'>
            <p className='text'>
                {!message ?
                    `Redirecting in ${timeLimit} secs...` :
                    message
                }
            </p>
            <img src={require('../assets/not-found.png')} alt='not found' />
        </div>
    );
};

export default NotFoundPage;