import {
  BrowserRouter as Router,
  Routes, Route
} from 'react-router-dom';

import './App.css';
import Header from './components/Header';
import HomePage from './components/HomePage';
import LearnPage from './components/LearnPage';
import AboutPage from './components/AboutPage';
import AuthContextProvider from './contexts/authContext';
import UserContextProvider from './contexts/userContext';
import Dashboard from './components/Dashboard';
import Profile from './components/Profile';
import NewArticle from './components/NewArticle';
import Articles from './components/Articles';
import Subscribers from './components/Subscribers';
import BlogArticle from './components/BlogArticle';

function App() {
  return (
    <div className="App">
      <UserContextProvider>
        <Router>
          <AuthContextProvider>
            <Header />
          </AuthContextProvider>
          <Routes>
            <Route path='/' element={<HomePage />} />
            <Route path='/learn' element={<LearnPage />} />
            <Route path='/about' element={<AboutPage />} />
            <Route path='/dashboard/*' element={<Dashboard />}>
              <Route index element={<Profile />} />
              <Route path='new-article' element={<NewArticle />} />
              <Route path='articles' element={<Articles />} />
              <Route path='subscribers' element={<Subscribers />} />
              <Route path='articles/:articleId' element={<BlogArticle />} />
            </Route>
          </Routes>
        </Router>
      </UserContextProvider>
    </div>
  );
}

export default App;
