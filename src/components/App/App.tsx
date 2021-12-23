import { HomePage } from '../HomePage';
import { Nav } from '../Nav';
import './App.css';

function App() {
  return (
    <div className="">
      <div className="">
        <Nav />
      </div>
      <div className="h-screen flex justify-center items-center bg-gray-800">
        <HomePage />
      </div>
    </div>
  );
}

export default App;
