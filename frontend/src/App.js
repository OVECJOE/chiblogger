import Main from './Main';
import UserContextProvider from './contexts/userContext';
import ArticlesContextProvider from './contexts/articlesContext';
import ProjectContextProvider from './contexts/projectContext';

function App() {
  return (
    <div className="App">
      <UserContextProvider>
        <ArticlesContextProvider>
          <ProjectContextProvider>
            <Main />
          </ProjectContextProvider>
        </ArticlesContextProvider>
      </UserContextProvider>
    </div>
  );
}

export default App;
