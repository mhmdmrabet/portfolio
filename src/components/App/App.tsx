import { Nav } from '../Nav';
import './App.css';

function App() {
  return (
    <>
      <Nav />
      <div className="App bg-slate-800">
        <header className="App-header">
          <img
            src="https://avatars.githubusercontent.com/u/58339336?v=4"
            className="rounded-full mb-4"
            alt="avatar"
          />
          <p>Hi 👋, I'm Mohamed M'rabet</p>
          <p>A passionate developer from Paris.</p>
        </header>
      </div>
    </>
  );
}

export default App;
