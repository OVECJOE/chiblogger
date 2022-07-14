import { Link as NavLink, Outlet, useNavigate } from 'react-router-dom';
import { useContext, useEffect } from 'react';

import './styles/Dashboard.css';
import { UserContext } from '../contexts/userContext';

const Dashboard = () => {
    const { userData } = useContext(UserContext);
    const navigate = useNavigate();

    useEffect(() => {
        !userData.isAdmin && navigate('/', { replace: true });
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [userData.isAdmin]);
    
    return (
        <main className='dashboard'>
            <section className='nav-section'>
                <div>
                    <NavLink to='/dashboard'>
                        My Profile
                    </NavLink>
                    <div className='line-stroke'></div>
                </div>
                <div>
                    <NavLink to='/dashboard/new-article'>
                        Create A New Article
                    </NavLink>
                    <div className='line-stroke'></div>
                </div>
                <div>
                    <NavLink to='/dashboard/articles'>
                        My Articles
                    </NavLink>
                    <div className='line-stroke'></div>
                </div>
                <div>
                    <NavLink to='/dashboard/subscribers'>
                        My Subscribers
                    </NavLink>
                    <div className='line-stroke'></div>
                </div>
            </section>
            <Outlet />
        </main>
    );
};

export default Dashboard;