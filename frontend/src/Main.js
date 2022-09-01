import { useContext } from 'react';
import {
    BrowserRouter as Router,
    Routes, Route
} from 'react-router-dom';

import HomePage from './components/HomePage';
import LearnPage from './components/LearnPage';
import AboutPage from './components/AboutPage';
import Dashboard from './components/Dashboard';
import Profile from './components/Profile';
import NewArticle from './components/NewArticle';
import Articles from './components/Articles';
import Notifications from './components/Notifications';
import BlogArticle from './components/BlogArticle';
import { UserContext } from './contexts/userContext';
import { ProjectContext } from './contexts/projectContext';
import Header from './components/Header';
import AuthContextProvider from './contexts/authContext';
import NotFoundPage from './components/NotFoundPage';
import PMessage from './components/PMessage';
import NotificationsContextProvider from './contexts/notificationsContext';
import Notification from './components/Notification';

const Main = () => {
    const { userData } = useContext(UserContext);
    const { projectData, projectDispatcher }  = useContext(ProjectContext);

    return (
        <Router>
            {projectData.message &&
                <PMessage message={projectData.message}
                    dispatcher={projectDispatcher}
                />
            }
            <AuthContextProvider>
                <Header />
            </AuthContextProvider>
                <NotificationsContextProvider token={userData.token}>
                    <Routes>
                        <Route path='/' element={<HomePage />} />
                        <Route path='/learn' element={<LearnPage />} />
                        <Route path='/about' element={<AboutPage />} />
                        {
                            (userData?.isAdmin) &&
                            <Route path='/dashboard/*' element={<Dashboard />}>
                                <Route index element={<Notifications />} />
                                <Route path='profile' element={<Profile />} />
                                <Route path='new-article' element={<NewArticle />} />
                                <Route path='articles' element={<Articles />} />
                                <Route path='notifications/:id' element={<Notification token={userData.token} />} />
                            </Route>
                        }
                        {userData?.username &&
                            <Route path='articles/:slugName' element={<BlogArticle />} />
                        }
                        <Route path='*'
                            element={<NotFoundPage
                                notFound={true}
                            />}
                            />
                    </Routes>
                </NotificationsContextProvider>
        </Router>
    );
};

export default Main;