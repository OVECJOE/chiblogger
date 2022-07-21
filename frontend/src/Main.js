import { useContext } from 'react';
import {
    BrowserRouter as Router,
    Routes, Route, Navigate
} from 'react-router-dom';

import HomePage from './components/HomePage';
import LearnPage from './components/LearnPage';
import AboutPage from './components/AboutPage';
import Dashboard from './components/Dashboard';
import Profile from './components/Profile';
import NewArticle from './components/NewArticle';
import Articles from './components/Articles';
import Subscribers from './components/Subscribers';
import BlogArticle from './components/BlogArticle';
import { UserContext } from './contexts/userContext';
import Header from './components/Header';
import AuthContextProvider from './contexts/authContext';
import ProjectContextProvider from './contexts/projectContext';

const Main = () => {
    const { userData } = useContext(UserContext);

    return (
        <Router>
            <ProjectContextProvider>
                <AuthContextProvider>
                    <Header />
                </AuthContextProvider>
                <Routes>
                    <Route path='/' element={<HomePage />} />
                    <Route path='/learn' element={<LearnPage />} />
                    <Route path='/about' element={<AboutPage />} />
                    {
                        (userData && userData.isAdmin) &&
                        <Route path='/dashboard/*' element={<Dashboard />}>
                            <Route index element={<Profile />} />
                            <Route path='new-article' element={<NewArticle />} />
                            <Route path='articles' element={<Articles />} />
                            <Route path='subscribers' element={<Subscribers />} />
                            <Route path='articles/:articleId' element={<BlogArticle />} />
                        </Route>
                    }
                    <Route path='*' element={<Navigate to='/' replace />} />
                </Routes>
            </ProjectContextProvider>
        </Router>
    );
};

export default Main;