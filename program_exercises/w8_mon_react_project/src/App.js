import { ReactComponent as Logo } from './logo.svg';
import './App.css';
import Posts from './components/Posts';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Logo style={{ height: 200 }} />
        <h1>
          "React Posts Sharer"
        </h1>
        <Posts />
      </header>
    </div>
  );
}

export default App;
