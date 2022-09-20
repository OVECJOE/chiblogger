import { useContext, lazy, Suspense } from 'react';
import {
    BrowserRouter as Router,
    Routes, Route
} from 'react-router-dom';

import { UserContext } from './contexts/userContext';
import { ProjectContext } from './contexts/projectContext';
import AuthContextProvider from './contexts/authContext';
import NotificationsContextProvider from './contexts/notificationsContext';
import Loader from './components/misc/Loader';

const Header = lazy(() => import('./components/Header'));
const HomePage = lazy(() => import('./components/HomePage'));
const AboutPage = lazy(() => import('./components/AboutPage'));
const LearnPage = lazy(() => import('./components/LearnPage'));
const Dashboard = lazy(() => import('./components/Dashboard'));
const Profile = lazy(() => import('./components/Profile'));
const NewArticle = lazy(() => import('./components/NewArticle'));
const Articles = lazy(() => import('./components/Articles'));
const Notifications = lazy(() => import('./components/Notifications'));
const Notification = lazy(() => import('./components/Notification'));
const BlogArticle = lazy(() => import('./components/BlogArticle'));
const NotFoundPage = lazy(() => import('./components/NotFoundPage'));
const PMessage = lazy(() => import('./components/PMessage'));

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
                <NotificationsContextProvider user={userData}>
                    <Suspense fallback={<Loader width='100vw' height='100vh' />}>
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
                    </Suspense>
                </NotificationsContextProvider>
        </Router>
    );
};

export default Main;