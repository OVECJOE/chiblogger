import './App.css';
import Main from './Main';
import UserContextProvider from './contexts/userContext';

function App() {
  return (
    <div className="App">
      <UserContextProvider>
        <Main />
      </UserContextProvider>
    </div>
  );
}

export default App;
