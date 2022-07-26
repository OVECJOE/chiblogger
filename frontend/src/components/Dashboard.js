import { Link as NavLink, Outlet } from 'react-router-dom';

import PostContextProvider from '../contexts/postContext';
import './styles/Dashboard.css';

const Dashboard = () => {
    return (
        <PostContextProvider>
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
        </PostContextProvider>
    );
};

export default Dashboard;