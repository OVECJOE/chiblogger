import {
  BrowserRouter as Router,
  Routes, Route
} from 'react-router-dom';

import './App.css';
import Header from './components/Header';
import HomePage from './components/HomePage';
import LearnPage from './components/LearnPage';
import AboutPage from './components/AboutPage';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/learn' element={<LearnPage />} />
          <Route path='/about' element={<AboutPage />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
