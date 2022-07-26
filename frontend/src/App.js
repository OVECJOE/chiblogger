import './App.css';
import Main from './Main';
import UserContextProvider from './contexts/userContext';
import ArticlesContextProvider from './contexts/articlesContext';

function App() {
  return (
    <div className="App">
      <UserContextProvider>
        <ArticlesContextProvider>
          <Main />
        </ArticlesContextProvider>
      </UserContextProvider>
    </div>
  );
}

export default App;
